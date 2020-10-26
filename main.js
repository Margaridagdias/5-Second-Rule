// main.js

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const timer = document.getElementById('timer');

// GRID Calculations

const width = canvas.width;
const height = canvas.height;
const tileCount = 6;
const tileSize = width / tileCount;
const squares = [];
const colors = ['#66cdaa', '#ff6b6b','#e27fa0','#ddf5f9','#1f4c25', '#ff7e00','#ffa3dd', '#99f4f2', '#b4a097', '#eaea32', '	#15b4a3', '	#ff0080'];
// Iteration 1

function drawGrid() {
  context.lineWidth = 2;
  
  for (let i = 0; i < tileCount; i++) {
    for (let j = 0; j < tileCount; j++) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];

        context.fillStyle = randomColor;
        context.fillRect(j * tileSize, i * tileSize, tileSize, tileSize, colors);
        console.log('drawing position x ', j * tileSize, 'position y', i * tileSize,);
        squares.push({ x: j * tileSize, y:  i * tileSize}); //inserimos 36 quadrados ({x: y:})
    }
  }
}

function paintTwoRandomSquares() {
  //  for (let i = 0; i < tileCount; i++) {
    //    for (let j = 0; j < tileCount; j++) {
            let randomIndex = Math.floor(Math.random() * squares.length);
            let firstRandomSquare = squares[randomIndex];
            console.log(firstRandomSquare);
            //Obter x e y de firstRandomSquare e fazer fillRect(x, y, width, height)

            
         //   if (randomIndex === 36) {
           //     getTwoRandomSquares = 2;1
}

      //2 indexes aleatoriamente
      //ir buscar 
  

// Draw Everything

function drawEverything() {
    context.clearRect(0, 0, width, height);
    drawGrid();
    setTimeout(()=> {
        paintTwoRandomSquares();
    },1000);
  }

  // Triggering the first drawEverything after 500ms ensures that all pictures had been loaded
  setTimeout(drawEverything, 500);

//TIME

let fiveSeconds = 5;

 function decreaseTime(fiveSeconds) {

    const interval = setInterval(() => {
        fiveSeconds--;

        if (fiveSeconds <= 0) {
            clearInterval(interval)
            fiveSeconds = `Times's up!`
        }
        timer.innerHTML = fiveSeconds
    }, 1000)
 }

 decreaseTime(fiveSeconds);

/*   adding this JS code gives you an on click event that'll let you click and paint an area the size of one of your squares red, you just need to use the fill style as a letiable that the user can change.

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
function getNearestSquare(position) {
 var x = position.x;
    var y = position.y;
if (x < 0 || y < 0) return null;
    x = (Math.floor(x / 20) * 20) + 0.5
    y = (Math.floor(y / 20) * 20) + 0.5
    return {x: x, y: y};
}
$(c_canvas).click(function(evt) {
    var pos = getNearestSquare(getMousePos(c_canvas, evt));
    if (pos != null) {
        context.fillStyle="#FF0000";
        context.fillRect(pos.x,pos.y,20,20);
    }
});

*/
