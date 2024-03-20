 // import * as shape from './shapeDraw.js';
import {square} from 'shapeDraw.js';
 
 
function drawShape() {};

var getMyCanvas = document.getElementById('myCanvas');
	var queryMyCanvas = document.querySelector('#myCanvas');
	const ctx = getMyCanvas.getContext("2d");

	var getCenterButton = document.getElementById('centerButton');
	var queryCenterButton = document.querySelector('#centerButton');

	var queryRange = document.querySelector("#range");
	var printRange = document.querySelector("#printRange");

	var queryBody = document.querySelector("body");

	var canvasScale = 1;
	
	
	


window.onload = function() {
  getMyCanvas.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
};


queryCenterButton.addEventListener("click", e => {
	canvasScale = 1;
	queryRange.value = canvasScale;
	printRange.textContent = canvasScale;
	
	getMyCanvas.style.transform = 
		'scale('+canvasScale+','+canvasScale+')';
	getMyCanvas.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
	});


queryRange.addEventListener( "input" , (event) => {
	canvasScale = queryRange.value;
  printRange.textContent = canvasScale;
	
	getMyCanvas.style.transform = 
	'scale('+canvasScale+', '+canvasScale+')';
	});
	

function mouseCanvas(event) {
	let rect = queryMyCanvas.getBoundingClientRect();
	let x = (event.pageX - rect.left)/canvasScale;
	let y = (event.pageY - rect.top)/canvasScale;
document.getElementById("coords").innerHTML = "canvasX: " + x + ", canvasY: " + y;
	
	let sz = 100;
	
	shape.square(ctx);

}




 

queryMyCanvas.addEventListener("mousedown", event => {
	event.preventDefault()
	mouseCanvas(event);
});
queryMyCanvas.addEventListener("mousemove", event => {
	event.preventDefault()
	mouseCanvas(event);
});
queryMyCanvas.addEventListener("mouseup", event => {
	event.preventDefault()
	mouseCanvas(event);
});
queryMyCanvas.addEventListener("touch", event => {
	event.preventDefault()
	mouseCanvas(event);
});
queryMyCanvas.addEventListener("touchmove", event => {
	event.preventDefault()
	mouseCanvas(event);
});
queryMyCanvas.addEventListener("touchstop", event => {
	event.preventDefault()
	mouseCanvas(event);
});