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
    }
}
// This function will get the player pick

function playerPlay() {
    let pick = prompt("What's your pick?");
    return pick.toLowerCase();
}




