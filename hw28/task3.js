let timerHTML = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let counter = 0;
let hour = document.createElement('span');
let minute = document.createElement('span');
let sec = document.createElement('span');
hour.style.color = "red";
minute.style.color = "green";
sec.style.color = "blue";
hour.innerText = "hh:";
minute.innerText = "min:";
sec.innerText = "sec";

let hourCounter = 0;
let minCounter = 0;
let secCounter = 0;
let t;

timerHTML.append(hour)
timerHTML.append(minute)
timerHTML.append(sec)

function tick(){
    secCounter++;
    if (secCounter >= 60) {
        secCounter = 0;
        minCounter++;
        if (minCounter >= 60) {
            minCounter = 0;
            hourCounter++;
        }
    }
}
function add() {
    tick();
    hour.innerText = `${(hourCounter > 9 ? hourCounter : "0" + hourCounter)}:`;
    minute.innerText = `${(minCounter > 9 ? minCounter : "0" + minCounter)}:`;
    sec.innerText = `${(secCounter > 9 ? secCounter : "0" + secCounter)}`;
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}



start.addEventListener("click", ()=>{timer()})
stop.onclick = function() {
    clearTimeout(t);
}