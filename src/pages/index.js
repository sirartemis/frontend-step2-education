import { removeClearHandler, addClearHandler } from '../components/blocks/dropdown/__btns/__btns.js';

// Обработчик ввода количества гостей

$('.dropdown').find('input').on("input", e => checkGuests(e));
$('.dropdown').find('input').on("click", e => checkGuests(e));

$('.dropdown').find('input').trigger("input");
$('.dropdown').find('input').trigger("click");


  function checkGuests(e){

  // Проверяем число в месте активности пользователя

  let number = $(e.target).parents('.dropdown').find('.input-sizer').find('input').val();


  // Если хоть где-то добавился гость

  if ( number > 0 ) {
    addClearHandler(e); // Добавляем кнопку "очистить"
  };

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

  // Если гостей нет, убираем кнопку "очистить"

  if ( res  === 0 ){
    removeClearHandler(e);
  };
};

