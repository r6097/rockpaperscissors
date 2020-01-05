function bgWin() {
  document.getElementById("bg").style.backgroundColor = "mediumseagreen";
} 
function bgDraw() {
  document.getElementById("bg").style.backgroundColor = "coral";
} 
function bgLose() {
  document.getElementById("bg").style.backgroundColor = "brown";
}

//to keep track of Scores
playerScore = 0;
cpuScore = 0;
document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('cpuScore').innerHTML = cpuScore;

function btnSelection(e) {
  let button = document.querySelector(`button[id="${this.id}"]`);
  let playerSelection = button.id;
  let gameText = playRound(playerSelection, computerPlay());
  document.getElementById('output').innerHTML = gameText;
  document.getElementById('output').classList.add('pulse')
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('cpuScore').innerHTML = cpuScore;
  if(playerScore >= 5){
    window.alert("You Win!");
    history.go(0);
  }else if(cpuScore >= 5){
    window.alert("\"You lose!\" ~Robert");
    history.go(0);
  }
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
                    return(drawText());
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
                    return(drawText());
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
                    return(drawText());
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
function winnerText(playerSelection, computerSelection){
    playerScore++;
    bgWin();
    return("You win! "+ playerSelection +" beats " + computerSelection );
}
function loserText(playerSelection, computerSelection){
    cpuScore++;
    bgLose();
    return("You Lose! "+ computerSelection +" beats " + playerSelection );
}
function drawText(){
    bgDraw();
    return("It's a draw!")
}
