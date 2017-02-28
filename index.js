var canvas = document.createElement('canvas');
canvas.id = 'ZahlenfelderPlot';
canvas.width = 120 * 21;
canvas.height = 120 * 2 ;
document.querySelector('body').appendChild(canvas)
// paste from http://www.html5canvastutorials.com/tutorials/html5-canvas-circles/
// var canvas = document.getElementById('myCanvas');

var colors = ["blue", "red"];

function feld20er (canvas, num1, num2) {
  var context = canvas.getContext('2d');

  for (var i = 0; i < 20; i ++) {
    var centerX =  50 + (i % 10) * 100;
    if ((i % 10) > 4) {
      centerX += 20
    }
    var centerY = 50;
    if (i > 9) {
      centerY += 110
    }
    var radius = 40;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    if (i < num1) {
      context.fillStyle = colors[0];
    } else if (i < num1 + num2) {
      context.fillStyle = colors[1];
    } else {
      context.fillStyle = null;
    }
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  }
}

feld20er(canvas, 13, 4);
