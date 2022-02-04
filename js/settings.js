'use strict';

let $=elem=>document.querySelector(elem);
let heder=$('header');  // Блок header для отображения выбранных установок
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
let nameButton=$('#nameButton');    // Кнопка сохранения имени игрока
let timerForms=$('.timerForms'); //  Wrap для секции выбора таймера
let timerFormsButton=$('#timerFormsButton');    //  Кнопка сохранения типа таймера
let timerArr=document.querySelectorAll('.timerForms input[type="radio"]')   // Все инпуты из блока выбора таймера
let timerBack=$('#timerBack');  // Инпут таймера обратного отсчета
let timerDuration=$('#timerDuration');  // Инпут таймера длительности
let dificultVariant=$('.dificultVariant');  // Wrap блока выбора варианта сложности
let dificultArr=document.querySelectorAll('.dificultVariant input[type="radio"]')
let numberOfCards=$('#numberOfCards');  // Инпут выбора варианта по количесству карт
let levelDificult=$('#levelDificult');  // Инпут выбора варианта по уровню сложности
let dificultVariantButton=$('#dificultVariantButton')   // Кнопка перехода к меню выбора
let cardsNumber=$('.cardsNumber');  // Wrap секции выбора количества картинок
let cardsNumberArr=document.querySelectorAll('.cardsNumber input[type="radio"]')
let sixteen=$('#sixteen');  // Инпут 4х4
let thirtySix=$('#thirtySix');  // Инпут 6х6
let sixtyFour=$('#sixtyFour');  // Инпут 8х8
let dificultyLevel=$('.dificultyLevel');    // Wrap для выбора уровня сложности
let dificultyLevelButton=$('#dificultyLevelButton') // Кнопка сохранения уровня сложности
let dificultyLevelArr=document.querySelectorAll('.dificultyLevel input[type="radio"]')
let simple=$('#simple');    //  Инпут уровень простой
let medium=$('#medium');    // Инпут уровень средний
let difficult=$('#difficult');  //  Инпут уровень сложный
let startGame=$('#startGame');  // Кнопка начать игру
let gameFields=$('.gameFields');    // Блок игрового поля
let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let secund = document.querySelector('#secund');
let date = new Date(0, 0, 0, 0, 0, 0, 0);
let timeCount=10;
let dataTimeStart, dataTimeFinish;
let cardArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let unicalCardArr = [];