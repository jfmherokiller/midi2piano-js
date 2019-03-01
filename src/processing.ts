
import {Midifile} from "./MidiFile";
import {Form1_port} from "./midi2piano-port";
function parsethefile(midi: string) {
    let MaxCharsPerLine = parseInt((<HTMLTextAreaElement> document.getElementById("charPerLine")).value);
    let MaxLines = parseInt((<HTMLTextAreaElement> document.getElementById("MaxLines")).value);
    let fileStuff = new Form1_port(MaxCharsPerLine,MaxLines);
    fileStuff.importMIDIToolStripMenuItem_Click_Port(midi);
    let OutputPanel = <HTMLTextAreaElement> document.getElementById("PianoOutput");
    OutputPanel.value = fileStuff.OutputTxt;
    console.log("AAAAAAA");
}
export {parsethefile}