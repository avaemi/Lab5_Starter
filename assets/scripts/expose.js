// expose.js

const jsConfetti = new JSConfetti();

function init() {
  const hornSelect   = document.getElementById('horn-select');
  const hornImage    = document.querySelector('#expose > img');
  const audio        = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon   = document.querySelector('#volume-controls img');
  const playButton   = document.querySelector('button');

  // Sync audio volume with slider's initial value
  audio.volume = Number(volumeSlider.value) / 100;

  // --- Horn selection ---
  hornSelect.addEventListener('change', () => {
    const choice = hornSelect.value;
    if (choice === 'select') return;

    hornImage.src = `assets/images/${choice}.svg`;
    hornImage.alt = choice.replace('-', ' ');
    audio.src     = `assets/audio/${choice}.mp3`;
  });

  // --- Volume slider ---
  volumeSlider.addEventListener('input', () => {
    const v = Number(volumeSlider.value);
    audio.volume = v / 100;

    let level;
    if (v === 0)      level = 0;
    else if (v < 33)  level = 1;
    else if (v < 67)  level = 2;
    else              level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // --- Play button ---
  playButton.addEventListener('click', () => {
    if (!audio.src) return;
    audio.currentTime = 0;
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

window.addEventListener('DOMContentLoaded', init);