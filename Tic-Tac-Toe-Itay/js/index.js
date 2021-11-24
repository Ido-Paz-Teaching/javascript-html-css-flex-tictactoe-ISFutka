// select HTML elements and store them in variables
var update = document.querySelector('.status-text'); // status bar
var tiles = Array.from(document.querySelectorAll('.tile')); // monitor tiles for 'X' and 'O'
var playAgain = document.querySelector('.play-again'); //play again button
// create variables for the tic tac toe game
var player = true;
var moves = 1;
var score = {
  x: 0,
  o: 0,
  ties: 0
}
//page loads up --> score updates and board resets, game starts.
updateScore();
resetBoard();

function resetBoard () {
  moves = 1;
  //adds x or o to the body's class atributes to later insert to the tiles
  if (player) {
    document.body.classList.add('x');
  }
  else {
    document.body.classList.add('o');
  }
  //inserts X or O to the html update element so it will be presented on the webpage
  update.textContent = document.body.className.toUpperCase() + "'s turn";
  //resets the board list and visuals
  tiles.forEach(tile => 
    {
    tile.textContent = '';
    tile.addEventListener('click', tictactoe);
    }
  )
  playAgain.classList.toggle('button-on');
}
//when game ends disable board
function disableBoard () {
  document.body.classList.remove('x');
  document.body.classList.remove('o');
  tiles.forEach(tile => {
    tile.removeEventListener('click', tictactoe);
  })
}

function updateScore () {
  document.querySelector('.score-x').textContent = score.x;
  document.querySelector('.score-ties').textContent = score.ties;
  document.querySelector('.score-o').textContent = score.o;
}

function tictactoe (event) {
  var tile = event.target;
  var currentPlayer = document.body.className.toUpperCase();
  //only do something if the element includes class 'tile' (so stuff only happens when the tiles are pressed)
  if (!tile.className.includes('tile')) return;
  //if the tile is already previously pressed it won't do anything
  if (tile.textContent) return;
  //inserting the X or O to the tile
  tile.textContent = currentPlayer;
  //makes the tile that just got pressed not a button anymore
  tile.removeEventListener('click', tictactoe);
  var winner = findWinner();
  if (winner) {
    update.textContent = currentPlayer + ' wins!'
    //if X wins
    if (currentPlayer === 'X') {
      score.x += 1;
      //if X won O starts next
      player = false;
    } 
    //if O wins
    else {
      score.o += 1;
      //if O won X starts next
      player = true;
    }
    //finish game
    disableBoard();
    updateScore();
    //add play again button
    playAgain.addEventListener('click', resetBoard);
    playAgain.classList.toggle('button-on');
  }
  //if tie
  else if (moves === 9) {
    update.textContent = "It's a tie!";
    score.ties += 1;
    disableBoard();
    updateScore();
    //add play again button
    playAgain.addEventListener('click', resetBoard);
    playAgain.classList.toggle('button-on');
  } 
  //if no winner currently found on the current move and it's still not a tie --> continue
  else {
    moves = moves + 1;
    player = !player;
    //checks if X is in the body's class atributes, if it is, 'toggle' earases it and only leaves O.
    document.body.classList.toggle('x');
    //checks if O is in the body's class atributes if it is, 'toggle' earases it and only leaves X.
    document.body.classList.toggle('o');
    update.textContent = document.body.className.toUpperCase() + '\'s turn';
  }
}

function findWinner () {
  // tiles layout by index
  // [0] [1] [2]
  // [3] [4] [5]
  // [6] [7] [8]
  var winningCombination = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                             [0, 3, 6], [1, 4, 7], [2, 5, 8],
                             [0, 4, 8], [2, 4, 6]];
  /* winningset returns -1 if a winning combination was not found,
  else it returns the index (in winningCombination variable) of the combination that was found. */
  var winningSet = winningCombination.findIndex(combo =>
           combo.every(tileIndex =>
             tiles[tileIndex].textContent === document.body.className.toUpperCase()))
  /*if a winning combination was not found winningset will be -1 so FindWinner will return false, 
  but if a winning combination was found winningset will be something between 0 to 6 so it will return true*/
  return (winningSet >= 0);
}