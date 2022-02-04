'use strict';

let timerFunction;
let i=10;

startGame.addEventListener('click', newGame);
function newGame(event) {
    event.preventDefault();
    startGame.classList.add('off');
    if(viewTimerBack.textContent==='До конца игры осталось: 30 сек.') {
        timerFunction=setInterval(gameSimpleStart, 1000);
    }
    creatGameField();
    run();
}
function gameSimpleStart(){
        viewTimerBack.textContent=`До конца игры осталось: ${--i} сек.`;
        if(i===0){
            viewTimerBack.textContent='Вы проиграли';
            clearInterval(timerFunction);
        }
    }
function run() {

}

function creatGameField() {
    if(viewSizeFields.textContent==='Количество картинок: 16'){

    }
}



