// explore.js

function init() {
  const faceImage   = document.querySelector('#explore img');
  const textInput   = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton  = document.querySelector('button');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = i;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    if (!textInput.value || voiceSelect.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices[voiceSelect.value];

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });
    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);
  });
}

window.addEventListener('DOMContentLoaded', init);