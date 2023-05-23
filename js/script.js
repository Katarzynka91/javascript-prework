
function playGame(playerInput) {
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } if (argMoveId == 2){
      return 'papier';
    } if (argMoveId == 3){
      return 'nożyce'; 
    }
  }

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argcomputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ){
      printMessage('Ty wygrywasz')
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage ('Ty wygrywasz')
    } else if (argComputerMove == argPlayerMove){
      printMessage ('Remis')
    } else {
      printMessage ('Tym razem przegrywasz')
    }
  }
  
  clearMessages();

  let playerMove = getMoveName(playerInput);

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove,playerMove)
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});




















