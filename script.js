// This function will randomly choose the computer selection

function computerSelection() {
    let select = Math.floor(Math.random() * 3);

    console.log(select);

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