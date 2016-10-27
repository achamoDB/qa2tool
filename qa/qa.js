function clickHandler(obj) {
	alert("click");
}

function page(id, target) {
	if (!target) {
		var current = document.querySelector(".page[data-visible]");
		if (current) current.removeAttribute("data-visible");	
	}

	var page = document.querySelector("#page"+id);
	if (!target)
		page.setAttribute("data-visible","");
	else {
		var container = document.querySelector(target);
		container.innerHTML = page.innerHTML;
	}
}

function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}

function gradient(startColor, endColor, steps) {
	var start = {
		'Hex'   : startColor,
		'R'     : parseInt(startColor.slice(1,3), 16),
		'G'     : parseInt(startColor.slice(3,5), 16),
		'B'     : parseInt(startColor.slice(5,7), 16)
	}
	var end = {
		'Hex'   : endColor,
		'R'     : parseInt(endColor.slice(1,3), 16),
		'G'     : parseInt(endColor.slice(3,5), 16),
		'B'     : parseInt(endColor.slice(5,7), 16)
	}
	var diffR = end['R'] - start['R'];
	var diffG = end['G'] - start['G'];
	var diffB = end['B'] - start['B'];

	var stepsHex  = new Array();

	for(var i = 0; i <= steps; i++) {
		var stepsR = start['R'] + ((diffR / steps) * i);
		var stepsG = start['G'] + ((diffG / steps) * i);
		var stepsB = start['B'] + ((diffB / steps) * i);
		stepsHex[i] = '#' + padLeft(Math.round(stepsR).toString(16),2) + padLeft(Math.round(stepsG).toString(16),2) + padLeft(Math.round(stepsB).toString(16),2);
	}
	return stepsHex;
}

function doit() {
	var g = gradient("#ff00ff", "#ffffff", 10);
	for(var i=0; i<g.length; i++)
		document.querySelector("#main").innerHTML += "<div style='width: 20px; height: 20px; background-color: " + g[i] + "'></div>";	
}
