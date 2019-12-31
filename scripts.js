const selection = ["rock", "paper", "scissors"];
function computerPlay(){
    chooseRand = Math.floor(Math.random()*3) //chooses random number from 0 to 2
    let cpuChoice = selection[chooseRand];
    return cpuChoice
}
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
function winnerText(playerSelection, computerSelection){
    return("You win! "+ playerSelection +" beats " + computerSelection );
}
function loserText(playerSelection, computerSelection){
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