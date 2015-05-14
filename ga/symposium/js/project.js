$(document).ready(function(){
	$('img').hover(
		function(){
			$(this).parent().animate({opacity:1}, 500);
		},
		function(){
			$(this).parent().animate({opacity:0}, 500);
		}
	);
});