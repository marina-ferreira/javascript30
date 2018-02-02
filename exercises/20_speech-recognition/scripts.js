let output = document.querySelector('.speech-output'),
    mic = document.querySelector('.mic'),
    recognition = new window.webkitSpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.start();

let p = document.createElement('p');
output.appendChild(p);

function appendTranscript(e) {
  let transcript = Array.from(e.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join('');

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    output.appendChild(p);
  }
}

recognition.addEventListener('start', () => mic.classList.add('recording'));
recognition.addEventListener('stop', () => mic.classList.remove('recording'));
recognition.addEventListener('end', recognition.start);
recognition.addEventListener('result', appendTranscript);
