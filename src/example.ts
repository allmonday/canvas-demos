import $ = require("jquery");

$(function () {
	let canvas  = <HTMLCanvasElement>document.getElementById("canvas");
	var context = canvas.getContext("2d");

	context.font = "38pt Arial";
	context.fillStyle = 'cornflowerblue';
	context.strokeStyle = "blue";
	context.fillText('hello canvas', canvas.width/2 - 150, canvas.height/2 + 15);
	context.strokeText("hello canvas", canvas.width/2 - 150, canvas.height/2 + 15)
});
