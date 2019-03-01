
import {Midifile} from "./MidiFile";
import {Form1_port} from "./midi2piano-port";

function parsethefile(midi: string) {
    let fileStuff = new Form1_port();
    fileStuff.importMIDIToolStripMenuItem_Click_Port(midi);
    let download = require("downloadjs");
    download(fileStuff.OutputTxt, "songtest.txt", "text/plain");
    console.log("AAAAAAA");
}
export {parsethefile}