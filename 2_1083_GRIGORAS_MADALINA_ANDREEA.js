let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

// folosim elemnentele din html prin id-uri
let li1 = document.getElementById('li-vid1')
let li2 = document.getElementById('li-vid2')
let li3 = document.getElementById('li-vid3')
let li4 = document.getElementById('li-vid4')
let li5 = document.getElementById('li-vid5')

let video1 = document.getElementById('vid1')
let video2 = document.getElementById('vid2')
let video3 = document.getElementById('vid3')
let video4 = document.getElementById('vid4')
let video5 = document.getElementById('vid5')

const btnPlay = document.getElementById('buton-play')
const btnPause = document.getElementById('buton-pause')
const btnPrevious = document.getElementById('buton-prev')
const btnNext = document.getElementById('buton-next')

const progress = document.getElementById('progress')
const timpestamp = document.getElementById('timestamp')
const volume = document.getElementById('volume')

const btnSepia = document.getElementById('buton-sepia')
const btnBlackWhite = document.getElementById('buton-blackwhite')
const btnMov = document.getElementById('buton-mov')
const btnMint = document.getElementById('buton-mint')
const btnNormal = document.getElementById('buton-normal')


// desenarea videoclipului si efectelor in canvas 

function drawVideoOnCanvas(video){
    function step() {
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        video.volume = volume.value/100;
        timpestamp.innerHTML = secondsToString(video.currentTime)
        progress.value=video.currentTime/video.duration*100
        if (effect==="sepia"){
            let seimageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let sepixels = seimageData.data;
            for (let i = 0; i < sepixels.length; i += 4) {
                const r = sepixels[i];
                const g = sepixels[i + 1];
                const b = sepixels[i + 2];
                sepixels[i] = (r * .393) + (g * .769) + (b * .189);
                sepixels[i + 1] = (r * .349) + (g * .686) + (b * .168);
                sepixels[i + 2] = (r * .272) + (g * .534) + (b * .131);
            }
            context.putImageData(seimageData, 0, 0);
        }
        else if(effect==="blackwhite"){
            let bwimageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let bwpixels = bwimageData.data;
            for (let i = 0; i < bwpixels.length; i += 4) {
                const r = bwpixels[i];
                const g = bwpixels[i + 1];
                const b = bwpixels[i + 2];
                const avg = Math.round((r + g + b) / 3);
        
                bwpixels[i] = bwpixels[i + 1] = bwpixels[i + 2] = avg;
            }
            context.putImageData(bwimageData, 0, 0);
        }
        else if(effect==="mov"){
            let movimageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let movpixels = movimageData.data;
            for (let i = 0; i < movpixels.length; i += 4) {
                // movpixels[i + 0] = 147;
                movpixels[i + 1] = 112;
                movpixels[i + 2] = 219;
            }
            context.putImageData(movimageData, 0, 0);
        }
        else if(effect==="mint"){
            let mintimageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let mintpixels = mintimageData.data;
            for (let i = 0; i < mintpixels.length; i += 4) {
                //   mintpixels[i + 0] = 254;
                  mintpixels[i + 1] = 218;
                  mintpixels[i + 2] = 185;
             }
            context.putImageData(mintimageData, 0, 0);
        }
        requestAnimationFrame(step)
    }
    requestAnimationFrame(step);
}

secondsToString = function (seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = min >= 10 ? min : '0' + min;
    sec = sec >= 10 ? sec : '0' + sec;
    const time = min + ':' + sec;
    return time;
};

const removeActive = () => {
    document.querySelectorAll('li').forEach((item) => {
        if(item.classList.contains('active')) 
            item.classList.remove('active')
    })
}

// declararea variabilei playingVid, in care vom pune clipul (pentru play/pause, etc)
let playingVid;

video1.onplay = () => {
    li1.classList.add('active')
    drawVideoOnCanvas(video1);
    playingVid=video1;
    prev=video5;
    next=video2;
}
li1.onclick = () => {
    removeActive();
    li1.classList.add('active');
    context.drawImage(video1, 0, 0, canvas.width, canvas.height);
    if(playingVid) playingVid.load();
    video1.play();
}
video1.onended = () => {
    video2.play()
    removeActive()
}

