$(document).ready(function(){
	$('#paragraphs').click(function(){
		$(this).val('');
		$('.ipsum').slideUp();
		$('p').hide();
	});
	$('#submit').click(function(){
		for (i = 0; i < $('#paragraphs').val(); i++){
			$($('p')[i]).show();
		};
		$('.ipsum').slideDown();
	});
});