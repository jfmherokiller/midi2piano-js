
import {Midifile} from "./MidiFile";
import {Form1_port} from "./midi2piano-port";
function parsethefile(midi: string) {
    let fileStuff = new Form1_port();
    fileStuff.importMIDIToolStripMenuItem_Click_Port(midi);
    let download = require("downloadjs");
    let OutputPanel: HTMLTextAreaElement = <HTMLTextAreaElement> document.getElementById("PianoOutput");
    OutputPanel.value = fileStuff.OutputTxt;
    console.log("AAAAAAA");
}
export {parsethefile}