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

function playRound(ps, cs) {

    if (ps === cs) {
        return 'It\'s a tie!';
    }
    else if (ps  === "rock" && cs === "scissor" || ps === "paper" && cs === "rock"
    || ps === "scissor" && cs === "paper"){
        return `You Win! ${ps} wins over ${cs}`
    }
    else{
        return `You Lose! ${cs} wins over ${ps}` 
    }
    
}

// This function plays a game of 5 rounds

function game() {

    let table = [];

        for (i = 0; i < 5; i++) {

        let ps = playerPlay().toString();
        let cs = computerPlay().toString();
        

        table[i] = playRound(ps, cs);

        console.log(table[i]);
        }
        
        return;
}


