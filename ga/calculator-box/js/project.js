$(".combine").click(function(){
	var myValue = parseInt($(this).html());
	var targetValue = parseInt($("#white").html());
	$("#white").html(myValue + targetValue);
});

$(".changeColor").click(function(){
	$("#white").css("background-color", $(this).attr("id"));
});