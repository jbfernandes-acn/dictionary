
export const playWordSound = (word) => {
    var synth = window.speechSynthesis;
    var text = new SpeechSynthesisUtterance(word);
    synth.speak(text);
}