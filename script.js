function computerPlay(){
    let number = Math.floor((Math.random()*3) + 1);
    
    if(number == 1){
        return "Rock";
    }
    else if(number == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return -1;
    }
    if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") ||
     (playerSelection == "scissors" && computerSelection == "rock")){
         return 0;
     }
        return 1;
     
}


function game(){
    let count = 0;

    for(let i = 1; i <= 5; i++){
        console.log("\nRound " + i + " : \n");
        
        let playerSelection = prompt("Enter your choice (Rock / Paper / Scissors) :  ");
        let computerSelection = computerPlay();

        console.log("Your choice : " + playerSelection);
        console.log("2nd player's choice : " + computerSelection);

        let status =  playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        count += 1;
        if(status == 1){
            console.log(" You won this round... " + playerSelection + " beats " + computerSelection);
        }
        else if(status == 0){
            console.log("You loose this round....  " + computerSelection + " beats " + playerSelection);
        }
        else{
            console.log("Round draw. Try again.");
            i--;
        }
    }

    if(count >= 3){
        console.log("\n Congratulations!!!! You are the winner. Hurray!!!!!!!\n");
    }
    else{
        console.log("\nSorry. :(  You've lost it.  Better luck next time.\n");
    }
}

game();