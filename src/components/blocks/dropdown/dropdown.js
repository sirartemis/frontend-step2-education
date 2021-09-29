/*Dropdown Menu*/

$('.material-icons').click( function (e) {

	let target = $(e.target);
	target.find('.material-icons').toggleClass('clicked');
	target.parents('.dropdown').attr('tabindex', 1).focus();
	target.parents('.dropdown').toggleClass('active');
	target.parents('.dropdown').find('.dropdown__menu').slideToggle(300);
});

$('.clicked').click( function () {
	$('.dropdown').removeClass('active');
	$('.dropdown').find('.dropdown__menu').slideUp(300);
});
