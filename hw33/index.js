let play = document.getElementById('play')
let pause = document.getElementById('pause')
let stop = document.getElementById('stop')
let faster = document.getElementById('faster')
let slowly = document.getElementById('slowly')
let normal = document.getElementById('normal')
let video = document.getElementById('video-player')
let volume = document.getElementById('volume')
let out = document.getElementById('out')
let progress = document.getElementById('progress')


play.addEventListener('click', ()=>{
    video.play();
})

pause.addEventListener('click', ()=>{
    video.pause();
})

stop.addEventListener('click', ()=>{
    video.pause();
    video.currentTime=0;
})

faster.addEventListener('click', ()=>{
    video.playbackRate = 2;
})

slowly.addEventListener('click', ()=>{
    video.playbackRate = 0.5;
})

normal.addEventListener('click', ()=>{
    video.playbackRate = 1;
})

volume.addEventListener('click', function (){
    let vol = this.value;
    video.volume = vol/100;
})

progress.onclick = function (){
    let width = this.offsetWidth;
    let currentPos = event.offsetX;
    this.value = (currentPos/width)*100;
    video.pause();
    video.currentTime=video.duration*(currentPos/width)
}
video.ontimeupdate=progressUpdate;
function progressUpdate(){
    progress.value=video.currentTime/video.duration*100;
    video.play;
    out.innerHTML=Math.round((video.currentTime*100)/100)+"sec";
}