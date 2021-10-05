import { removeClearHandler, addClearHandler } from '../components/blocks/dropdown/__btns/__btns.js';
import { increaseInput, decreaseInput, enableMinus, disableMinus } from '../components/blocks/number-field/__input/__input.js';

// Обработчик ввода количества гостей

$('.dropdown').find('input').on("input", e => checkGuests(e));
$('.dropdown').find('input').on("click", e => checkGuests(e));

$('.dropdown').find('input').trigger("input");
$('.dropdown').find('input').trigger("click");

// Логика кнопки "очистить"

function clearInput(e){

  let isClearButton = $(e.target).hasClass('clear');

  if (isClearButton) {

    let target = $(e.target).parents('.dropdown').find('.input-sizer')

    target.find('input').val('0');
    target.attr('data-value','0');

    removeClearHandler(e);
    $(e.target).parents('.dropdown').find('.minus').addClass('disabled');

  }
};

// Логика проверки ввода пользователя
// и отрисовки кнопки "очистить"

function checkGuests(e){

  let increase = $(e.target).hasClass('plus');
  increase && increaseInput(e);

  let decrease = $(e.target).hasClass('minus');
  decrease && decreaseInput(e);

  let isInput = $(e.target).attr('type') === 'text';

  // Проверяем число в месте активности пользователя

  // Взрослые

  let adults = $(e.target).parents('.dropdown').find('.adults').find('.input-sizer').find('input').val();
  adults = adults ? adults : 0;

  // Дети

  let children = $(e.target).parents('.dropdown').find('.children').find('.input-sizer').find('input').val();
  children = children ? children : 0;

  // Младенцы

  let babies = $(e.target).parents('.dropdown').find('.babies').find('.input-sizer').find('input').val();
  babies = babies ? babies : 0;

  // Общее количество гостей

  let res = parseInt(adults) + parseInt(children) + parseInt(babies);

  let curval = $(e.target).parents('.number-field__input').find('.input-sizer').find('input').val();

    ((curval === '') || (curval === '0')) && disableMinus(e);
  // Если хоть где-то добавился гость

  if ( res > 0 ) {
    addClearHandler(e); // Добавляем кнопку "очистить"
    clearInput(e);
    increase && adults && enableMinus(e);
    increase && children && enableMinus(e);
    increase && babies && enableMinus(e);
    decrease && (curval == 0) && disableMinus(e);
    isInput && (curval > '0') && enableMinus(e);

  };

  // Если гостей нет, убираем кнопку "очистить"

  if ( res  === 0 ){

    removeClearHandler(e);
  };
};
