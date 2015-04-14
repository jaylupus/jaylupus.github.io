var total = 0;
var totalID = document.getElementById("out");


document.getElementById("a10").onclick = function(){
	total += 10;
	totalID.innerHTML = total;
}

document.getElementById("a20").onclick = function(){
	total += 20;
	totalID.innerHTML = total;
}

document.getElementById("a30").onclick = function(){
	total += 30;
	totalID.innerHTML = total;
}

document.getElementById("n10").onclick = function(){
	total -= 10;
	totalID.innerHTML = total;
}

document.getElementById("n20").onclick = function(){
	total -= 20;
	totalID.innerHTML = total;
}

document.getElementById("n30").onclick = function(){
	total -= 30;
	totalID.innerHTML = total;
}

document.getElementById("red").onclick = function(){
	totalID.style.backgroundColor = "red";
}

document.getElementById("blue").onclick = function(){
	totalID.style.backgroundColor = "blue";
}