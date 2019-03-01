"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processing_1 = require("./processing");
window.onload = () => {
    document.getElementById("file").addEventListener("change", readFile, false);
    function readFile(evt) {
        let files = evt.target.files;
        let file = files[0];
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            processing_1.parsethefile(reader.result);
        });
        reader.readAsBinaryString(file);
    }
};
//# sourceMappingURL=app.js.map