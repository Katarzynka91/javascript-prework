function playGame(playerInput,randomNumber) {

  clearMessages(

  let playerMove = getMoveName (playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName (randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } if (argMoveId == 2){
    return 'papier';
  } if (argMoveId == 3){
    return 'nożyce'; 
  }
}


 
/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
} */ 

printMessage('Mój ruch to: ' + computerMove);

/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/ 

console.log('Gracz wpisał: ' + playerInput);



/* if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
} */ 

printMessage('Twój ruch to: ' + playerMove);

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argcomputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ){
    printMessage('Ty wygrywasz')
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage ('Ty wygrywasz')
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage ('Remis')
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage ('Remis')
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage ('Remis')
  } else if (argComputerMove == 'papier' || argComputerMove == 'kamień' || argComputerMove = 'nożyce' && argPlayerMove == 'nieznany ruch'){
    printMessage ('Tym razem przegrywasz')
  }
  
}

displayResult (ComputerMove,PlayerMove)


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

  )
}

playGame(playerInput,randomNumber)



















