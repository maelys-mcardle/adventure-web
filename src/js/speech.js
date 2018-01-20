function speak(text)
{
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  var utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voices[0];
  synth.speak(utterThis);
}
