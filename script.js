let playState = 'play';
let muteState = 'mute';

const playIconContainer = document.getElementById('play-icon');
const playBtnImg = document.getElementById('play-img');
const soundIcon = document.getElementById('mute-icon');
const soundBtnImg = document.getElementById('sound-icon');

playIconContainer.addEventListener('click', () => {
    console.log(audio.currentTime);
    
    if(playState === 'play') {
        audio.play();
        playState = 'pause';
        playBtnImg.src = 'pause-btn.png';
    }

    else {
      audio.pause();
      playBtnImg.src = 'play-btn.png';
      playState = 'play';
    }
});

soundIcon.addEventListener('click', () => {
    if(muteState === 'mute') {
        muteState = 'unmute';
        soundBtnImg.src = 'custom audio player/mute.png';
        audio.muted = true;
    }

    else {
      soundBtnImg.src = 'sound.png';
      muteState = 'mute';
      audio.muted = false;
    }
});

const audio = document.querySelector('audio');

/*audio.addEventListener('loadedmetadata', () => {
  displayAudioDuration(audio.duration);
});*/

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  }

  const durationContainer = document.getElementById('duration');
  const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
  }
  
  if (audio.readyState > 0) {
    displayDuration();
  } else {
    audio.addEventListener('loadedmetadata', () => {
      displayDuration();
    });
}

const seekSlider = document.getElementById('seek-slider');
const currentTimeContainer = document.getElementById('current-time');
audio.addEventListener('timeupdate', () => {
  seekSlider.value = Math.floor(audio.currentTime);
  currentTimeContainer.innerHTML = calculateTime(seekSlider.value);
  console.log(seekSlider.value);
  console.log(audio.currentTime);
  console.log(currentTimeContainer.innerHTML);
});

const setSliderMax = () => {
  seekSlider.max = Math.floor(audio.duration);
}

    if (audio.readyState > 0) {
    displayDuration();
    setSliderMax();
        } else {
    audio.addEventListener('loadedmetadata', () => {
    displayDuration();
    setSliderMax();
      });
    }


//event input is not working

  
  audio.addEventListener('timeupdate', () => {
    seekSlider.value = Math.floor(audio.currentTime);
    
  });

  const volumeSlider = document.getElementById('volume-slider');
const outputContainer = document.getElementById('volume-output');

volumeSlider.addEventListener('input', (e) => {
  const value = e.target.value;

  outputContainer.textContent = value;
  audio.volume = value / 100;
});