//to keep track of Scores
let playerScore = 0;
let cpuScore = 0;
document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('cpuScore').innerHTML = cpuScore;
function btnSelection(e) {
  let button = document.querySelector(`button[id="${this.id}"]`);
  let playerSelection = button.id;
  let gameText = playRound(playerSelection, computerPlay());
  document.getElementById('output').innerHTML = gameText;
}
// store array of buttons for event listener
const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', btnSelection));
//array to for cpu to choose from randomly
const selection = ["rock", "paper", "scissors"];
//simulates computer player to play against user
function computerPlay(){
    chooseRand = Math.floor(Math.random()*3); //chooses random number from 0 to 2
    let cpuChoice = selection[chooseRand];
    return cpuChoice;
}
//the logic to determine who wins the round
function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    return("It's a draw");
                    break;
                case 'scissors':
                    return(winnerText(playerSelection, computerSelection));
                    break;
                case 'paper':
                    return(loserText(playerSelection, computerSelection));
                    break;
            }
        case 'paper':
            switch(computerSelection){
                case 'paper':
                    return("It's a draw");
                    break;
                case 'rock':
                    return(winnerText(playerSelection, computerSelection));
                    break;
                case 'scissors':
                    return(loserText(playerSelection, computerSelection));
                    break;
            }
        case 'scissors':
            switch(computerSelection){
                case 'scissors':
                    return("It's a draw");
                    break;
                case 'paper':
                    return(winnerText(playerSelection, computerSelection));
                    break;
                case 'rock':
                    return(loserText(playerSelection, computerSelection));
                    break;
            }
    }
}

//text for win/lose rounds
function winnerText(playerSelection, computerSelection, playerScore){
    playerScore++;
    return("You win! "+ playerSelection +" beats " + computerSelection );
}
function loserText(playerSelection, computerSelection, cpuScore){
    cpuScore++;
    return("You Lose! "+ computerSelection +" beats " + playerSelection );
}

/*
function game(){ // plays a game of 5 rounds or rock-paper-scissors
    let i = 5
    for(i; i>0; i--){
        // will display popups
        let playerSelection = prompt()
        let computerSelection = computerPlay()
        let gametext = playRound(playerSelection, computerSelection)
        console.log(gametext)
    }
}
game();
*/