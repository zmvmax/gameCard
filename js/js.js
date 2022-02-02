'use strict';

let $=elem=>document.querySelector(elem);
let manual=$('#manual');    // Блок мануала
let getSettingsButton=$('#getSettingsButton');  // Кнопка Начать
let game=$('#game');    //  Общий блок обертка с игрой
let viewTimerBack=$('.viewTimerBack');  //  Wrap для таймера обратного отсчета в хедере
let viewTimerDuration=$('.viewTimerDuration');  // Wrap для таймера длительности в хедере
let viewSizeFields=$('.viewSizeFields');    // Wrap для количества картинок
let viewLevelDificulty=$('.viewLevelDificulty');    // Wrap для уровня сложности
let viewGamer=$('.viewGamer');  // Wrap для имени игрока
let gameField=$('.gameField');  // Блок игрового поля
let footer=$('.footer');    // Подвал игрового поля
let settings=$('#settings');    //Блок начальных установок
let labelName=$('#labelName');  //  Обертка инпута имени игрока
let name=$('#name');    //  Инпут имя игрока
let timerForms=$('timerForms'); //  Wrap для секции выбора таймера
let timerBack=$('#timerBack');  // Инпут таймера обратного отсчета
let timerDuration=$('#timerDuration');  // Инпут таймера длительности
let dificultVariant=$('.dificultVariant');  // Wrap блока выбора варианта сложности
let numberOfCards=$('#numberOfCards');  // Инпут выбора варианта по количесству карт
let levelDificult=$('#levelDificult');  // Инпут выбора варианта по уровню сложности
let cardsNumber=$('.cardsNumber');  // Wrap секции выбора количества картинок
let sixteen=$('#sixteen');  // Инпут 4х4
let thirtySix=$('#thirtySix');  // Инпут 6х6
let sixtyFour=$('#sixtyFour');  // Инпут 8х8
let dificultyLevel=$('.dificultyLevel');    // Wrap для выбора уровня сложности
let simple=$('#simple');    //  Инпут уровень простой
let medium=$('#medium');    // Инпут уровень средний
let difficult=$('#difficult');  //  Инпут уровень сложный
let startGame=$('#startGame');  // Кнопка начать игру
let gameFields=$('.gameFields');    // Блок игрового поля

