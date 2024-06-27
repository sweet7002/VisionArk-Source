// Podcast.js

// DOM elements
const video = document.getElementById('video');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Play button click event
playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
});

// Pause button click event
pauseButton.addEventListener('click', () => {
    video.pause();
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
});

// Update progress bar as video plays
video.addEventListener('timeupdate', updateProgress);

// Update current time and duration
video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration);
});

// Format time in MM:SS format
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
}

// Update progress bar function
function updateProgress() {
    const { currentTime, duration } = video;
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
}
