'use strict';

startGame.addEventListener('click', newGame);
function newGame(event) {
    event.preventDefault();
    startGame.classList.add('off');
}