video2.onplay = () => {
    li2.classList.add('active')
    drawVideoOnCanvas(video2)
    playingVid=video2;
}
li2.onclick = () => {
    removeActive()
    li2.classList.add('active')
    context.drawImage(video2, 0, 0, canvas.width, canvas.height)
    if(playingVid) playingVid.load();
    video2.play();
}
video2.onended = () => {
    video3.play()
    removeActive()
}

video3.onplay = () => {
    li3.classList.add('active')
    drawVideoOnCanvas(video3)
    playingVid=video3;
}
li3.onclick = () => {
    removeActive()
    li3.classList.add('active')
    context.drawImage(video3, 0, 0, canvas.width, canvas.height)
    if(playingVid) playingVid.load();
    video3.play();
}
video3.onended = () => {
    video4.play()
    removeActive()
}

video4.onplay = () => {
    li4.classList.add('active')
    drawVideoOnCanvas(video4)
    playingVid=video4;
}
li4.onclick = () => {
    removeActive()
    li4.classList.add('active')
    context.drawImage(video4, 0, 0, canvas.width, canvas.height)
    if(playingVid) playingVid.load();
    video4.play();
}
video4.onended = () => {
    video5.play()
    removeActive()
}

video5.onplay = () => {
    li5.classList.add('active')
    drawVideoOnCanvas(video5)
    playingVid=video5;
}
li5.onclick = () => {
    removeActive()
    li5.classList.add('active')
    context.drawImage(video5, 0, 0, canvas.width, canvas.height)
    if(playingVid) playingVid.load();
    video5.play();
}
video5.onended = () => {
    video1.play()
    removeActive()
}

//butoane controale
btnPlay.addEventListener('click', function(e){
    e.preventDefault();
    if(playingVid){
        playingVid.play();
    }
    else video1.play();
})

btnPause.addEventListener('click', function(e){
    e.preventDefault();
    if(playingVid){
        playingVid.pause();
    }
})

btnPrevious.addEventListener('click', function(e){
    e.preventDefault();
    removeActive()
    if(playingVid===video1) li5.click();
    if(playingVid===video2) li1.click();
    if(playingVid===video3) li2.click();
    if(playingVid===video4) li3.click();
    if(playingVid===video5) li4.click();
})

btnNext.addEventListener('click', function(e){
    e.preventDefault();
    removeActive()
    if(playingVid===video1) li2.click();
    if(playingVid===video2) li3.click();
    if(playingVid===video3) li4.click();
    if(playingVid===video4) li5.click();
    if(playingVid===video5) li1.click();
})

//butoane efecte
let effect;
btnSepia.addEventListener("click", function () {
    effect="sepia";
})
btnBlackWhite.addEventListener("click", function () {
    effect="blackwhite";
})
btnMov.addEventListener("click", function () {
    effect="mov";
})
btnMint.addEventListener("click", function () {
    effect="mint";
})
btnNormal.addEventListener("click", function () {
    effect="normal";
})


//drag and drop
document.addEventListener('dragover', function (e) { e.preventDefault();})
document.addEventListener('drop', function (e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        console.log(files.length)
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            removeActive();
            const videoDragDrop = document.createElement('video');
            videoDragDrop.setAttribute('src', e.target.result);
            videoDragDrop.onplay = () => {
                drawVideoOnCanvas(videoDragDrop)
                playingVid=videoDragDrop;
            }
            if(playingVid) playingVid.load();
            videoDragDrop.play();
            
        });
        reader.readAsDataURL(files[0]);
    }
    console.log(e)
});


//slider progress
progress.oninput = function () {
    if(playingVid){
        playingVid.currentTime = (playingVid.duration*this.value)/100
    }
}

//slider volum si salvare local storage
if(localStorage.getItem("volume")){
    volume.value = localStorage.getItem("volume")
}
volume.oninput = function () {
    if(playingVid){
        playingVid.volume = this.value /100;
    }
    localStorage.setItem("volume", this.value);
}

