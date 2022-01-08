// This function will randomly choose the computer selection

function computerPlay() {

    let select = Math.floor(Math.random() * 3);

    switch (select) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
        default:
            return;
    }
}
// This function will get the player pick

function playerPlay() {
    let pick = prompt("What's your pick?");
    return pick.toLowerCase();
}

// This function will play a round of the game

function playRound(playerSelection, computerSelection) {

    p = playerSelection;
    c = computerSelection;

    console.log(p, c);
    return;
}

// This function plays a game of 5 rounds

function game() {

    for (let i = 0; i < 5; i++) {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection)
    }

    return;
}


