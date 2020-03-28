const audio = document.getElementsByTagName("audio")[0],
  playBtn = document.getElementById("play"),
  progress = document.querySelector(".player__progress"),
  progressBar = document.querySelector(".player__progress__inner"),
  next = document.getElementById("next"),
  prev = document.getElementById("previous"),
  title = document.querySelector(".title"),
  poster = document.querySelector(".player__poster img");

// audio.play();
const audioList = ["happyrock", "jazzyfrenchy"];
var audioIndex = 0;

audio.src = `/audio/${audioList[audioIndex]}.mp3`;
console.log(audioList[audioIndex]);

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", () => {
  playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
});

audio.addEventListener("pause", () => {
  playBtn.innerHTML = `<i class="fas fa-play"></i>`;
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;

  progressBar.style.width = `${percent}%`;
});

// Update progress on click
progress.addEventListener("click", e => {
  audio.currentTime = (e.offsetX / progress.clientWidth) * audio.duration;
});

// Forward 10s
document.addEventListener("keydown", e => {
  if (e.keyCode == 32) {
    // play|pause
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  } else if (e.keyCode == 39) {
    // forward
    audio.currentTime += 10;
  } else if (e.keyCode == 37) {
    // bakward
    audio.currentTime -= 10;
  } else if (e.keyCode == 38) {
    // volume up
    if (audio.volume < 1.0) {
      audio.volume += 0.1;
    }
  } else if (e.keyCode == 40) {
    // volume down
    if (audio.volume >= 0.0) {
      audio.volume -= 0.1;
    }
  }
});

next.addEventListener("click", () => {
  if (audioIndex == audioList.length - 1) {
    audioIndex = 0;
  } else {
    audioIndex++;
  }

  audio.src = `/audio/${audioList[audioIndex]}.mp3`;

  // Change title
  title.innerHTML = `${audioList[audioIndex].toUpperCase()}`;

  // Change poster
  poster.src = `/img/${audioIndex}.jpg`;

  audio.play();
});

prev.addEventListener("click", () => {
  if (audioIndex == 0) {
    audioIndex = audioList.length - 1;
  } else {
    audioIndex--;
  }
  audio.src = `/audio/${audioList[audioIndex]}.mp3`;

  // Change title
  title.innerHTML = `${audioList[audioIndex]} - Bensound`;

  // Change poster
  poster.src = `/img/${audioIndex}.jpg`;

  audio.play();
});

// // Setting audio meta data
// audio.onloadedmetadata = () => {
//   // console.log(audio.duration);
// };

audio.addEventListener("ended", () => {
  playBtn.innerHTML = `<i class="fas fa-play"></i>`;

  setTimeout(() => {
    next.click(); // simulating 'next' button click
  }, 1000);
});
