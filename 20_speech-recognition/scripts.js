function recognizeSpeech() {
  let output = document.querySelector('.speech-output'),
      recognition = new window.webkitSpeechRecognition();

  recognition.lang = 'en-US';
  recognition.start();

  recognition.onstart = () => {
    console.log('Voice recognition activated. Try speaking into the microphone.');
  }

  recognition.onresult = (event) => {
    let result = event.results[0][0].transcript,
        text = `<div>${result}.</div>`;

    output.insertAdjacentHTML('beforeend', text);
    recognition.stop();
  }

  recognition.onend = (event) => {
    recognition.start();
  }
}

recognizeSpeech();
