"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MidiFile_1 = require("./MidiFile");
const utilityfunctions_1 = require("./utilityfunctions");
function parsethefile(midi) {
    let midicontent = new MidiFile_1.Midifile(midi);
    let tempo = utilityfunctions_1.GetTempo(midicontent);
    let dblines = utilityfunctions_1.CreateDBLines(utilityfunctions_1.getnotes(midicontent));
    let file = utilityfunctions_1.CreateFileString(dblines, tempo);
    let download = require("downloadjs");
    download(file.join(""), "songtest.txt", "text/plain");
    console.log("AAAAAAA");
}
exports.parsethefile = parsethefile;
//# sourceMappingURL=processing.js.map