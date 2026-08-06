// ==========================================
// 1. SELECT HTML ELEMENTS
// ==========================================
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");

// ==========================================
// 2. INITIALIZE SLIDER DURATION ON LOAD
// ==========================================
// When audio metadata (duration, track details) finishes loading:
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// ==========================================
// 3. PLAY / PAUSE TOGGLE FUNCTION
// ==========================================
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        // Pause audio if currently playing
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        // Play audio if currently paused
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

        // Continuously update slider position while playing (every 500ms)
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    }
}

// ==========================================
// 4. SCRUB / SEEK AUDIO POSITION
// ==========================================
// When the user drags and releases the range slider:
progress.onchange = function() {
    // Sync song playback time with the selected slider position
    song.currentTime = progress.value;
    
    // Resume playback automatically
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};