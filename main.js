var status = ['rock','scissors','paper'];
var playerPoints = 0;
var computerPoints = 0;

console.log('Lets play game!');
game();

function computerPlay() {
    var index = Math.floor(Math.random() * 3);
    var result = status[index];

    return result;
}

function playRound(computerSelection, playerSelection) {
    const upperPlayer = playerSelection.toLowerCase();
    const upperComp = computerSelection.toLowerCase();

    //If 1 then noone wins, 
    //if 2 then winner is computer, 
    //if 3 then winner is player
    var winner = 0; 

    //Computer selected 'rock'
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
    //Computer selected 'scissors'
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
    //Computer selected 'paper'
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
        console.log('Write your choice: [rock, scissors, paper]');
        var playerChoice = prompt('Enter your choice');      //Readline() is not working here, so maybe will use prompt()
        //Check on if user add its choice for game
        if(playerChoice != null) {
            //then
            var upper = playerChoice.toLowerCase();

            //If users choice is something from array ['rock','scissors','paper']
            if(upper == status[0] || upper == status[1] || upper == status[2]) {
                playRound(computerPlay(), upper);

                console.log('Your score is: ' + playerPoints);
                console.log('Computer score is: ' + computerPoints);
            }

            //if someone have 5 points, than it wins, computer or player
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
        else {
            alert('Your didnt enter a choice! Again.');
            break;
        }
    }
}