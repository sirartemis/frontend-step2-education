import { removeClearHandler, addClearHandler } from "../dropdown/__btns/__btns";
import { increaseInput, decreaseInput, enableMinus, disableMinus } from "../number-field/__input/__input";


$('.dropdown').find('input').on('input', e => checkGuests(e));
$('.dropdown').find('input').on('click', e => checkGuests(e));


function clearInput(e) {

  let isClearButton = $(e.target).hasClass('clear');

  let select = $(e.target).parent().parent().parent().find('.dropdown__select');

  if (isClearButton) {

    let target = $(e.target).parent().parent().parent().parent().find('.input-sizer');

    target.find('input').val('0');
    target.attr('data-value','0');

    removeClearHandler(e);
    $(e.target).parents('.dropdown').find('.minus').addClass('disabled');

    select.find('span').eq(0).text('Сколько гостей');

  }
};



function checkGuests(e) {

  applyChanges(e);

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
    decrease && (curval == 0) && disableMinus(e);
    isInput && (curval > '0') && enableMinus(e);

  };

  if ( res === 0 ) {

    removeClearHandler(e);

  };
};


function applyChanges(e) {

  let res = [];

  let isExecute = $(e.target).hasClass('execute');

  if (isExecute) {

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

  select.find('span').eq(0).text(guests + declination);

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

  let selectText = select.find('span').eq(0).text();

  if (babies !== '0') { selectText = selectText + ', ' + babies + declination };

  select.find('span').eq(0).text(selectText);

  };
};
