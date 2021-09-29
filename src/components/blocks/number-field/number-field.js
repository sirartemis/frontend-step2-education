$('.plus').click( function( e  ) {

  let targetInputSizer = $(e.target).parents('.number-field__input').find('.input-sizer');

  let targetInput = targetInputSizer.find('input');

  let i = targetInput.val();
  i++;

  targetInput.val(i);
  targetInputSizer.attr('data-value', i);
  
} );

$('.minus').click( function( e  ) {

  let targetInputSizer = $(e.target).parents('.number-field__input').find('.input-sizer');

  let targetInput = targetInputSizer.find('input');

  let i = targetInput.val();
  if (i > 0) { i--; }

  targetInput.val(i);
  targetInputSizer.attr('data-value', i);
  
} );
