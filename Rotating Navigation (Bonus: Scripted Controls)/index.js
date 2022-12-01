let vid = document.getElementsByTagName('video')[0],
    playRange = document.getElementById('play'),
    moveValue = document.getElementById('moveValue'),
    navButton = document.getElementsByClassName('navButton')[0],
    playButton = document.getElementById('playBtn'),
    beginButton = document.getElementById('goToStart'),
    endButton = document.getElementById('goToEnd'),
    rewindButton = document.getElementById('rewind'),
    fastFrwButton = document.getElementById('fastForward'),
    stopButton = document.getElementById('stopBtn'),
    muteRange = document.getElementById('muteRange'),
    muteButton = document.getElementById('muteBtn'),
    speedRange = document.getElementById('speedRange'),
    page = document.getElementsByClassName('page')[0],
    homeli = document.getElementById('home'),
    aboutli = document.getElementById('about'),
    contactli = document.getElementById('contact');

let prevVolume;

vid.addEventListener('loadeddata', updateMaxTime);

vid.addEventListener('timeupdate', function(){
    // we use toFixed(0) to eliminate the milliseconds.
    let formattedTime = formatTime(+vid.currentTime.toFixed(0));
    changeMoveValue(formattedTime);

    playRange.setAttribute('value', +vid.currentTime.toFixed(0))
});

vid.addEventListener('click', playPauseVid);

playButton.addEventListener('click', playPauseVid);

playRange.addEventListener('change', function(){
    // To change the current value next to the playRange.
    moveValue.innerText = this.value;
    vid.currentTime = this.value;
});

navButton.addEventListener('click', addactive);

beginButton.addEventListener('click', function(){
    vid.currentTime = 0;
});

endButton.addEventListener('click', function(){
    vid.currentTime = vid.duration;
    vid.pause();
    playButton.innerText = "PLAY";
});

rewindButton.addEventListener('click', function(){
    vid.currentTime -= 3;
});

fastFrwButton.addEventListener('click', function(){
    vid.currentTime += 3;
});

stopButton.addEventListener('click', function(){
    vid.pause();
    vid.currentTime = 0;
    playButton.innerText = "PLAY";

});

muteRange.addEventListener('change', function(){
    let val = this.value;
    if(val==0){
        prevVolume = vid.volume;
        vid.muted = true;
        muteButton.innerText = 'UNMUTE';
    } else {
        vid.muted = false;
        vid.volume = val;
        muteButton.innerText = 'MUTE';
    }
});

muteButton.addEventListener('click', function(){
    if(vid.muted){
        vid.muted = false;
        vid.volume = prevVolume;
        muteButton.innerText = 'MUTE';
        muteRange.value = vid.volume;
    }
    else{
        prevVolume = vid.volume;
        vid.muted = true;
        muteButton.innerText = 'UNMUTE';
        muteRange.value = 0;
    }
});

speedRange.addEventListener('change', function(){
    let val = this.value;
    if(val==0)
        val = 0.25;
    vid.playbackRate = val;
});


function updateMaxTime(){
    // To set the max time of the playRange according to length of video.
    // we use toFixed(0) to eliminate the milliseconds.
    let videoTime = +vid.duration.toFixed(0);;
    playRange.setAttribute('max', videoTime);
    muteRange.value = vid.volume;
}

function formatTime(durationInSeconds){
    let hours = durationInSeconds/60/60,
        minutes = durationInSeconds/60%60,
        seconds = durationInSeconds%60%60;
    
    let finalTime = {};
    finalTime['hours'] = +hours.toFixed(0); 
    finalTime['minutes'] = +minutes.toFixed(0);
    finalTime['seconds'] = seconds;

    return finalTime;
}

function changeMoveValue(formattedTime){
    moveValue.innerText = 
    `${String(formattedTime.hours).padStart(2, '0')}:${String(formattedTime.minutes).padStart(2, '0')}:${String(formattedTime.seconds).padStart(2, '0')}`;
}

function addactive(){
    navButton.classList.toggle('buttonActive');
    page.classList.toggle('active');
    homeli.classList.toggle('activeLi');
    aboutli.classList.toggle('activeLi');
    contactli.classList.toggle('activeLi');
}

function playPauseVid(){
    if(vid.paused || vid.ended){
        vid.play();
        playButton.innerText = "PAUSE";
    } else {
        vid.pause();
        playButton.innerText = "PLAY";
    }
}