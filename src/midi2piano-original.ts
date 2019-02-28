// using System;
// using System.Collections.Generic;
// using System.ComponentModel;
// using System.Data;
// using System.Drawing;
// using System.Linq;
// using System.Text;
// using System.Windows.Forms;
//
// using Sanford.Multimedia;
// using Sanford.Multimedia.Midi;
import {Midifile} from "./MidiFile";
import {GetTempo} from "./utilityfunctions";
import {ChannelCommand, GeneralMidiInstrument, MessageType, MetaType, NoteNames} from "./PIanoEnums";

class PNote {
    public Length: number;
    public Note: String;

    public constructor(length: number, note: String) {
        this.Length = length;
        this.Note = note;
    }

    public static readonly Default: PNote = new PNote(0, "");
}

class TempoChangeBuilder {
    Tempo: number;

    constructor(m: any) {

    }

}

class TimeSignatureBuilder {
    Denominator: number;

    constructor(m: any) {

    }

}

class Sequence {
    Count: number;

    constructor(FileName: any) {

    }

}

class Form1_org {
    public OutputTxt;
    private importDlg: any;


    public importMIDIToolStripMenuItem_Click_org(midiString: string) {
        let notes: PNote[] = [];
        let curNote = PNote.Default;
        let tempo = 1;
        let timeSig = 4;

        // first, we pull midi data
        let RealS = new Midifile(midiString);
        let s = new Sequence(midiString);
        let MyTempo = GetTempo(RealS);
        // quickly see if there's a piano track first
        // and get the tempo as well
        let piano = -1;
        for (let it = 0; it < s.Count; it++) {
            let t = s[it];
            for (let me of t.Iterator()) {
                switch (me.MidiMessage.MessageType) {
                    case MessageType.Channel: {
                        let m = me.MidiMessage;
                        if (m.Command == ChannelCommand.ProgramChange)
                            if (m.Data1 == GeneralMidiInstrument.AcousticGrandPiano) {
                                piano = it;
                            }
                    }
                        break;
                    case MessageType.Meta: {
                        let m = me.MidiMessage;
                        if (m.MetaType == MetaType.Tempo)
                            tempo = (new TempoChangeBuilder(m)).Tempo;
                        else if (m.MetaType == MetaType.TimeSignature)
                            timeSig = new TimeSignatureBuilder(m).Denominator;
                    }
                        break;
                }
                if (piano >= 0)
                    break;
            }
            if (piano >= 0)
                break;
        }

        // didn't find one, so just try 0th track anyway
        if (piano == -1)
            piano = 0;

        // now, pull all notes (and tempo)
        // and make sure it's a channel that has content
        for (let it = piano; it < s.Count; it++) {
            let t = s[it];

            let delta = 0;
            for (let me of t.Iterator()) {
                delta += me.DeltaTicks;

                switch (me.MidiMessage.MessageType) {
                    case MessageType.Channel: {
                        let m = me.MidiMessage;
                        switch (m.Command) {
                            case ChannelCommand.NoteOn:
                                if (curNote.Note != "") {
                                    curNote.Length = delta / 1000;
                                    delta = 0;
                                    notes.push(curNote);
                                }

                                curNote.Note = Form1_org.note2Piano(m.Data1);
                                break;
                        }
                    }
                        break;
                    case MessageType.Meta: {
                        let m = me.MidiMessage;
                        if (m.MetaType == MetaType.Tempo)
                            tempo = (new TempoChangeBuilder(m)).Tempo;
                    }
                        break;
                }
            }

            // make sure we get last note
            if (curNote.Note != "") {
                curNote.Length = delta / 1000;
                notes.push(curNote);
            }

            // we found a track with content!
            if (notes.length > 0)
                break;
        }

        // compress redundant accidentals/octaves
        let notemods = [];
        let noteocts = [];
        for (let i = 0; i < 7; i++) {
            notemods[i] = 'n';
            noteocts[i] = 3;
        }
        for (let i = 0; i < notes.length; i++) {
            let noteStr = notes[i].Note;
            let cur_note = noteStr.charCodeAt(0) - 0x41;
            let mod = noteStr[1];
            let oct = parseInt(noteStr.substring(2));

            noteStr = noteStr.substring(0, 1);
            if (mod != notemods[cur_note]) {
                noteStr += mod;
                notemods[cur_note] = mod;
            }
            if (oct != noteocts[cur_note]) {
                noteStr += oct.toString();
                noteocts[cur_note] = oct;
            }

            notes[i] = new PNote(notes[i].Length, noteStr);
        }

        // now, we find what the "beat" length should be,
        // by counting numbers of times for each length, and finding statistical mode
        let scores: Map<number, number> = new Map();
        notes.forEach(function (note) {
            if (note.Length != 0)
                if (scores.has(note.Length))
                    scores[note.Length]++;
                else
                    scores.set(note.Length, 1);
        });
        let winner = 1;
        let score = 0;
        for (let kv of scores) {
            if (kv[0] > score) {
                winner = kv[0];
                score = kv[1];
            }
        }
        // realign all of them to match beat length
        for (let i = 0; i < notes.length; i++) {
            notes[i] = new PNote(notes[i].Length / winner, notes[i].Note);
        }

        // compress chords down
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].Length == 0 && i < notes.length - 1) {
                notes[i + 1] = new PNote(notes[i + 1].Length, notes[i].Note + "-" + notes[i + 1].Note);
                notes = notes.splice(i, 1);
                i--;
            }
        }

        // add in time
        for (let i = 0; i < notes.length; i++) {
            let len = notes[i].Length;
            if (len != 1) {
                notes[i] = new PNote(len, notes[i].Note + "/" + (1 / len).toFixed(2));
            } else {
                notes[i] = new PNote(len, notes[i].Note + "");
            }
        }

        // what is the bpm, anyway?
        let rpm = Math.round(28800000 / tempo / winner); // 60 * 1,000,000 * .48  the .48 is because note lengths for some reason midi makes the beat note be .48 long

        // now, output!
        let line = "";
        let output = "";
        let lineCount = 1;
        for (let n of notes) {
            if (line.length + n.Note.length + 1 > 51) {
                output += line.substring(0, line.length - 1) + "\r\n";
                line = "";
                if (lineCount == 50)
                    break;
                lineCount++;
            }
            line += n.Note + ",";
        }
        if (line.length > 0)
            output += line.substring(0, line.length - 1);
        this.OutputTxt = "BPM: " + rpm.toString() + "\r\n" + output;
    }


    static note2Piano(n) {
        let arg;
        let octave;
        let name = NoteNames[(n % 12)];
        if (name == null) {
            name = NoteNames[((n + 1) % 12)];
            arg = "b";
        } else {
            arg = "n";
        }
        octave = (n / 12 - 1).toString();

        return name + arg + octave;
    }
}
export {Form1_org}