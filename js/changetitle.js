$(window).focus(function  () {
	$(document).attr('title', 'MonteCode');
});

$(window).blur(function  () {
	$(document).attr('title', 'We miss you !');
});