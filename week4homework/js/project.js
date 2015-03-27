function changeColor(){
	var red = document.getElementById("red").value;
	var green = document.getElementById("green").value;
	var blue = document.getElementById("blue").value;

	var rgb = "rgb("+red+","+green+","+blue+")";

	document.getElementById("colorfultext").innerHTML = rgb;

	document.body.style.backgroundColor = rgb;
}

document.getElementById("colorbutton").onclick = changeColor;