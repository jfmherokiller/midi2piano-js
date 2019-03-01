"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const midi2piano_port_1 = require("./midi2piano-port");
function parsethefile(midi) {
    let MaxCharsPerLine = parseInt(document.getElementById("charPerLine").value);
    let MaxLines = parseInt(document.getElementById("MaxLines").value);
    let fileStuff = new midi2piano_port_1.Form1_port();
    fileStuff.importMIDIToolStripMenuItem_Click_Port(midi);
    let OutputPanel = document.getElementById("PianoOutput");
    OutputPanel.value = fileStuff.OutputTxt;
    console.log("AAAAAAA");
}
exports.parsethefile = parsethefile;
//# sourceMappingURL=processing.js.map