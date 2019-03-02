import {parsethefile} from "./processing"
import {Midifile} from "./MidiFile";
import {AudioContext} from 'standardized-audio-context';
import {callbackify} from "util";

let WebAudioFontPlayer = require("webaudiofont");
window.onload = () => {
    document.getElementById("file").addEventListener("change", readFile, false);
    let midiplayer = new MidiPlayer2();
    midiplayer.setupWindowVar();

    function readFile(evt) {
        let files = evt.target.files;
        let file = files[0];
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            midiplayer.realLoader(reader.result);
            parsethefile(reader.result);
        });
        reader.readAsBinaryString(file);
    }

};

declare class MIDIFile {
    constructor(MidiData:ArrayBuffer)
    parseSong();
}

class MidiPlayer2 {
    audioContext = null;
    player = null;
    reverberator = null;
    songStart = 0;
    input = null;
    currentSongTime = 0;
    nextStepTime = 0;
    nextPositionTime = 0;
    loadedsong = null;
    stopped = true;
    constructor() {

    }
    setupWindowVar() {
        window["go"] = this.go;
    }
    go() {
        document.getElementById('tmr').innerHTML = 'starting...';
        try {
            this.startPlay(this.loadedsong);
            document.getElementById('tmr').innerHTML = 'playing...';
        } catch (expt) {
            document.getElementById('tmr').innerHTML = 'error ' + expt;
        }
    }

    startPlay(song) {
        this.currentSongTime = 0;
        this.songStart = this.audioContext.currentTime;
        this.nextStepTime = this.audioContext.currentTime;
        const stepDuration = 44 / 1000;
        this.tick(song, stepDuration);
    }

    tick(song, stepDuration) {
        let mythis = this;
        if (this.audioContext.currentTime > this.nextStepTime - stepDuration) {
            MidiPlayer2.sendNotes(song, this.songStart, this.currentSongTime, this.currentSongTime + stepDuration, this.audioContext, this.input, this.player);
            this.currentSongTime = this.currentSongTime + stepDuration;
            this.nextStepTime = this.nextStepTime + stepDuration;
            if (this.currentSongTime > song.duration) {
                this.currentSongTime = this.currentSongTime - song.duration;
                MidiPlayer2.sendNotes(song, this.songStart, 0, this.currentSongTime, this.audioContext, this.input, this.player);
                this.songStart = this.songStart + song.duration;
            }
        }
        if (this.nextPositionTime < this.audioContext.currentTime) {
            const o = <HTMLInputElement>document.getElementById('position');
            o.value = (100 * this.currentSongTime / song.duration).toString();
            document.getElementById('tmr').innerHTML = '' + Math.round(100 * this.currentSongTime / song.duration) + '%';
            this.nextPositionTime = this.audioContext.currentTime + 3;
        }
        if (!this.stopped) {
            window.requestAnimationFrame(function (t) {
                mythis.tick(song, stepDuration);
            });
        }
    }

    static sendNotes(song, songStart, start, end, audioContext, input, player) {
        for (let t = 0; t < song.tracks.length; t++) {
            const track = song.tracks[t];
            for (let i = 0; i < track.notes.length; i++) {
                if (track.notes[i].when >= start && track.notes[i].when < end) {
                    let when = songStart + track.notes[i].when;
                    let duration = track.notes[i].duration;
                    if (duration > 3) {
                        duration = 3;
                    }
                    let instr = track.info.variable;
                    let v = track.volume / 7;
                    player.queueWaveTable(audioContext, input, window[instr], when, track.notes[i].pitch, duration, v, track.notes[i].slides);
                }
            }
        }
        for (let b = 0; b < song.beats.length; b++) {
            const beat = song.beats[b];
            for (let i = 0; i < beat.notes.length; i++) {
                if (beat.notes[i].when >= start && beat.notes[i].when < end) {
                    let when = songStart + beat.notes[i].when;
                    let duration = 1.5;
                    let instr = beat.info.variable;
                    let v = beat.volume / 2;
                    player.queueWaveTable(audioContext, input, window[instr], when, beat.n, duration, v);
                }
            }
        }
    }

    startLoad(song) {
        console.log(song);
        const AudioContextFunc = AudioContext;
        this.audioContext = new AudioContextFunc();
        this.player = new WebAudioFontPlayer();
        this.reverberator = this.player.createReverberator(this.audioContext);
        this.reverberator.output.connect(this.audioContext.destination);
        this.input = this.reverberator.input;
        for (let i = 0; i < song.tracks.length; i++) {
            let nn = this.player.loader.findInstrument(song.tracks[i].program);
            let info = this.player.loader.instrumentInfo(nn);
            song.tracks[i].info = info;
            song.tracks[i].id = nn;
            this.player.loader.startLoad(this.audioContext, info.url, info.variable);
        }
        for (let i = 0; i < song.beats.length; i++) {
            let nn = this.player.loader.findDrum(song.beats[i].n);
            let info = this.player.loader.drumInfo(nn);
            song.beats[i].info = info;
            song.beats[i].id = nn;
            this.player.loader.startLoad(this.audioContext, info.url, info.variable);
        }
        let mythis = this;
        this.player.loader.waitLoad(function () {
            console.log('buildControls');
            mythis.buildControls(song);
        });
    }

