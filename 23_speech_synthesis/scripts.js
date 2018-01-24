let select = document.querySelector('select.voices'),
    form = document.querySelector('form'),
    pauseButton = document.querySelector('.pause'),
    synth = window.speechSynthesis,
    voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  voices.forEach(voice => {
    let option = document.createElement('option');

    option.value = voice.name;
    option.textContent = `${voice.name} --- ${voice.lang}`;
    select.append(option);
  });
}

function speak(e) {
  e.preventDefault();

  let textarea = document.querySelector('textarea'),
      pitch = document.querySelector('input[name="pitch"]'),
      rate = document.querySelector('input[name="rate"]'),
      text = new SpeechSynthesisUtterance(textarea.value),
      voiceName = select.selectedOptions[0].value;

  text.voice = voices.filter(voice => voice.name === voiceName)[0] || null;
  text.pitch = pitch.value;
  text.rate = rate.value;
  synth.cancel();
  synth.speak(text);
}

function togglePause(e) {
  if (synth.paused) {
    synth.resume();
    pauseButton.value = 'Pause';
  } else {
    synth.pause();
    pauseButton.value = 'Resume';
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

form.addEventListener('submit', speak);
pauseButton.addEventListener('click', togglePause);
