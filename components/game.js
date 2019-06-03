export const optionsEnums = {
    ROCK: 'R',
    PAPER: 'P',
    SCISSORS: 'S',
}
export const options = {
    [optionsEnums.ROCK]: {
        name: 'Rock',
        winLabel: 'Rock crushes scissors',
        winsTo: optionsEnums.SCISSORS,
    },
    [optionsEnums.PAPER]: {
        name: 'Paper',
        winLabel: 'Paper covers rock',
        winsTo: optionsEnums.ROCK
    },
    [optionsEnums.SCISSORS]: {
        name: 'Scissors',
        winLabel: 'Scissors cuts paper',
        winsTo: optionsEnums.PAPER
    }
};
export const youWin = (youOption, theOtherOption) => {
    return options[youOption].winsTo === theOtherOption;
}

