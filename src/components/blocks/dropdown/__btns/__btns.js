function addClearHandler(e) {

  let clear = $(e.target).parents('.dropdown__menu').find('.clear');

  let btns = $(e.target).parents('.dropdown__menu').find('.dropdown__btns');

  let clearDisplayProperty = clear.css("display");

  let toggled = btns.hasClass('dropdown__btns_space_between');

  let disabled = (clearDisplayProperty !== 'block')
  disabled && clear.css("display","block");

  !toggled && btns.toggleClass('dropdown__btns_space_between');

}

function removeClearHandler(e) {

  let clear = $(e.target).parents('.dropdown__menu').find('.clear');

  let btns = $(e.target).parents('.dropdown__menu').find('.dropdown__btns');

  let clearDisplayProperty = clear.css("display");

  let toggled = btns.hasClass('dropdown__btns_space_between');


  if (clearDisplayProperty !== 'none') {
    clear.css("display","none");
  }

  toggled && btns.removeClass('dropdown__btns_space_between');

}

export { addClearHandler,removeClearHandler };
