const $start = document.querySelector("#start");
const $game = document.querySelector('#game');
const $time = document.querySelector('#time');
const $timeHeader = document.querySelector('#time-header');
const $resultHeader = document.querySelector('#result-header');
const $result = document.querySelector('#result');
const $gameTime = document.querySelector('#game-time');

let colors = ['#CB356B', '#BD3F32', '#3A1C71', '#D76D77', '#283c86', '#45a247', '#8e44ad', '#155799', '#159957', '#000046', '#1CB5E0', '#2F80ED'];
let score = 0;
let isGameStarted = false;

$start.addEventListener("click",startGame);
$game.addEventListener('click',handleBoxClick);
$gameTime.addEventListener('input',setGameTime);




function startGame(){
    score = 0;
    setGameTime();
    $gameTime.setAttribute('disabled', 'true');
    isGameStarted = true;
    $game.style.backgroundColor = '#fff';
    $start.classList.add('hide');
  
    let interval = setInterval(function() {
      let time = parseFloat($time.textContent);
      
      if (time <= 0) {
        clearInterval(interval);
        endGame();
      } else {
        $time.textContent = (time - 0.1).toFixed(1);
      }
    }, 100);
  
    renderBox();
}

function setGameTime(){
    let time = +$gameTime.value;
    $time.textContent = time.toFixed(1);
    $timeHeader.classList.remove('hide');
    $resultHeader.classList.add('hide');
}

function endGame(){
    isGameStarted = false;
    $start.classList.remove('hide');
    setGameScore();
    $gameTime.removeAttribute('disabled');
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    $timeHeader.classList.add('hide');
    $resultHeader.classList.remove('hide');
}

function handleBoxClick(event){
    if(!isGameStarted){
       return
    }
    if(event.target.dataset.box){
        score++;
        renderBox();
    }
}
function setGameScore(){
    $result.textContent = score.toString();
}


function renderBox() {
    $game.innerHTML = '';
    let box = document.createElement('div');
    let boxSize = getRandom(30, 100);
    let gameSize = $game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;
    let randomColorsIndex = getRandom(0, colors.length);
  
    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = colors[randomColorsIndex];
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');
  
    $game.insertAdjacentElement('afterbegin', box);
  
  }

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}