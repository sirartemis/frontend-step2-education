/*Dropdown Menu*/

$('.material-icons').click( function (e) {

	let target = $(e.target);
  let targetDropdown = target.parent().parent();
  const isDouble = target.parent().parent().hasClass('dropdown__select_double');
  if (isDouble) {targetDropdown = targetDropdown.parent()};
	target.find('.material-icons').toggleClass('clicked');
	targetDropdown.attr('tabindex', 1).focus();
	targetDropdown.toggleClass('active');
	targetDropdown.find('.dropdown__menu').slideToggle(300);
});

$('.clicked').click( function (e) {
  const target = $(e.target);
  let targetDropdown = target.parent().parent();
  const isDouble = target.parent().parent().hasClass('double');
  if (isDouble) {targetDropdown = targetDropdown.parent()};
	targetDropdown.removeClass('active');
	targetDropdown.find('.dropdown__menu').slideUp(300);
});
