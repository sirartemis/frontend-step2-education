import { removeClearHandler, addClearHandler } from "../dropdown/__btns/__btns";
import { increaseInput, decreaseInput, enableMinus, disableMinus } from "../number-field/__input/__input";

/*
 * Доделать
 
document.addEventListener('DOMContentLoaded', () => {

  let res = 0;

  const guestsPickers = document.querySelectorAll('.guests-picker');
  guestsPickers.forEach((guestPicker) => {

    const fields = guestPicker.querySelectorAll('.numberInput');
    fields.forEach((field) => {
      res += parseInt(field.value);
    });

    (res > 0) && addClearHandler(e);
  });


})
  */

$('.guests-picker').find('input').on('click', e => guestsPickerHandler(e));

// обработчик нажатия на инпуты компонента guests-picker

const guestsPickerHandler = (e) => {

  const target = e.target;

  const clearButton = target.classList.contains('clear'); // нажали на кнопку "очистить"
  const executeButton = target.classList.contains('execute'); // нажали на кнопку "применить"

  const plus = target.classList.contains('plus');
  plus && increaseInput(e); // если пользователь нажал на плюс, увеличиваем количество на 1

  const minus = target.classList.contains('minus');
  minus && decreaseInput(e); // аналогично с минусом

  // Ищем узел "dropdown". Так как при нажатиях
  // на разные инпуты восхождение вверх по ДОМ-дереву разное для
  // каждого случая, приходится использовать рекурсивный обход с условием
  // пока не встретится узел с классом "dropdown"

  let goal = false; // цель не достигнута пока - это условие цикла
  let finder = target; // это ищейка - она содержит узел, на котором сейчас поиск
  let breaker = 0; // автоматический стоп-кран для экстренной остановки цикла

  while (goal != true) {
    let parent = finder.parentNode; // родитель узла, который передает ищейка
    goal = parent.classList.contains('dropdown'); // проверяем, есть ли у родителя нужный класс
    finder = parent; // цель еще не достигнута, поднимаемся выше и ищем дальше
    breaker++;

    // думаю 1000 подъемов достаточно
    
    if (breaker > 1000) {goal = true};
  }

  // при успешном нахождении цикл завершается

  const dropDown = finder; // теперь у нас есть dropdown, к которому мы можем обращаться

  const select = dropDown.querySelector('.dropdown__select');
  const selectInput = select.querySelector('input');

  const fields = [ // список полей со значениями
                   // которые можно перебирать в цикле

      'adults',  // взрослые
      'babies',  // младенцы
      'children' // дети
    ];

  let inputSizersInputsOfFields = {}; // коллекция инпутов для
                                      // выборки значений
  let inputSizersOfFields = {}; // коллекция родителей для 
                                // изменения атрибутов

  // заполняем наши коллекции
  // нужными адресами
  // для дальнейших манипуляций

  fields.forEach((field) => {
    const fieldTarget = dropDown.querySelector('.' + field);
    const fieldInputSizer = fieldTarget.querySelector('.input-sizer');
    const fieldInputSizerInput = fieldInputSizer.querySelector('input');
    inputSizersInputsOfFields[field] = fieldInputSizerInput; // помещяем инпуты в коллекцию
    inputSizersOfFields[field] = fieldInputSizer; // помещяем их родителей в другую коллекцию
  });


  // функция очистки формы

  const clear = () => {

    // берем нашу коллекцию с инпутами, достаем их оттуда поочередно
    // и меняем значение для каждого

    Object.values(inputSizersInputsOfFields).forEach((field) => {field.value = '0'});

    // то же самое делаем для их родителей

    Object.values(inputSizersOfFields).forEach((inputSizer) => {inputSizer.setAttribute('data-value','0')});

    // убираем кнопку "очистить"
    
    removeClearHandler(e);

    // отключаем "минусы"

    dropDown.querySelectorAll('.minus').forEach((minus) => {minus.classList.add('disabled')});

    // Чистим результат заполнения формы

    selectInput.value = '';

  };

  // Если нажата кнопка "очистить"
  
  clearButton && clear();

  const execute = () => {

    Object.values(inputSizersInputsOfFields).forEach((field) => {

      fieldsResult += parseInt(field.value);
    });

    let units = fieldsResult.toString().split('');
    let l = units.length - 1;

    let declination = ' гостей';

    switch (units[l]) {
      case '1' :
        declination = ' гость';
        break;
      case '2':
      case '3':
      case '4':
        declination = ' гостя';
        break;
      default:
        declination = ' гостей';

    }

  if (units[l - 1] === '1') {declination = ' гостей'};

    selectInput.value = fieldsResult + declination;

    let babies = inputSizersInputsOfFields['babies'].value;

    units = babies.split('');
    l = units.length - 1;
    declination = ' младенцев';

    switch (units[l]) {
      case '1':
        declination = ' младенец';
        break;
      case '2':
      case '3':
      case '4':
        declination = ' младенца';
        break;
      default:
        declination = ' младенцев';

    }

    if (units[l - 1] === '1') {decliantion = ' младенцев'};

    let selectText = selectInput.value;


    if (babies !== '0') {
      selectText = selectText + ', ' + babies + declination 
    };

    selectInput.value = selectText;

  };

  executeButton && execute();

};

