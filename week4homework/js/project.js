function changeColor(){
	var red, green, blue;
	red = document.getElementByID("red").value;
	green = document.getElementByID("green").value;
	blue = document.getElementByID("blue").value;

	var rgb = "rgb("+red+","+green+","+blue+")";

	document.getElementByID("colorfultext").innerHTML = "rgb";

	document.body.style.backgroundColor = rgb;
}

document.getElementByID("colorbutton").onClick = changeColor;