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
import {IEvent, Midifile} from "./MidiFile";
import {GetTempo} from "./utilityfunctions";
import {NoteNames} from "./PIanoEnums";

class PNote {
    public Length: number;
    public Note: String;

    public constructor(length: number, note: String) {
        this.Length = length;
        this.Note = note;
    }

    public static readonly Default: PNote = new PNote(0, "");
}


class Form1_port {
    public OutputTxt;
    public notes: PNote[];
    public tempo:number;

    public importMIDIToolStripMenuItem_Click_Port(midiString: string) {
        this.notes = [];
        let curNote = PNote.Default;
        let tempo = 1;
        let timeSig = 4;

        // first, we pull midi data
        let RealS = new Midifile(midiString);
        this.tempo = GetTempo(RealS);
        // quickly see if there's a piano track first
        // and get the tempo as well
        let Onetrack = [].concat(...RealS.tracks);
        //sort by delta time
        // Onetrack = Onetrack.sort(function (left: IEvent, right: IEvent) {
        //    if (left.deltaTime < right.deltaTime) return -1;
        //    if (left.deltaTime > right.deltaTime) return 1;
        //    return 0;
        //});
        //set all to first Channel
        Onetrack = Onetrack.map(function (value: IEvent) {
            value.channel = 1;
            return value;
        });
        //filter to note on events
        //Onetrack = Onetrack.filter(element => element.subtype == "noteOn");
        //Onetrack = this.RemoveDuplicateNotes(Onetrack);
        //generate the pnoteList
        let delta = 0;
        for (let note of Onetrack) {
            delta += note.deltaTime;
            if (note.subtype === "noteOn") {
                if (curNote.Note != "") {
                    curNote.Length = +(delta / 1000).toFixed(2);
                    delta = 0;
                    let newNote: PNote = Object.assign({}, curNote);
                    this.notes.push(newNote);
                }
                curNote.Note = Form1_port.note2Piano(note.noteNumber);
            }
        }
        this.PerformNoteCompression();
        this.NearlyDoneBits();
        this.GenerateOutput();
        console.log(this.OutputTxt);
        this.notes.entries();
    }

    PerformNoteCompression() {
        // compress redundant accidentals/octaves
        let notemods = [];
        let noteocts = [];
        for (let i = 0; i < 7; i++) {
            notemods[i] = 'n';
            noteocts[i] = 3;
        }
        for (let i = 0; i < this.notes.length; i++) {
            let noteStr = this.notes[i].Note;
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

            this.notes[i] = new PNote(this.notes[i].Length, noteStr);
        }
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
        octave = Math.round((n / 12 - 1)).toString();

        return name + arg + octave;
    }

    RemoveDuplicateNotes(NoteArray) {
        function filterFunction(NoteElement: IEvent, NoteIndex: number) {
            return NoteIndex === NoteArray.findIndex(FIndIndexFunction);

            function FIndIndexFunction(Note: IEvent) {
                let DeltaTimeCheck = Note.deltaTime === NoteElement.deltaTime;
                let NoteNumCheck = Note.noteNumber === NoteElement.noteNumber;
                let NoteVelCheck = Note.velocity === NoteElement.velocity;
                return (
                    DeltaTimeCheck && NoteNumCheck && NoteVelCheck
                );
            }
        }

        return NoteArray.filter(filterFunction);
    }

    NearlyDoneBits() {
        // now, we find what the "beat" length should be,
        // by counting numbers of times for each length, and finding statistical mode
        let scores: Map<number, number> = new Map();
        for (let note of this.notes) {
            if (note.Length != 0)
                if (scores.has(note.Length))
                    scores.set(note.Length,scores.get(note.Length)+1);
                else
                    scores.set(note.Length, 1);
        }
        let winner = 1;
        let score = 0;
        for (let kv of scores) {
            if (kv[0] > score) {
                winner = kv[0];
                score = kv[1];
            }
        }
        // realign all of them to match beat length
        for (let i = 0; i < this.notes.length; i++) {
            this.notes[i] = new PNote(+(this.notes[i].Length / winner).toFixed(2), this.notes[i].Note);
        }

        // compress chords down
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].Length == 0) {
                if (i < this.notes.length - 1) {
                    this.notes[i + 1] = new PNote(this.notes[i + 1].Length, this.notes[i].Note + "-" + this.notes[i + 1].Note);
                    this.notes.splice(i, 1);
                    i--;
                }
            }
        }

        // add in time
        for (let i = 0; i < this.notes.length; i++) {
            let len = this.notes[i].Length;
            if (len != 1) {
                this.notes[i] = new PNote(len, this.notes[i].Note + "/" + (1 / len).toFixed(2));
            } else {
                this.notes[i] = new PNote(len, this.notes[i].Note + "");
            }
        }
    }
    GenerateOutput() {
        // now, output!
        let line = "";
        let output = "";
        let lineCount = 1;
        for (let n of this.notes) {
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
        this.OutputTxt = "BPM: " + this.tempo.toString() + "\r\n" + output;
    }
}


export {Form1_port}