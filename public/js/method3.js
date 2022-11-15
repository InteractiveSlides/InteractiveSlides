const audioCtx = new AudioContext();
const audio = new Audio("http://localhost:8082/?text=hello%20world");
audio.crossOrigin = "anonymous";
const source = audioCtx.createMediaElementSource(audio);
source.connect(audioCtx.destination);
audio.play();