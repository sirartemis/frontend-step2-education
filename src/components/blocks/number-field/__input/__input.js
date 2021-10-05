function increaseInput(e) {

  let targetInputSizer = $(e.target).parents('.number-field__input').find('.input-sizer');

  let targetInput = targetInputSizer.find('input');

  let i = targetInput.val();
  i++;

  (i > 0) && enableMinus(e);

  targetInput.val(i);
  targetInputSizer.attr('data-value', i);
  
} ;

function decreaseInput(e) {

  let targetInputSizer = $(e.target).parents('.number-field__input').find('.input-sizer');

  let targetInput = targetInputSizer.find('input');

  let i = targetInput.val();

  (i > 0) &&  i-- ;
  (i === 0) &&  disableMinus(e);


  targetInput.val(i);
  targetInputSizer.attr('data-value', i);
  
} ;

function disableMinus(e) {
  $(e.target).parent().parent().find('.minus').attr("disabled", true);
  $(e.target).parent().parent().find('.minus').addClass('disabled');
};

function enableMinus(e) {
  $(e.target).parent().parent().find('.minus').attr("disabled", false);
  $(e.target).parent().parent().find('.minus').removeClass('disabled');
};

export {increaseInput, decreaseInput, disableMinus, enableMinus};
