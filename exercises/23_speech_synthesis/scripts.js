let select = document.querySelector('select.voices'),
    startButton = document.querySelector('.start'),
    stopButton = document.querySelector('.stop'),
    textarea = document.querySelector('textarea'),
    ranges = document.querySelectorAll('input[type="range"]'),
    synth = window.speechSynthesis,
    text = new SpeechSynthesisUtterance(textarea.value),
    voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  select.innerHTML = voices.map(voice => {
    return `<option value="${voice.name}">${voice.name} - ${voice.lang}</option>`;
  }).join('');
}

function setVoice() {
  let voiceName = select.selectedOptions[0].value;
  text.voice = voices.find(voice => voice.name === voiceName);
}

function setOptions(e) {
  text[this.name] = this.value;
  toggleSpeak();
}

function toggleSpeak(startOver = true) {
  synth.cancel();
  startOver && synth.speak(text);
}

speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
startButton.addEventListener('click', toggleSpeak);
stopButton.addEventListener('click', toggleSpeak.bind(null, false));
ranges.forEach(range => range.addEventListener('change', setOptions));
select.addEventListener('change', setVoice);
