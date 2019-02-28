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


    public importMIDIToolStripMenuItem_Click_Port(midiString: string) {
        let notes: PNote[] = [];
        let curNote = PNote.Default;
        let tempo = 1;
        let timeSig = 4;

        // first, we pull midi data
        let RealS = new Midifile(midiString);
        let MyTempo = GetTempo(RealS);
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
        Onetrack = Onetrack.map(function (value:IEvent) {
           value.channel = 1;
           return value;
        });
        //filter to note on events
        //Onetrack = Onetrack.filter(element => element.subtype == "noteOn");
        //Onetrack = this.RemoveDuplicateNotes(Onetrack);
        //generate the pnoteList
        let delta = 0;
        for(let note of Onetrack) {
            delta += note.deltaTime;
            if(note.subtype === "noteOn") {
                if (curNote.Note != "") {
                    curNote.Length = +(delta / 1000).toFixed(2);
                    delta = 0;
                    let newNote:PNote = Object.assign({}, curNote);
                    notes.push(newNote);
                }
                curNote.Note = Form1_port.note2Piano(note.noteNumber);
            }
        }
        notes.entries();
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
         function filterFunction(NoteElement: IEvent, NoteIndex:number) {
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
}



export {Form1_port}