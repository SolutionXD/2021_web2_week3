var alarmSound = new Audio();
alarmSound.src = 'Musics/alarm.mp3'


//현재시간 타이머
function setTimer(){
    var time = new Date();
    var hour  = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    //00 : 00 : 00
    if(minutes.toString().length == 1){
        minutes = "0" + minutes;
    }
    
    if(seconds.toString().length == 1){
        seconds = "0" + seconds;
    }
    document.getElementById("nowTime").innerHTML = hour+" : "+minutes+" : "+seconds;

    //띵동땡동(단, 크롬 창을 터치해야 이 기능이 작동됨)
    if(minutes == 0 && seconds == 0){
        alarmSound.play();
    }
}


setTimer();

setInterval(setTimer, 1000);
