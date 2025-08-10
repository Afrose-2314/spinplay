if(!sessionStorage.getItem('sp_user')){
  window.location.href='login.html';
}

const games = [
  { title:'Speed Typing', file:'speed.html', instructions:'Type the shown word as fast as possible in 60 seconds.'},
  { title:'Color Game', file:'color.html', instructions:'Click the correct color name before time runs out.'},
  { title:'Memory Game', file:'memory.html', instructions:'Match all the cards before time runs out.'},
  { title:'Guess Number', file:'guess.html', instructions:'Guess the number in the fewest tries possible.'},
  { title:'Math Quiz', file:'math.html', instructions:'Answer as many math questions as possible in time.'}
];

let wheel = document.getElementById('wheel');
let spinBtn = document.getElementById('spinBtn');
let modal = document.getElementById('instructionModal');
let gameTitle = document.getElementById('gameTitle');
let gameInstructions = document.getElementById('gameInstructions');
let startGameBtn = document.getElementById('startGameBtn');
let selectedGame = null;

spinBtn.addEventListener('click', ()=>{
  let deg = Math.floor(5000 + Math.random()*5000);
  wheel.style.transition = 'transform 4s ease-out';
  wheel.style.transform = `rotate(${deg}deg)`;
  setTimeout(()=>{
    let index = Math.floor(Math.random()*games.length);
    selectedGame = games[index];
    gameTitle.textContent = selectedGame.title;
    gameInstructions.textContent = selectedGame.instructions;
    modal.style.display = 'flex';
  }, 4500);
});

startGameBtn.addEventListener('click', ()=>{
  if(selectedGame){
    window.location.href = selectedGame.file;
  }
});
