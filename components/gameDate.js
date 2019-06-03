export const optionsEnums = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
}

export default game = {
    options = [
        {
            name: 'Rock',
            type: optionsEnums.ROCK,
            winLabel: 'Rock crushes scissors',
            winsTo: optionsEnums.SCISSORS,
        },
        {
            name: 'Paper',
            type: optionsEnums.PAPER,
            winLabel: 'Paper covers rock',
            winsTo: optionsEnums.ROCK
        },
        {
            name: 'Scissors',
            type: optionsEnums.SCISSORS,
            winLabel: 'Scissors cuts paper',
            winsTo: optionsEnums.PAPER
        }
    ],
    whoWins: (userSelection, cpuSelection) => {
        return userSelection.winsTo === cpuSelection.type ? userSelection : cpuSelection;
    }
}

