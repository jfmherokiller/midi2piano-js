(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.download = factory();
  }
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MidiHeader {
    constructor(formatype, trackCount, ticksPerBeat) {
        this.formatType = formatype;
        this.trackCount = trackCount;
        this.ticksPerBeat = ticksPerBeat;
    }
}
class Chunk {
    constructor(newid, newlength, newdata) {
        this.id = newid;
        this.length = newlength;
        this.data = newdata;
    }
}
class Midifile {
    constructor(data) {
        this.tracks = [];
        let ticksPerBeat;
        this.stream = new StringStream(data);
        const headerChunk = Midifile.readChunk(this.stream);
        if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
            throw "Bad .mid file - header not found";
        }
        const headerStream = new StringStream(headerChunk.data);
        const formatType = headerStream.readInt16();
        const trackCount = headerStream.readInt16();
        const timeDivision = headerStream.readInt16();
        if (timeDivision & 0x8000) {
            throw "Expressing time division in SMTPE frames is not supported yet";
        }
        else {
            ticksPerBeat = timeDivision;
        }
        this.header = new MidiHeader(formatType, trackCount, ticksPerBeat);
        for (let i = 0; i < this.header.trackCount; i++) {
            this.tracks[i] = new Array();
            let trackChunk = Midifile.readChunk(this.stream);
            if (trackChunk.id !== "MTrk") {
                throw "Unexpected chunk - expected MTrk, got " + trackChunk.id;
            }
            let trackStream = new StringStream(trackChunk.data);
            while (!trackStream.eof()) {
                const event = this.readEvent(trackStream);
                this.tracks[i].push(event);
                //console.log(event);
            }
        }
    }
    static readChunk(stream) {
        const id = stream.read(4);
        const length = stream.readInt32();
        return new Chunk(id, length, stream.read(length));
    }
    readEvent(stream) {
        const event = ({});
        event.deltaTime = stream.readVarInt();
        let eventTypeByte = stream.readInt8();
        if ((eventTypeByte & 0xf0) === 0xf0) {
            /* system / meta event */
            let length;
            if (eventTypeByte === 0xff) {
                /* meta event */
                event.type = "meta";
                const subtypeByte = stream.readInt8();
                length = stream.readVarInt();
                switch (subtypeByte) {
                    case 0x00:
                        event.subtype = "sequenceNumber";
                        if (length !== 2)
                            throw "Expected length for sequenceNumber event is 2, got " + length;
                        event.number = stream.readInt16();
                        return event;
                    case 0x01:
                        event.subtype = "text";
                        event.text = stream.read(length);
                        return event;
                    case 0x02:
                        event.subtype = "copyrightNotice";
                        event.text = stream.read(length);
                        return event;
                    case 0x03:
                        event.subtype = "trackName";
                        event.text = stream.read(length);
                        return event;
                    case 0x04:
                        event.subtype = "instrumentName";
                        event.text = stream.read(length);
                        return event;
                    case 0x05:
                        event.subtype = "lyrics";
                        event.text = stream.read(length);
                        return event;
                    case 0x06:
                        event.subtype = "marker";
                        event.text = stream.read(length);
                        return event;
                    case 0x07:
                        event.subtype = "cuePoint";
                        event.text = stream.read(length);
                        return event;
                    case 0x20:
                        event.subtype = "midiChannelPrefix";
                        if (length !== 1)
                            throw "Expected length for midiChannelPrefix event is 1, got " + length;
                        event.channel = stream.readInt8();
                        return event;
                    case 0x2f:
                        event.subtype = "endOfTrack";
                        if (length !== 0)
                            throw "Expected length for endOfTrack event is 0, got " + length;
                        return event;
                    case 0x51:
                        event.subtype = "setTempo";
                        if (length !== 3)
                            throw "Expected length for setTempo event is 3, got " + length;
                        event.microsecondsPerBeat = ((stream.readInt8() << 16)
                            + (stream.readInt8() << 8)
                            + stream.readInt8());
                        return event;
                    case 0x54:
                        event.subtype = "smpteOffset";
                        if (length !== 5)
                            throw "Expected length for smpteOffset event is 5, got " + length;
                        const hourByte = stream.readInt8();
                        event.frameRate = {
                            0x00: 24, 0x20: 25, 0x40: 29, 0x60: 30
                        }[hourByte & 0x60];
                        event.hour = hourByte & 0x1f;
                        event.min = stream.readInt8();
                        event.sec = stream.readInt8();
                        event.frame = stream.readInt8();
                        event.subframe = stream.readInt8();
                        return event;
                    case 0x58:
                        event.subtype = "timeSignature";
                        if (length !== 4)
                            throw "Expected length for timeSignature event is 4, got " + length;
                        event.numerator = stream.readInt8();
                        event.denominator = Math.pow(2, stream.readInt8());
                        event.metronome = stream.readInt8();
                        event.thirtyseconds = stream.readInt8();
                        return event;
                    case 0x59:
                        event.subtype = "keySignature";
                        if (length !== 2)
                            throw "Expected length for keySignature event is 2, got " + length;
                        event.key = stream.readInt8(true);
                        event.scale = stream.readInt8();
                        return event;
                    case 0x7f:
                        event.subtype = "sequencerSpecific";
                        event.data = stream.read(length);
                        return event;
                    default:
                        // console.log("Unrecognised meta event subtype: " + subtypeByte);
                        event.subtype = "unknown";
                        event.data = stream.read(length);
                        return event;
                }
                //event.data = stream.read(length);
                //return event;
            }
            else if (eventTypeByte === 0xf0) {
                event.type = "sysEx";
                length = stream.readVarInt();
                event.data = stream.read(length);
                return event;
            }
            else if (eventTypeByte === 0xf7) {
                event.type = "dividedSysEx";
                length = stream.readVarInt();
                event.data = stream.read(length);
                return event;
            }
            else {
                throw "Unrecognised MIDI event type byte: " + eventTypeByte;
            }
        }
        else {
            /* channel event */
            let param1;
            if ((eventTypeByte & 0x80) === 0) {
                /* running status - reuse lastEventTypeByte as the event type.
                    eventTypeByte is actually the first parameter
                */
                param1 = eventTypeByte;
                eventTypeByte = this.lastEventTypeByte;
            }
            else {
                param1 = stream.readInt8();
                this.lastEventTypeByte = eventTypeByte;
            }
            const eventType = eventTypeByte >> 4;
            event.channel = eventTypeByte & 0x0f;
            event.type = "channel";
            switch (eventType) {
                case 0x08:
                    event.subtype = "noteOff";
                    event.noteNumber = param1;
                    event.velocity = stream.readInt8();
                    return event;
                case 0x09:
                    event.noteNumber = param1;
                    event.velocity = stream.readInt8();
                    if (event.velocity === 0) {
                        event.subtype = "noteOff";
                    }
                    else {
                        event.subtype = "noteOn";
                    }
                    return event;
                case 0x0a:
                    event.subtype = "noteAftertouch";
                    event.noteNumber = param1;
                    event.amount = stream.readInt8();
                    return event;
                case 0x0b:
                    event.subtype = "controller";
                    event.controllerType = param1;
                    event.value = stream.readInt8();
                    return event;
                case 0x0c:
                    event.subtype = "programChange";
                    event.programNumber = param1;
                    return event;
                case 0x0d:
                    event.subtype = "channelAftertouch";
                    event.amount = param1;
                    return event;
                case 0x0e:
                    event.subtype = "pitchBend";
                    event.value = param1 + (stream.readInt8() << 7);
                    return event;
                default:
                    throw `Unrecognised MIDI event type: ${eventType}`;
                /*
                console.log("Unrecognised MIDI event type: " + eventType);
                stream.readInt8();
                event.subtype = 'unknown';
                return event;
                */
            }
        }
    }
}
exports.Midifile = Midifile;
/* Wrapper for accessing strings through sequential reads */
class StringStream {
    constructor(inputstring) {
        this.position = 0;
        this.str = inputstring;
    }
    read(length) {
        const result = this.str.substr(this.position, length);
        this.position += length;
        return result;
    }
    /* read a big-endian 32-bit integer */
    readInt32() {
        const result = ((this.str.charCodeAt(this.position) << 24)
            + (this.str.charCodeAt(this.position + 1) << 16)
            + (this.str.charCodeAt(this.position + 2) << 8)
            + this.str.charCodeAt(this.position + 3));
        this.position += 4;
        return result;
    }
    /* read a big-endian 16-bit integer */
    readInt16() {
        const result = ((this.str.charCodeAt(this.position) << 8)
            + this.str.charCodeAt(this.position + 1));
        this.position += 2;
        return result;
    }
    /* read an 8-bit integer */
    readInt8(signed) {
        let result = this.str.charCodeAt(this.position);
        if (signed && result > 127) {
            result -= 256;
        }
        this.position += 1;
        return result;
    }
    eof() {
        return this.position >= this.str.length;
    }
    /* read a MIDI-style variable-length integer
        (big-endian value in groups of 7 bits,
        with top bit set to signify that another byte follows)
    */
    readVarInt() {
        let result = 0;
        while (true) {
            const b = this.readInt8();
            if (b & 0x80) {
                result += (b & 0x7f);
                result <<= 7;
            }
            else {
                /* b is the last byte */
                return result + b;
            }
        }
    }
}

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChannelCommand;
(function (ChannelCommand) {
    /// <summary>
    /// Represents the note-off command type.
    /// </summary>
    ChannelCommand[ChannelCommand["NoteOff"] = 128] = "NoteOff";
    /// <summary>
    /// Represents the note-on command type.
    /// </summary>
    ChannelCommand[ChannelCommand["NoteOn"] = 144] = "NoteOn";
    /// <summary>
    /// Represents the poly pressure (aftertouch) command type.
    /// </summary>
    ChannelCommand[ChannelCommand["PolyPressure"] = 160] = "PolyPressure";
    /// <summary>
    /// Represents the controller command type.
    /// </summary>
    ChannelCommand[ChannelCommand["Controller"] = 176] = "Controller";
    /// <summary>
    /// Represents the program change command type.
    /// </summary>
    ChannelCommand[ChannelCommand["ProgramChange"] = 192] = "ProgramChange";
    /// <summary>
    /// Represents the channel pressure (aftertouch) command
    /// type.
    /// </summary>
    ChannelCommand[ChannelCommand["ChannelPressure"] = 208] = "ChannelPressure";
    /// <summary>
    /// Represents the pitch wheel command type.
    /// </summary>
    ChannelCommand[ChannelCommand["PitchWheel"] = 224] = "PitchWheel";
})(ChannelCommand || (ChannelCommand = {}));
exports.ChannelCommand = ChannelCommand;
var NoteNames;
(function (NoteNames) {
    NoteNames[NoteNames["C"] = 0] = "C";
    NoteNames[NoteNames["D"] = 2] = "D";
    NoteNames[NoteNames["E"] = 4] = "E";
    NoteNames[NoteNames["F"] = 5] = "F";
    NoteNames[NoteNames["G"] = 7] = "G";
    NoteNames[NoteNames["A"] = 9] = "A";
    NoteNames[NoteNames["B"] = 11] = "B";
})(NoteNames || (NoteNames = {}));
exports.NoteNames = NoteNames;
var GeneralMidiInstrument;
(function (GeneralMidiInstrument) {
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticGrandPiano"] = 0] = "AcousticGrandPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["BrightAcousticPiano"] = 1] = "BrightAcousticPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGrandPiano"] = 2] = "ElectricGrandPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["HonkyTonkPiano"] = 3] = "HonkyTonkPiano";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricPiano1"] = 4] = "ElectricPiano1";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricPiano2"] = 5] = "ElectricPiano2";
    GeneralMidiInstrument[GeneralMidiInstrument["Harpsichord"] = 6] = "Harpsichord";
    GeneralMidiInstrument[GeneralMidiInstrument["Clavinet"] = 7] = "Clavinet";
    GeneralMidiInstrument[GeneralMidiInstrument["Celesta"] = 8] = "Celesta";
    GeneralMidiInstrument[GeneralMidiInstrument["Glockenspiel"] = 9] = "Glockenspiel";
    GeneralMidiInstrument[GeneralMidiInstrument["MusicBox"] = 10] = "MusicBox";
    GeneralMidiInstrument[GeneralMidiInstrument["Vibraphone"] = 11] = "Vibraphone";
    GeneralMidiInstrument[GeneralMidiInstrument["Marimba"] = 12] = "Marimba";
    GeneralMidiInstrument[GeneralMidiInstrument["Xylophone"] = 13] = "Xylophone";
    GeneralMidiInstrument[GeneralMidiInstrument["TubularBells"] = 14] = "TubularBells";
    GeneralMidiInstrument[GeneralMidiInstrument["Dulcimer"] = 15] = "Dulcimer";
    GeneralMidiInstrument[GeneralMidiInstrument["DrawbarOrgan"] = 16] = "DrawbarOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["PercussiveOrgan"] = 17] = "PercussiveOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["RockOrgan"] = 18] = "RockOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["ChurchOrgan"] = 19] = "ChurchOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["ReedOrgan"] = 20] = "ReedOrgan";
    GeneralMidiInstrument[GeneralMidiInstrument["Accordion"] = 21] = "Accordion";
    GeneralMidiInstrument[GeneralMidiInstrument["Harmonica"] = 22] = "Harmonica";
    GeneralMidiInstrument[GeneralMidiInstrument["TangoAccordion"] = 23] = "TangoAccordion";
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticGuitarNylon"] = 24] = "AcousticGuitarNylon";
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticGuitarSteel"] = 25] = "AcousticGuitarSteel";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGuitarJazz"] = 26] = "ElectricGuitarJazz";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGuitarClean"] = 27] = "ElectricGuitarClean";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricGuitarMuted"] = 28] = "ElectricGuitarMuted";
    GeneralMidiInstrument[GeneralMidiInstrument["OverdrivenGuitar"] = 29] = "OverdrivenGuitar";
    GeneralMidiInstrument[GeneralMidiInstrument["DistortionGuitar"] = 30] = "DistortionGuitar";
    GeneralMidiInstrument[GeneralMidiInstrument["GuitarHarmonics"] = 31] = "GuitarHarmonics";
    GeneralMidiInstrument[GeneralMidiInstrument["AcousticBass"] = 32] = "AcousticBass";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricBassFinger"] = 33] = "ElectricBassFinger";
    GeneralMidiInstrument[GeneralMidiInstrument["ElectricBassPick"] = 34] = "ElectricBassPick";
    GeneralMidiInstrument[GeneralMidiInstrument["FretlessBass"] = 35] = "FretlessBass";
    GeneralMidiInstrument[GeneralMidiInstrument["SlapBass1"] = 36] = "SlapBass1";
    GeneralMidiInstrument[GeneralMidiInstrument["SlapBass2"] = 37] = "SlapBass2";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBass1"] = 38] = "SynthBass1";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBass2"] = 39] = "SynthBass2";
    GeneralMidiInstrument[GeneralMidiInstrument["Violin"] = 40] = "Violin";
    GeneralMidiInstrument[GeneralMidiInstrument["Viola"] = 41] = "Viola";
    GeneralMidiInstrument[GeneralMidiInstrument["Cello"] = 42] = "Cello";
    GeneralMidiInstrument[GeneralMidiInstrument["Contrabass"] = 43] = "Contrabass";
    GeneralMidiInstrument[GeneralMidiInstrument["TremoloStrings"] = 44] = "TremoloStrings";
    GeneralMidiInstrument[GeneralMidiInstrument["PizzicatoStrings"] = 45] = "PizzicatoStrings";
    GeneralMidiInstrument[GeneralMidiInstrument["OrchestralHarp"] = 46] = "OrchestralHarp";
    GeneralMidiInstrument[GeneralMidiInstrument["Timpani"] = 47] = "Timpani";
    GeneralMidiInstrument[GeneralMidiInstrument["StringEnsemble1"] = 48] = "StringEnsemble1";
    GeneralMidiInstrument[GeneralMidiInstrument["StringEnsemble2"] = 49] = "StringEnsemble2";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthStrings1"] = 50] = "SynthStrings1";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthStrings2"] = 51] = "SynthStrings2";
    GeneralMidiInstrument[GeneralMidiInstrument["ChoirAahs"] = 52] = "ChoirAahs";
    GeneralMidiInstrument[GeneralMidiInstrument["VoiceOohs"] = 53] = "VoiceOohs";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthVoice"] = 54] = "SynthVoice";
    GeneralMidiInstrument[GeneralMidiInstrument["OrchestraHit"] = 55] = "OrchestraHit";
    GeneralMidiInstrument[GeneralMidiInstrument["Trumpet"] = 56] = "Trumpet";
    GeneralMidiInstrument[GeneralMidiInstrument["Trombone"] = 57] = "Trombone";
    GeneralMidiInstrument[GeneralMidiInstrument["Tuba"] = 58] = "Tuba";
    GeneralMidiInstrument[GeneralMidiInstrument["MutedTrumpet"] = 59] = "MutedTrumpet";
    GeneralMidiInstrument[GeneralMidiInstrument["FrenchHorn"] = 60] = "FrenchHorn";
    GeneralMidiInstrument[GeneralMidiInstrument["BrassSection"] = 61] = "BrassSection";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBrass1"] = 62] = "SynthBrass1";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthBrass2"] = 63] = "SynthBrass2";
    GeneralMidiInstrument[GeneralMidiInstrument["SopranoSax"] = 64] = "SopranoSax";
    GeneralMidiInstrument[GeneralMidiInstrument["AltoSax"] = 65] = "AltoSax";
    GeneralMidiInstrument[GeneralMidiInstrument["TenorSax"] = 66] = "TenorSax";
    GeneralMidiInstrument[GeneralMidiInstrument["BaritoneSax"] = 67] = "BaritoneSax";
    GeneralMidiInstrument[GeneralMidiInstrument["Oboe"] = 68] = "Oboe";
    GeneralMidiInstrument[GeneralMidiInstrument["EnglishHorn"] = 69] = "EnglishHorn";
    GeneralMidiInstrument[GeneralMidiInstrument["Bassoon"] = 70] = "Bassoon";
    GeneralMidiInstrument[GeneralMidiInstrument["Clarinet"] = 71] = "Clarinet";
    GeneralMidiInstrument[GeneralMidiInstrument["Piccolo"] = 72] = "Piccolo";
    GeneralMidiInstrument[GeneralMidiInstrument["Flute"] = 73] = "Flute";
    GeneralMidiInstrument[GeneralMidiInstrument["Recorder"] = 74] = "Recorder";
    GeneralMidiInstrument[GeneralMidiInstrument["PanFlute"] = 75] = "PanFlute";
    GeneralMidiInstrument[GeneralMidiInstrument["BlownBottle"] = 76] = "BlownBottle";
    GeneralMidiInstrument[GeneralMidiInstrument["Shakuhachi"] = 77] = "Shakuhachi";
    GeneralMidiInstrument[GeneralMidiInstrument["Whistle"] = 78] = "Whistle";
    GeneralMidiInstrument[GeneralMidiInstrument["Ocarina"] = 79] = "Ocarina";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead1Square"] = 80] = "Lead1Square";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead2Sawtooth"] = 81] = "Lead2Sawtooth";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead3Calliope"] = 82] = "Lead3Calliope";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead4Chiff"] = 83] = "Lead4Chiff";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead5Charang"] = 84] = "Lead5Charang";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead6Voice"] = 85] = "Lead6Voice";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead7Fifths"] = 86] = "Lead7Fifths";
    GeneralMidiInstrument[GeneralMidiInstrument["Lead8BassAndLead"] = 87] = "Lead8BassAndLead";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad1NewAge"] = 88] = "Pad1NewAge";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad2Warm"] = 89] = "Pad2Warm";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad3Polysynth"] = 90] = "Pad3Polysynth";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad4Choir"] = 91] = "Pad4Choir";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad5Bowed"] = 92] = "Pad5Bowed";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad6Metallic"] = 93] = "Pad6Metallic";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad7Halo"] = 94] = "Pad7Halo";
    GeneralMidiInstrument[GeneralMidiInstrument["Pad8Sweep"] = 95] = "Pad8Sweep";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx1Rain"] = 96] = "Fx1Rain";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx2Soundtrack"] = 97] = "Fx2Soundtrack";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx3Crystal"] = 98] = "Fx3Crystal";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx4Atmosphere"] = 99] = "Fx4Atmosphere";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx5Brightness"] = 100] = "Fx5Brightness";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx6Goblins"] = 101] = "Fx6Goblins";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx7Echoes"] = 102] = "Fx7Echoes";
    GeneralMidiInstrument[GeneralMidiInstrument["Fx8SciFi"] = 103] = "Fx8SciFi";
    GeneralMidiInstrument[GeneralMidiInstrument["Sitar"] = 104] = "Sitar";
    GeneralMidiInstrument[GeneralMidiInstrument["Banjo"] = 105] = "Banjo";
    GeneralMidiInstrument[GeneralMidiInstrument["Shamisen"] = 106] = "Shamisen";
    GeneralMidiInstrument[GeneralMidiInstrument["Koto"] = 107] = "Koto";
    GeneralMidiInstrument[GeneralMidiInstrument["Kalimba"] = 108] = "Kalimba";
    GeneralMidiInstrument[GeneralMidiInstrument["BagPipe"] = 109] = "BagPipe";
    GeneralMidiInstrument[GeneralMidiInstrument["Fiddle"] = 110] = "Fiddle";
    GeneralMidiInstrument[GeneralMidiInstrument["Shanai"] = 111] = "Shanai";
    GeneralMidiInstrument[GeneralMidiInstrument["TinkleBell"] = 112] = "TinkleBell";
    GeneralMidiInstrument[GeneralMidiInstrument["Agogo"] = 113] = "Agogo";
    GeneralMidiInstrument[GeneralMidiInstrument["SteelDrums"] = 114] = "SteelDrums";
    GeneralMidiInstrument[GeneralMidiInstrument["Woodblock"] = 115] = "Woodblock";
    GeneralMidiInstrument[GeneralMidiInstrument["TaikoDrum"] = 116] = "TaikoDrum";
    GeneralMidiInstrument[GeneralMidiInstrument["MelodicTom"] = 117] = "MelodicTom";
    GeneralMidiInstrument[GeneralMidiInstrument["SynthDrum"] = 118] = "SynthDrum";
    GeneralMidiInstrument[GeneralMidiInstrument["ReverseCymbal"] = 119] = "ReverseCymbal";
    GeneralMidiInstrument[GeneralMidiInstrument["GuitarFretNoise"] = 120] = "GuitarFretNoise";
    GeneralMidiInstrument[GeneralMidiInstrument["BreathNoise"] = 121] = "BreathNoise";
    GeneralMidiInstrument[GeneralMidiInstrument["Seashore"] = 122] = "Seashore";
    GeneralMidiInstrument[GeneralMidiInstrument["BirdTweet"] = 123] = "BirdTweet";
    GeneralMidiInstrument[GeneralMidiInstrument["TelephoneRing"] = 124] = "TelephoneRing";
    GeneralMidiInstrument[GeneralMidiInstrument["Helicopter"] = 125] = "Helicopter";
    GeneralMidiInstrument[GeneralMidiInstrument["Applause"] = 126] = "Applause";
    GeneralMidiInstrument[GeneralMidiInstrument["Gunshot"] = 127] = "Gunshot";
})(GeneralMidiInstrument || (GeneralMidiInstrument = {}));
exports.GeneralMidiInstrument = GeneralMidiInstrument;
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Channel"] = 0] = "Channel";
    MessageType[MessageType["SystemExclusive"] = 1] = "SystemExclusive";
    MessageType[MessageType["SystemCommon"] = 2] = "SystemCommon";
    MessageType[MessageType["SystemRealtime"] = 3] = "SystemRealtime";
    MessageType[MessageType["Meta"] = 4] = "Meta";
    MessageType[MessageType["Short"] = 5] = "Short";
})(MessageType || (MessageType = {}));
exports.MessageType = MessageType;
/// <summary>
/// Defines constants for controller types.
/// </summary>
var ControllerType;
(function (ControllerType) {
    /// <summary>
    /// The Bank Select coarse.
    /// </summary>
    ControllerType[ControllerType["BankSelect"] = 0] = "BankSelect";
    /// <summary>
    /// The Modulation Wheel coarse.
    /// </summary>
    ControllerType[ControllerType["ModulationWheel"] = 1] = "ModulationWheel";
    /// <summary>
    /// The Breath Control coarse.
    /// </summary>
    ControllerType[ControllerType["BreathControl"] = 2] = "BreathControl";
    /// <summary>
    /// The Foot Pedal coarse.
    /// </summary>
    ControllerType[ControllerType["FootPedal"] = 4] = "FootPedal";
    /// <summary>
    /// The Portamento Time coarse.
    /// </summary>
    ControllerType[ControllerType["PortamentoTime"] = 5] = "PortamentoTime";
    /// <summary>
    /// The Data Entry Slider coarse.
    /// </summary>
    ControllerType[ControllerType["DataEntrySlider"] = 6] = "DataEntrySlider";
    /// <summary>
    /// The Volume coarse.
    /// </summary>
    ControllerType[ControllerType["Volume"] = 7] = "Volume";
    /// <summary>
    /// The Balance coarse.
    /// </summary>
    ControllerType[ControllerType["Balance"] = 8] = "Balance";
    /// <summary>
    /// The Pan position coarse.
    /// </summary>
    ControllerType[ControllerType["Pan"] = 10] = "Pan";
    /// <summary>
    /// The Expression coarse.
    /// </summary>
    ControllerType[ControllerType["Expression"] = 11] = "Expression";
    /// <summary>
    /// The Effect Control 1 coarse.
    /// </summary>
    ControllerType[ControllerType["EffectControl1"] = 12] = "EffectControl1";
    /// <summary>
    /// The Effect Control 2 coarse.
    /// </summary>
    ControllerType[ControllerType["EffectControl2"] = 13] = "EffectControl2";
    /// <summary>
    /// The General Puprose Slider 1
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider1"] = 16] = "GeneralPurposeSlider1";
    /// <summary>
    /// The General Puprose Slider 2
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider2"] = 17] = "GeneralPurposeSlider2";
    /// <summary>
    /// The General Puprose Slider 3
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider3"] = 18] = "GeneralPurposeSlider3";
    /// <summary>
    /// The General Puprose Slider 4
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeSlider4"] = 19] = "GeneralPurposeSlider4";
    /// <summary>
    /// The Bank Select fine.
    /// </summary>
    ControllerType[ControllerType["BankSelectFine"] = 32] = "BankSelectFine";
    /// <summary>
    /// The Modulation Wheel fine.
    /// </summary>
    ControllerType[ControllerType["ModulationWheelFine"] = 33] = "ModulationWheelFine";
    /// <summary>
    /// The Breath Control fine.
    /// </summary>
    ControllerType[ControllerType["BreathControlFine"] = 34] = "BreathControlFine";
    /// <summary>
    /// The Foot Pedal fine.
    /// </summary>
    ControllerType[ControllerType["FootPedalFine"] = 36] = "FootPedalFine";
    /// <summary>
    /// The Portamento Time fine.
    /// </summary>
    ControllerType[ControllerType["PortamentoTimeFine"] = 37] = "PortamentoTimeFine";
    /// <summary>
    /// The Data Entry Slider fine.
    /// </summary>
    ControllerType[ControllerType["DataEntrySliderFine"] = 38] = "DataEntrySliderFine";
    /// <summary>
    /// The Volume fine.
    /// </summary>
    ControllerType[ControllerType["VolumeFine"] = 39] = "VolumeFine";
    /// <summary>
    /// The Balance fine.
    /// </summary>
    ControllerType[ControllerType["BalanceFine"] = 40] = "BalanceFine";
    /// <summary>
    /// The Pan position fine.
    /// </summary>
    ControllerType[ControllerType["PanFine"] = 42] = "PanFine";
    /// <summary>
    /// The Expression fine.
    /// </summary>
    ControllerType[ControllerType["ExpressionFine"] = 43] = "ExpressionFine";
    /// <summary>
    /// The Effect Control 1 fine.
    /// </summary>
    ControllerType[ControllerType["EffectControl1Fine"] = 44] = "EffectControl1Fine";
    /// <summary>
    /// The Effect Control 2 fine.
    /// </summary>
    ControllerType[ControllerType["EffectControl2Fine"] = 45] = "EffectControl2Fine";
    /// <summary>
    /// The Hold Pedal 1.
    /// </summary>
    ControllerType[ControllerType["HoldPedal1"] = 64] = "HoldPedal1";
    /// <summary>
    /// The Portamento.
    /// </summary>
    ControllerType[ControllerType["Portamento"] = 65] = "Portamento";
    /// <summary>
    /// The Sustenuto Pedal.
    /// </summary>
    ControllerType[ControllerType["SustenutoPedal"] = 66] = "SustenutoPedal";
    /// <summary>
    /// The Soft Pedal.
    /// </summary>
    ControllerType[ControllerType["SoftPedal"] = 67] = "SoftPedal";
    /// <summary>
    /// The Legato Pedal.
    /// </summary>
    ControllerType[ControllerType["LegatoPedal"] = 68] = "LegatoPedal";
    /// <summary>
    /// The Hold Pedal 2.
    /// </summary>
    ControllerType[ControllerType["HoldPedal2"] = 69] = "HoldPedal2";
    /// <summary>
    /// The Sound Variation.
    /// </summary>
    ControllerType[ControllerType["SoundVariation"] = 70] = "SoundVariation";
    /// <summary>
    /// The Sound Timbre.
    /// </summary>
    ControllerType[ControllerType["SoundTimbre"] = 71] = "SoundTimbre";
    /// <summary>
    /// The Sound Release Time.
    /// </summary>
    ControllerType[ControllerType["SoundReleaseTime"] = 72] = "SoundReleaseTime";
    /// <summary>
    /// The Sound Attack Time.
    /// </summary>
    ControllerType[ControllerType["SoundAttackTime"] = 73] = "SoundAttackTime";
    /// <summary>
    /// The Sound Brightness.
    /// </summary>
    ControllerType[ControllerType["SoundBrightness"] = 74] = "SoundBrightness";
    /// <summary>
    /// The Sound Control 6.
    /// </summary>
    ControllerType[ControllerType["SoundControl6"] = 75] = "SoundControl6";
    /// <summary>
    /// The Sound Control 7.
    /// </summary>
    ControllerType[ControllerType["SoundControl7"] = 76] = "SoundControl7";
    /// <summary>
    /// The Sound Control 8.
    /// </summary>
    ControllerType[ControllerType["SoundControl8"] = 77] = "SoundControl8";
    /// <summary>
    /// The Sound Control 9.
    /// </summary>
    ControllerType[ControllerType["SoundControl9"] = 78] = "SoundControl9";
    /// <summary>
    /// The Sound Control 10.
    /// </summary>
    ControllerType[ControllerType["SoundControl10"] = 79] = "SoundControl10";
    /// <summary>
    /// The General Purpose Button 1.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton1"] = 80] = "GeneralPurposeButton1";
    /// <summary>
    /// The General Purpose Button 2.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton2"] = 81] = "GeneralPurposeButton2";
    /// <summary>
    /// The General Purpose Button 3.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton3"] = 82] = "GeneralPurposeButton3";
    /// <summary>
    /// The General Purpose Button 4.
    /// </summary>
    ControllerType[ControllerType["GeneralPurposeButton4"] = 83] = "GeneralPurposeButton4";
    /// <summary>
    /// The Effects Level.
    /// </summary>
    ControllerType[ControllerType["EffectsLevel"] = 91] = "EffectsLevel";
    /// <summary>
    /// The Tremelo Level.
    /// </summary>
    ControllerType[ControllerType["TremeloLevel"] = 92] = "TremeloLevel";
    /// <summary>
    /// The Chorus Level.
    /// </summary>
    ControllerType[ControllerType["ChorusLevel"] = 93] = "ChorusLevel";
    /// <summary>
    /// The Celeste Level.
    /// </summary>
    ControllerType[ControllerType["CelesteLevel"] = 94] = "CelesteLevel";
    /// <summary>
    /// The Phaser Level.
    /// </summary>
    ControllerType[ControllerType["PhaserLevel"] = 95] = "PhaserLevel";
    /// <summary>
    /// The Data Button Increment.
    /// </summary>
    ControllerType[ControllerType["DataButtonIncrement"] = 96] = "DataButtonIncrement";
    /// <summary>
    /// The Data Button Decrement.
    /// </summary>
    ControllerType[ControllerType["DataButtonDecrement"] = 97] = "DataButtonDecrement";
    /// <summary>
    /// The NonRegistered Parameter Fine.
    /// </summary>
    ControllerType[ControllerType["NonRegisteredParameterFine"] = 98] = "NonRegisteredParameterFine";
    /// <summary>
    /// The NonRegistered Parameter Coarse.
    /// </summary>
    ControllerType[ControllerType["NonRegisteredParameterCoarse"] = 99] = "NonRegisteredParameterCoarse";
    /// <summary>
    /// The Registered Parameter Fine.
    /// </summary>
    ControllerType[ControllerType["RegisteredParameterFine"] = 100] = "RegisteredParameterFine";
    /// <summary>
    /// The Registered Parameter Coarse.
    /// </summary>
    ControllerType[ControllerType["RegisteredParameterCoarse"] = 101] = "RegisteredParameterCoarse";
    /// <summary>
    /// The All Sound Off.
    /// </summary>
    ControllerType[ControllerType["AllSoundOff"] = 120] = "AllSoundOff";
    /// <summary>
    /// The All Controllers Off.
    /// </summary>
    ControllerType[ControllerType["AllControllersOff"] = 121] = "AllControllersOff";
    /// <summary>
    /// The Local Keyboard.
    /// </summary>
    ControllerType[ControllerType["LocalKeyboard"] = 122] = "LocalKeyboard";
    /// <summary>
    /// The All Notes Off.
    /// </summary>
    ControllerType[ControllerType["AllNotesOff"] = 123] = "AllNotesOff";
    /// <summary>
    /// The Omni Mode Off.
    /// </summary>
    ControllerType[ControllerType["OmniModeOff"] = 124] = "OmniModeOff";
    /// <summary>
    /// The Omni Mode On.
    /// </summary>
    ControllerType[ControllerType["OmniModeOn"] = 125] = "OmniModeOn";
    /// <summary>
    /// The Mono Operation.
    /// </summary>
    ControllerType[ControllerType["MonoOperation"] = 126] = "MonoOperation";
    /// <summary>
    /// The Poly Operation.
    /// </summary>
    ControllerType[ControllerType["PolyOperation"] = 127] = "PolyOperation";
})(ControllerType || (ControllerType = {}));
exports.ControllerType = ControllerType;
/// <summary>
/// Represents MetaMessage types.
/// </summary>
var MetaType;
(function (MetaType) {
    /// <summary>
    /// Represents sequencer number type.
    /// </summary>
    MetaType[MetaType["SequenceNumber"] = 0] = "SequenceNumber";
    /// <summary>
    /// Represents the text type.
    /// </summary>
    MetaType[MetaType["Text"] = 1] = "Text";
    /// <summary>
    /// Represents the copyright type.
    /// </summary>
    MetaType[MetaType["Copyright"] = 2] = "Copyright";
    /// <summary>
    /// Represents the track name type.
    /// </summary>
    MetaType[MetaType["TrackName"] = 3] = "TrackName";
    /// <summary>
    /// Represents the instrument name type.
    /// </summary>
    MetaType[MetaType["InstrumentName"] = 4] = "InstrumentName";
    /// <summary>
    /// Represents the lyric type.
    /// </summary>
    MetaType[MetaType["Lyric"] = 5] = "Lyric";
    /// <summary>
    /// Represents the marker type.
    /// </summary>
    MetaType[MetaType["Marker"] = 6] = "Marker";
    /// <summary>
    /// Represents the cue point type.
    /// </summary>
    MetaType[MetaType["CuePoint"] = 7] = "CuePoint";
    /// <summary>
    /// Represents the program name type.
    /// </summary>
    MetaType[MetaType["ProgramName"] = 8] = "ProgramName";
    /// <summary>
    /// Represents the device name type.
    /// </summary>
    MetaType[MetaType["DeviceName"] = 9] = "DeviceName";
    /// <summary>
    /// Represents then end of track type.
    /// </summary>
    MetaType[MetaType["EndOfTrack"] = 47] = "EndOfTrack";
    /// <summary>
    /// Represents the tempo type.
    /// </summary>
    MetaType[MetaType["Tempo"] = 81] = "Tempo";
    /// <summary>
    /// Represents the Smpte offset type.
    /// </summary>
    MetaType[MetaType["SmpteOffset"] = 84] = "SmpteOffset";
    /// <summary>
    /// Represents the time signature type.
    /// </summary>
    MetaType[MetaType["TimeSignature"] = 88] = "TimeSignature";
    /// <summary>
    /// Represents the key signature type.
    /// </summary>
    MetaType[MetaType["KeySignature"] = 89] = "KeySignature";
    /// <summary>
    /// Represents the proprietary event type.
    /// </summary>
    MetaType[MetaType["ProprietaryEvent"] = 127] = "ProprietaryEvent";
})(MetaType || (MetaType = {}));
exports.MetaType = MetaType;

},{}],4:[function(require,module,exports){
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

},{"./processing":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const MidiFile_1 = require("./MidiFile");
const utilityfunctions_1 = require("./utilityfunctions");
const PIanoEnums_1 = require("./PIanoEnums");
class PNote {
    constructor(length, note) {
        this.Length = length;
        this.Note = note;
    }
}
PNote.Default = new PNote(0, "");
class Form1_port {
    importMIDIToolStripMenuItem_Click_Port(midiString) {
        this.notes = [];
        let curNote = PNote.Default;
        // first, we pull midi data
        let RealS = new MidiFile_1.Midifile(midiString);
        this.tempo = utilityfunctions_1.GetTempo(RealS);
        // quickly see if there's a piano track first
        // and get the tempo as well
        let Onetrack = RealS.tracks.filter(function (track) {
            return track.find(function (event) {
                return event.subtype == "noteOn";
            });
        })[0];
        //sort by delta time
        // Onetrack = Onetrack.sort(function (left: IEvent, right: IEvent) {
        //     if (left.deltaTime < right.deltaTime) return -1;
        //     if (left.deltaTime > right.deltaTime) return 1;
        //     return 0;
        // });
        //set all to first Channel
        //Onetrack = Onetrack.map(function (value: IEvent) {
        //    value.channel = 1;
        //    return value;
        //);
        //filter to note on events
        //Onetrack = Onetrack.filter(element => element.subtype == "noteOn");
        //Onetrack = this.RemoveDuplicateNotes(Onetrack);
        //generate the pnoteList
        let delta = 0;
        for (let note of Onetrack) {
            delta += note.deltaTime;
            if (note.subtype === "noteOn") {
                if (curNote.Note != "") {
                    curNote.Length = (delta / 1000);
                    delta = 0;
                    let newNote = Object.assign({}, curNote);
                    this.notes.push(newNote);
                }
                curNote.Note = Form1_port.note2Piano(note.noteNumber);
            }
        }
        this.PerformNoteCompression();
        this.NearlyDoneBits();
        this.GenerateOutput();
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
        let name = PIanoEnums_1.NoteNames[(n % 12)];
        if (name == null) {
            name = PIanoEnums_1.NoteNames[((n + 1) % 12)];
            arg = "b";
        }
        else {
            arg = "n";
        }
        octave = Math.floor((n / 12 - 1)).toString();
        return name + arg + octave;
    }
    RemoveDuplicateNotes(NoteArray) {
        function filterFunction(NoteElement, NoteIndex) {
            return NoteIndex === NoteArray.findIndex(FIndIndexFunction);
            function FIndIndexFunction(Note) {
                let DeltaTimeCheck = Note.deltaTime === NoteElement.deltaTime;
                let NoteNumCheck = Note.noteNumber === NoteElement.noteNumber;
                let NoteVelCheck = Note.velocity === NoteElement.velocity;
                return (DeltaTimeCheck && NoteNumCheck && NoteVelCheck);
            }
        }
        return NoteArray.filter(filterFunction);
    }
    NearlyDoneBits() {
        // now, we find what the "beat" length should be,
        // by counting numbers of times for each length, and finding statistical mode
        let scores = new Map();
        for (let note of this.notes) {
            if (note.Length != 0)
                if (scores.has(note.Length))
                    scores.set(note.Length, scores.get(note.Length) + 1);
                else
                    scores.set(note.Length, 1);
        }
        let winner = 1;
        let score = 0;
        for (let kv of scores) {
            if (kv[1] > score) {
                winner = kv[0];
                score = kv[1];
            }
        }
        // realign all of them to match beat length
        for (let i = 0; i < this.notes.length; i++) {
            this.notes[i] = new PNote((this.notes[i].Length / winner), this.notes[i].Note);
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
            }
            else {
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
            if (line.length + n.Note.length + 1 > 501) {
                output += line.substring(0, line.length - 1) + "\r\n";
                line = "";
                if (lineCount == 9)
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
exports.Form1_port = Form1_port;

},{"./MidiFile":2,"./PIanoEnums":3,"./utilityfunctions":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const midi2piano_port_1 = require("./midi2piano-port");
function parsethefile(midi) {
    let fileStuff = new midi2piano_port_1.Form1_port();
    fileStuff.importMIDIToolStripMenuItem_Click_Port(midi);
    let download = require("downloadjs");
    let OutputPanel = document.getElementById("PianoOutput");
    OutputPanel.value = fileStuff.OutputTxt;
    console.log("AAAAAAA");
}
exports.parsethefile = parsethefile;

},{"./midi2piano-port":5,"downloadjs":1}],7:[function(require,module,exports){
"use strict";
/**
 * Created by jfmmeyers on 9/14/16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getTempo(midi) {
    let tempo = midi.tracks[0].filter(x => x.microsecondsPerBeat != null)[0].microsecondsPerBeat;
    tempo = 60000000 / tempo;
    tempo = Math.round(tempo);
    return tempo * 10;
}
exports.GetTempo = getTempo;

},{}]},{},[4]);