    buildControls(song) {
        let mythis = this;
        this.audioContext.resume();
        const o = document.getElementById('cntls');
        let html = `<h2 id="wrng">Refresh browser page to load another song</h2>`;
        html = `${html}<p id="tmr"><button id="playButton">Play</button></p>`;
        html = `${html}<p><input id="position" type="range" min="0" max="100" value="0" step="1" /></p>`;
        html = html + '<h3>Channels</h3>';
        for (let i = 0; i < song.tracks.length; i++) {
            let v = 100 * song.tracks[i].volume;
            html = html + '<p>' + this.chooserIns(song.tracks[i].id, i) + '<input id="channel' + i + '" type="range" min="0" max="100" value="' + v + '" step="1" /></p>';
        }
        html = html + '<h3>Drums</h3>';
        for (let i = 0; i < song.beats.length; i++) {
            let v = 100 * song.beats[i].volume;
            html = html + '<p>' + this.chooserDrum(song.beats[i].id, i) + '<input id="drum' + i + '" type="range" min="0" max="100" value="' + v + '" step="1" /></p>';
        }
        o.innerHTML = html;
        console.log('Loaded');
        const pos = <HTMLInputElement>document.getElementById('position');
        pos.oninput = function (e) {
            if (mythis.loadedsong) {
                mythis.player.cancelQueue(mythis.audioContext);
                const next = song.duration * parseInt(pos.value) / 100;
                mythis.songStart = mythis.songStart - (next - mythis.currentSongTime);
                mythis.currentSongTime = next;
            }
        };
        document.getElementById("playButton").addEventListener("click",function () {
            mythis.go();
        });
        console.log('Tracks');
        for (let i = 0; i < song.tracks.length; i++) {
            this.setVolumeAction(i, song);
        }
        console.log('Drums');
        for (let i = 0; i < song.beats.length; i++) {
            this.setDrVolAction(i, song);
        }
        this.loadedsong = song;
    }

    setVolumeAction(i, song) {
        let mythis = this;
        const vlm = <HTMLInputElement>document.getElementById('channel' + i);
        vlm.oninput = function (e) {
            mythis.player.cancelQueue(mythis.audioContext);
            let v = parseInt(vlm.value) / 100;
            if (v < 0.000001) {
                v = 0.000001;
            }
            song.tracks[i].volume = v;
        };
        const sl = <HTMLInputElement>document.getElementById('selins' + i);
        sl.onchange = function (e) {
            const nn = sl.value;
            const info = mythis.player.loader.instrumentInfo(nn);
            mythis.player.loader.startLoad(mythis.audioContext, info.url, info.variable);
            mythis.player.loader.waitLoad(function () {
                console.log('loaded');
                song.tracks[i].info = info;
                song.tracks[i].id = nn;
            });
        };
    }

    setDrVolAction(i, song) {
        let mythis = this;
        const vlm = <HTMLInputElement>document.getElementById('drum' + i);
        vlm.oninput = function (e) {
            mythis.player.cancelQueue(mythis.audioContext);
            let v = parseInt(vlm.value) / 100;
            if (v < 0.000001) {
                v = 0.000001;
            }
            song.beats[i].volume = v;
        };
        const sl = <HTMLInputElement>document.getElementById('seldrm' + i);
        sl.onchange = function (e) {
            const nn = sl.value;
            const info = mythis.player.loader.drumInfo(nn);
            mythis.player.loader.startLoad(mythis.audioContext, info.url, info.variable);
            mythis.player.loader.waitLoad(function () {
                console.log('loaded');
                song.beats[i].info = info;
                song.beats[i].id = nn;
            });
        };
    }

    chooserIns(n, track) {
        let html = `<select id="selins${track}">`;
        for (let i = 0; i < this.player.loader.instrumentKeys().length; i++) {
            let sel = '';
            if (i == n) {
                sel = ' selected';
            }
            html = `${html}<option value="${i}" ${sel}>${i}: ${this.player.loader.instrumentInfo(i).title}</option>`;
        }
        html = html + '</select>';
        return html;
    }

    chooserDrum(n, beat) {
        let html = '<select id="seldrm' + beat + '">';
        for (let i = 0; i < this.player.loader.drumKeys().length; i++) {
            let sel = '';
            if (i == n) {
                sel = ' selected';
            }
            html = html + '<option value="' + i + '"' + sel + '>' + i + ': ' + this.player.loader.drumInfo(i).title + '</option>';
        }
        html = html + '</select>';
        return html;
    }

    handleFileSelect(event) {
        let mythis = this;
        console.log(event);
        const file = event.target.files[0];
        console.log(file);
        const fileReader = new FileReader();
        fileReader.onload = function (progressEvent) {
            console.log(progressEvent);
            const arrayBuffer = progressEvent.target.result;
            console.log(arrayBuffer);
            const midiFile = new Midifile(arrayBuffer);
            mythis.startLoad(midiFile);
        };
        fileReader.readAsArrayBuffer(file);
    }

    realLoader(MidiData) {
        this.stopped = true;
        let mythis = this;
        setTimeout(function () {
            if (mythis.player != null) {

                mythis.audioContext = null;
                mythis.player = null;
                mythis.reverberator = null;
                mythis.songStart = 0;
                mythis.input = null;
                mythis.currentSongTime = 0;
                mythis.nextStepTime = 0;
                mythis.nextPositionTime = 0;
                mythis.loadedsong = null;
                // @ts-ignore
                document.getElementById('cntls').children.remove();
            }
            setTimeout(() => {
                let midiFile = new MIDIFile(MidiPlayer2.str2ab(MidiData));
                let song = midiFile.parseSong();
                mythis.stopped = false;
                mythis.startLoad(song)
            }, 2000);
        }, 1000);
    }

    static str2ab(str) {
        let buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        let bufView = new Uint8Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
}