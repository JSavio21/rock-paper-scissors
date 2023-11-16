const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice
    
};



function checkWinner(playerSelection,ComputerSelection){
    if (playerSelection == ComputerSelection){
    return "Tie";
    }
    else if(
        (playerSelection == "rock" && ComputerSelection== "scissors") ||
        (playerSelection == "scissor" && ComputerSelection== "paper") ||
        (playerSelection == "paper" && ComputerSelection== "rock" )
        ){
            return "Player";
        }
        else {
            return "Computer";
        }
    }


function playRound(playerSelection,ComputerSelection){
    const result = checkWinner(playerSelection,ComputerSelection);
    if (result == "Tie"){
        return "Its a Tie"
    }
    else if (result == "Player"){
        return "You Win"
    }
    else{
        return "You Lose"
    } 
}
 
function getPlayerChoice(){
    let playerInput = false;
    while(playerInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceLowerCase = choice.toLowerCase();
        if(options.includes(choiceLowerCase)){
            playerInput = true;
            return choiceLowerCase;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const ComputerSelection = getComputerChoice();
        console.log(playRound(playerSelection, ComputerSelection));
        if (checkWinner(playerSelection, ComputerSelection) == "Player"){
                scorePlayer++;
        } else if (checkWinner(playerSelection, ComputerSelection) == "Computer"){
                scoreComputer++;
        }
    console.log("Game Over")
    if (scorePlayer>scoreComputer){
        console.log("The player won");
    }
    else if (scorePlayer<scoreComputer){
        console.log("The computer won");
    }
    else {
        console.log("The game is a draw")
    }
    }}

game()

