const time_el = document.querySelector(".watch .time");
const strt_btn = document.getElementById("start");
const stp_btn = document.getElementById("stop");
const rst_btn = document.getElementById("reset");

let seconds =0;
let interval = null;

// event listeners
strt_btn.addEventListener("click", start);
stp_btn.addEventListener("click", stop);
rst_btn.addEventListener("click", reset);


// update the timer

function timer(){
    seconds++;
    
    let hrs = Math.floor(seconds /3600);
    let min = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if (sec<10) sec = '0' + sec;
    if (min<10) min = '0' + min;
    if (hrs<10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${min}:${sec}`;
}

function start (){
    if (interval){
        return
    }
    interval = setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);
    interval = null;
}
function reset(){
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}