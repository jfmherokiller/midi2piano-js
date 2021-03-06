
/**
 * Created by jfmmeyers on 9/14/16.
 */


function getTempo(midi) {
    let tempo = midi.tracks[0].filter(x=> x.microsecondsPerBeat != null)[0].microsecondsPerBeat;
    tempo = 60000000 / tempo;
    tempo = Math.round(tempo);
    return tempo * 10;
}


export { getTempo as GetTempo}