'use strict';

getSettingsButton.addEventListener('click', function(){
    game.classList.remove('off');
    settings.classList.remove('off');
    manual.classList.add('off');
});
name.addEventListener('input', ()=>nameButton.removeAttribute('disabled'));
nameButton.addEventListener('click', function(event){
    heder.classList.remove('view');
    viewGamer.textContent=`Игрок: ${name.value}`;
    viewGamer.classList.remove('off');
    labelName.classList.add('off');
    timerForms.classList.remove('off');
    event.preventDefault();
});

timerForms.addEventListener('click', function () {
    timerFormsButton.removeAttribute('disabled');
    timerFormsButton.addEventListener('click', function (event) {
        event.preventDefault();
        if(getValue(timerArr)==='timerBack'){
            viewTimerBack.classList.remove('off');
            viewTimerBack.textContent='До конца игры осталось: 30 сек.';
        }
        else{
            viewTimerBack.classList.remove('off');
            viewTimerBack.textContent='Общее время игры: 00:00:00';
        }
        timerForms.classList.add('off');
        dificultVariant.classList.remove('off');
    })
})

dificultVariant.addEventListener('click', function () {
    dificultVariantButton.removeAttribute('disabled');
    dificultVariantButton.addEventListener('click', function (event) {
        event.preventDefault();
        if(getValue(dificultArr)==='fielSize'){
            cardsNumber.classList.remove('off');
        }
        else{
            dificultyLevel.classList.remove('off');
        }
        dificultVariant.classList.add('off');
    })
})

cardsNumber.addEventListener('click', function () {
    cardsNumberButton.removeAttribute('disabled');
    cardsNumberButton.addEventListener('click', function (event) {
        event.preventDefault();
        if(getValue(cardsNumberArr)==='sixteen'){
            viewSizeFields.classList.remove('off')
            viewSizeFields.textContent='Количество картинок: 16';
        }
        else if(getValue(cardsNumberArr)==='twentyFour'){
            viewSizeFields.classList.remove('off')
            viewSizeFields.textContent='Количество картинок: 24';
        }
        else if(getValue(cardsNumberArr)==='thirty'){
            viewSizeFields.classList.remove('off')
            viewSizeFields.textContent='Количество картинок: 30';
        }
        cardsNumber.classList.add('off');
        startGame.classList.remove('off');

    })
})

dificultyLevel.addEventListener('click', function () {
    dificultyLevelButton.removeAttribute('disabled');
    dificultyLevelButton.addEventListener('click', function (event) {
        event.preventDefault();
        if(getValue(dificultyLevelArr)==='simple'){
            viewSizeFields.classList.remove('off')
            viewSizeFields.textContent='Уровень сложности: ПРОСТОЙ';
        }
        else if(getValue(dificultyLevelArr)==='medium'){
            viewSizeFields.classList.remove('off')
            viewSizeFields.textContent='Уровень сложности: СРЕДНИЙ';
        }
        else if(getValue(dificultyLevelArr)==='difficult'){
            viewSizeFields.classList.remove('off')
            viewSizeFields.textContent='Уровень сложности: ТРУДНЫЙ';
        }
        dificultyLevel.classList.add('off');
        startGame.classList.remove('off');

    })
})


function getValue(arr) {
    for(let elem of arr){
           if(elem.checked){
                return elem.value;
            }
    }
}

