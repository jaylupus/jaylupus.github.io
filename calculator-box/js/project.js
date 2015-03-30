var total = 0;

document.getElementById("a10").onclick = function(){
	total += 10;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("a20").onclick = function(){
	total += 20;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("a30").onclick = function(){
	total += 30;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n10").onclick = function(){
	total -= 10;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n20").onclick = function(){
	total -= 20;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n30").onclick = function(){
	total -= 30;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("red").onclick = function(){
	document.getElementById("out").style.backgroundColor = "red";
}

document.getElementById("blue").onclick = function(){
	document.getElementById("out").style.backgroundColor = "blue";
}