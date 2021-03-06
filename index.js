var colors = ["blue", "red"];

var id = 0;

function feld20er (num1, num2) {
  // started with paste from
  // http://www.html5canvastutorials.com/tutorials/html5-canvas-circles/
  var canvas = document.createElement('canvas');
  canvas.id = 'ZahlenfelderPlot' + id;
  id += 1;
  var space =  window.outerWidth / 13;
  var step = space / 12;
  var radius = step * 4.5;
  var distance = step * 5;
  canvas.width = window.outerWidth;
  canvas.height = space * 2 ;
  document.querySelector('body').appendChild(document.createElement('p'));
  document.querySelector('body').appendChild(document.createElement('hr'));
  document.querySelector('body').appendChild(canvas);
  // var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  for (var i = 0; i < 20; i ++) {
    var centerX =  distance + (i % 10) * space;
    if ((i % 10) > 4) {
      centerX += step * 2;
    }
    var centerY = distance;
    if (i > 9) {
      centerY += step * 11;
    }

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    if (i < num1) {
      context.fillStyle = colors[0];
      context.fill();
    } else if (i < num1 + num2) {
      context.fillStyle = colors[1];
      context.fill();
    }
    context.lineWidth = step / 2;
    context.strokeStyle = '#003300';
    context.stroke();
  }
}

document.body.innerHTML = '';

function rand(limit) {
  return Math.floor(Math.random() * limit);
}

function feld20Zahl (num) {
  if (! num) {
    num = rand(21);
  }
  feld20er(num);
};

function feld20Plus (num1, num2) {
  if (! num1) {
    num1 = rand(9) + 1;
  }

  if (num1 < 20) {
    var num1to10 = (10 - num1);
    var num2to10 = (10 - num1to10);
    num2 = num1to10 + rand(num2to10) + 1;
  };

  feld20er(num1, num2);
};

// for (var i = 1; i < 20; i++) {
//   feld20Zahl(i);
// };

for (var i = 0; i < 18; i++) {
  feld20Plus();
};