function checkGuests(e) {

  //applyChanges(e);

  guestsPickerHandler(e);

  /*
  let increase = $(e.target).hasClass('plus');
  //increase && increaseInput(e);

  let decrease = $(e.target).hasClass('minus');
  //decrease && decreaseInput(e);

  let isInput = $(e.target).attr('type') === 'text';

  let adults = $(e.target).parents('.dropdown').find('.adults').find('.input-sizer').find('input').val();

  adults = adults ? adults : 0;

  let children = $(e.target).parents('.dropdown').find('.children').find('.input-sizer').find('input').val();

  children = children ? children : 0;

  let babies = $(e.target).parents('.dropdown').find('.babies').find('.input-sizer').find('input').val();

  babies = babies ? babies : 0;

  let res = parseInt(adults) + parseInt(children) + parseInt(babies);

  let curval = $(e.target).parents('.number-field__input').find('.input-sizer').find('input').val();

  //((curval === '') || (curval === '0')) && disableMinus(e);

  if ( res > 0 ) {

    addClearHandler(e);
    clearInput(e);
    //increase && adults && enableMinus(e);
    //increase && children && enableMinus(e);
    //increase && babies && enableMinus(e);
    //decrease && (curval == 0) && disableMinus(e);
    //isInput && (curval > '0') && enableMinus(e);

  };
  
  if ( res === 0 ) {

    removeClearHandler(e);

  };

  */
};


function applyChanges(e) {

  let res = [];

  let isExecute = $(e.target).hasClass('execute');
  let isGuestsPicker = $(e.target).parent().parent().parent().hasClass('guests-picker');

  if (isExecute && isGuestsPicker) {

    let select = $(e.target).parent().parent().parent().find('.dropdown__select');

    let menu = $(e.target).parent().parent();

    res.push(menu.find('.adults').find('.input-sizer').find('input').val());
    res.push(menu.find('.children').find('.input-sizer').find('input').val());
    res.push(menu.find('.babies').find('.input-sizer').find('input').val());

    let guests = res.reduce((sum, current) => sum + parseInt(current ? current : 0), 0);
  guests = Math.round(guests);

  let units = guests.toString().split('');
  let l = units.length - 1;

  let declination = ' гостей';

  switch (units[l]) {
    case '1' :
      declination = ' гость';
      break;
    case '2':
    case '3':
    case '4':
      declination = ' гостя';
      break;
    default:
      declination = ' гостей';

  }

  if (units[l - 1] === '1') { declination = ' гостей' };

  select.find('input').eq(0).val(guests + declination);

  let babies = menu.find('.babies').find('.input-sizer').find('input').val();

  units = babies.split('');

  l = units.length - 1;

  declination = ' младенцев';

    switch (units[l]) {
      case '1':
        declination = ' младенец';
        break;
      case '2':
      case '3':
      case '4':
        declination = ' младенца';
        break;
      default:
        declination = ' младенцев';

    }

  if (units[l - 1] === '1') {declination = ' младенцев'};

  let selectText = select.find('input').eq(0).val();

  if (babies !== '0') { selectText = selectText + ', ' + babies + declination };

  select.find('input').eq(0).val(selectText);

  };
};
