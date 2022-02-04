'use strict';

let timerFunction;
let i = 0;
let getTimer;

startGame.addEventListener('click', newGame);
function newGame(event) {
    event.preventDefault();
    startGame.classList.add('off');
    if(viewTimerBack.className!=='off') {
        timerFunction=setInterval(timerBuck, 1000);
    }
    if(viewTimerDuration.className!=='off') {
        dataTimeStart=new Date();
        timerForvard();
    }
    creatGameField();
    run();
}

function zerro(n) {
    return (n < 10) ? ('0' + n) : ('' + n);
}

function timerBuck(){
        viewTimerBack.textContent=`До конца игры осталось: ${zerro(--timeCount)} сек.`;
        if(timeCount===0){
            viewTimerBack.textContent='Вы проиграли';
            clearInterval(timerFunction);
        }
    }

function timerForvard(){

    getTimer = setInterval(() => {
                date.setSeconds(date.getSeconds()+1);
                hour.textContent = zerro(date.getHours());    // часы
                minute.textContent = zerro(date.getMinutes());  // минуты
                secund.textContent = zerro(date.getSeconds());  // секунды
            }, 1000);
}

function run() {

}

function creatGameField() {
    if(viewSizeFields.textContent==='Количество картинок: 16'){
        for(let i=0; i<8; i++){
                unicalCardArr.push(uniqueNum());
        }
    }
    let cloneArr = unicalCardArr.slice(0);
    let doubleCardArr = unicalCardArr.concat(cloneArr);
    for (let i = doubleCardArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [doubleCardArr[i], doubleCardArr[j]] = [doubleCardArr[j], doubleCardArr[i]];
    }
    console.log(doubleCardArr); // получили перемешанный массив 16 чисел
}

function uniqueNum() {
    let n = getUniqueNum(0, cardArr.length-1);
    let num = cardArr[n];
    cardArr.splice(n, 1);
    return num;
}



function getUniqueNum(min, max) {
    return Math.round(Math.random()*(max-min)+min);
}


