import { removeClearHandler, addClearHandler } from "../dropdown/__btns/__btns";
import { increaseInput, decreaseInput, enableMinus, disableMinus } from "../number-field/__input/__input";

$('.dropdown').find('input').on('input', e => checkGuests(e));
$('.dropdown').find('input').on('click', e => checkGuests(e));

$('.dropdown').find('input').trigger('input');
$('.dropdown').find('input').trigger('click');


function clearInput(e) {

  let isClearButton = $(e.target).hasClass('clear');

  if (isClearButton) {

    let target = $(e.target).parents('.dropdown').find('.input-sizer');

    target.find('input').val('0');
    target.attr('data-value','0');

    removeClearHandler(e);
    $(e.target).parents('.dropdown').find('.minus').addClass('disabled');

  }
};



function checkGuests(e) {

  let increase = $(e.target).hasClass('plus');
  increase && increaseInput(e);

  let decrease = $(e.target).hasClass('minus');
  decrease && decreaseInput(e);

  let isInput = $(e.target).attr('type') === 'text';

  let adults = $(e.target).parents('.dropdown').find('.adults').find('.input-sizer').find('input').val();

  adults = adults ? adults : 0;

  let children = $(e.target).parents('.dropdown').find('.children').find('.input-sizer').find('input').val();

  children = children ? children : 0;

  let babies = $(e.target).parents('.dropdown').find('.babies').find('.input-sizer').find('input').val();

  babies = babies ? babies : 0;

  let res = parseInt(adults) + parseInt(children) + parseInt(babies);

  let curval = $(e.target).parents('.number-field__input').find('.input-sizer').find('input').val();

  ((curval === '') || (curval === '0')) && disableMinus(e);

  if ( res > 0 ) {

    addClearHandler(e);
    clearInput(e);
    increase && adults && enableMinus(e);
    increase && children && enableMinus(e);
    increase && babies && enableMinus(e);
    decrease && (curvall == 0) && disableMinus(e);
    isInput && (curval > '0') && enableMinus(e);

  };

  if ( res === 0 ) {

    removeClearHandler(e);

  };
};
