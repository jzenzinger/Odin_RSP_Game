var status = ['ROCK','SCISSORS','PAPER'];
const playerPoints = 0;
const computerPoints = 0;

console.log('Lets play game!');
game();

function computerPlay() {
    var index = Math.floor(Math.random() * 3);
    var result = status[index];

    return result;
}

function playRound(computerSelection, playerSelection) {
    const upperPlayer = playerSelection.toUpperCase();
    const upperComp = computerSelection.toUpperCase();

    //If 1 then noone wins, 
    //if 2 then winner is computer, 
    //if 3 then winner is player
    var winner = 0; 

    //Computer selected 'ROCK'
    if(upperComp == status[0]) {
        if(upperPlayer == status[0]) {
            console.log('You choosed same weapon! Again.');
            winner = 1;
        }
        else if(upperPlayer == status[1]) {
            console.log('Computer won this one.');
            winner = 2;
            computerPoints += 1;
        }
        else if(upperPlayer == status[2]) {
            console.log('You won this one!');
            winner = 3
            playerPoints += 1;
        }
    }
    //Computer selected 'SCISSORS'
    else if(upperComp == status[1]) {
        if(upperPlayer == status[0]) {
            console.log('You won this one');
            winner = 3;
            playerPoints += 1;
        }
        else if(upperPlayer == status[1]) {
            console.log('You choosed same weapon! Again.');
            winner = 1;
        }
        else if(upperPlayer == status[2]) {
            console.log('Computer won this one.');
            winner = 2;
            computerPoints += 1;
        }
    }
    //Computer selected 'PAPER'
    else if(upperComp == status[2]) {
        if(upperPlayer == status[0]) {
            console.log('Computer won this one.');
            winner = 2;
            computerPoints += 1;
        }
        else if(upperPlayer == status[1]) {
            console.log('You won this one');
            winner = 3;
            playerPoints += 1;
        }
        else if(upperPlayer == status[2]) {
            console.log('You choosed same weapon! Again.');
            winner = 1;
        }
    }
    //Returns 1, 2 or 3
    return winner;
}

function game() {
    while(computerPoints != 5 || playerPoints != 5) {
        console.log('Write your choice: [rock, scissors, paper] \n');
        var playerChoice = readline();
        var upper = playerChoice.toUpperCase();

        if(upper == status[0] || upper == status[1] || upper == status[2]) {
            playRound(computerPlay(), upper);

            console.log('Your score is: ' + playerPoints);
            console.log('Computer score is: ' + computerPoints);
        }
        if(playerPoints == 5 || computerPoints == 5) {
            if(playerPoints == 5) {
                console.log('Player won entire game!');
            }
            else if(computerPoints == 5) {
                console.log('Computer won entire game!');
            }

            break;
        }
    }
}