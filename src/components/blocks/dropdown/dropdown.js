/*Dropdown Menu*/

$('.material-icons').click( function (e) {

	let target = $(e.target);
	target.find('.material-icons').toggleClass('clicked');
	target.parent().parent().attr('tabindex', 1).focus();
	target.parent().parent().toggleClass('active');
	target.parent().parent().find('.dropdown__menu').slideToggle(300);
});

$('.clicked').click( function (e) {
	$(e.target).parent().parent().removeClass('active');
	$(e.target).parent().parent().find('.dropdown__menu').slideUp(300);
});
