import {readFileSync} from "fs";
import {Form1_org} from "./midi2piano-original";
import {Form1_port} from "./midi2piano-port";
function main() {
    let FileContents = readFileSync("E:\\mygdrive2\\Public\\midi\\Duvet.mid");
    let Output = new Form1_port();
    let cool = Output.importMIDIToolStripMenuItem_Click_Port(FileContents.toString('binary'));
}

main();