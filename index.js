var canvas = document.createElement('canvas');
canvas.id = 'ZahlenfelderPlot';
canvas.width = 50 * 20;
canvas.height = 50 * 2 ;
document.querySelector('body').appendChild(canvas)
// paste from http://www.html5canvastutorials.com/tutorials/html5-canvas-circles/
// var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

for (var i = 0; i < 20; i ++) {
  var centerX = (5 + i) % 10  * 50;
  var centerY = i > 9 ? 50 : 0;
  var radius = 40;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'green';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke();
}
