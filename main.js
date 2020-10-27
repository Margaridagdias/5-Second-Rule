// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const timer = document.getElementById('timer');
let fiveSeconds = 5;
let intervalId;


// GRID Calculations

const width = canvas.width;
const height = canvas.height;
const tileCount = 6;
const tileSize = width / tileCount;
const squares = [];
const colors = ['#66cdaa', '#ff6b6b','#e27fa0','#ddf5f9','#1f4c25', '#ff7e00','#ffa3dd', '#99f4f2', '#b4a097', '#eaea32', '	#15b4a3', '	#ff0080'];
let firstRandomSquare;
let score = 0;


// Iteration 1

function drawGrid() {
  context.lineWidth = 2;
  
  for (let i = 0; i < tileCount; i++) {
    for (let j = 0; j < tileCount; j++) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];

        context.fillStyle = randomColor;
        context.fillRect(j * tileSize, i * tileSize, tileSize, tileSize, colors);
     //   console.log('drawing position x ', j * tileSize, 'position y', i * tileSize,);
        squares.push({ x: j * tileSize, y:  i * tileSize}); //inserimos 36 quadrados ({x: y:})
    }
  }
}

function paintTwoRandomSquares() {
            let randomIndex = Math.floor(Math.random() * squares.length);
            firstRandomSquare = squares[randomIndex];
       //     console.log('firstRandomSquare: => ', firstRandomSquare);
            context.fillStyle = 'black';
            context.fillRect(firstRandomSquare.x, firstRandomSquare.y, tileSize, tileSize);
            //Obter x e y de firstRandomSquare e fazer fillRect(x, y, width, height)
}


function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const clickedX = event.clientX - rect.left
  const clickedY = event.clientY - rect.top
 // console.log('black square coordinates', firstRandomSquare.x, firstRandomSquare.y);
 // console.log("x: " + x + " y: " + y)

if (!((clickedY > firstRandomSquare.y + tileSize) || 
  (clickedY < firstRandomSquare.y) ||
  (clickedX > firstRandomSquare.x + tileSize) ||
  (clickedX < firstRandomSquare.x)))
{
  score += 1;
  document.getElementById('scoreTotal').innerText = score;
 

}
}


canvas.addEventListener('mousedown', function(e) {
  getCursorPosition(canvas, e)
})



// Draw Everything
function drawEverything() {  
    context.clearRect(0, 0, width, height);
    drawGrid();
    setTimeout(()=> {
        paintTwoRandomSquares();
    },200);
  }

  // Triggering the first drawEverything after 500ms ensures that all pictures had been loaded
drawEverything();

function startGame() {
  intervalId = setInterval(()=> {
    drawEverything(); //VAI SER EXECUTADO DE 500 MILISEGUNDOS EM 500 MILISEGUNDOS
  }, 700)
}

startGame();

 

//function restartGame(restart) {
 // if(decreaseTime===0){
   // restart1.style

//TIME

 function decreaseTime(fiveSeconds) {

    const interval = setInterval(() => {
        fiveSeconds--;

        if (fiveSeconds <= 0) {
            clearInterval(interval);
            clearInterval(intervalId);
            fiveSeconds = `Times's up!`
            getCursorPosition = stop;
            let restartButton = document.getElementById('restart');
            restartButton.style.display = 'block';
        
        }
        timer.innerHTML = fiveSeconds
    }, 1000)
 }

 decreaseTime(fiveSeconds);

 document.getElementById('restart').onclick = () => {
   console.log('restarting')
   fiveSeconds = 5;
   drawEverything();
   decreaseTime(fiveSeconds);
   startGame();
   document.getElementById('scoreTotal') = 0;
 };
