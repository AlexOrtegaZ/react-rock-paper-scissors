export const optionsEnums = {
    ROCK: 'R',
    PAPER: 'P',
    SCISSORS: 'S',
}

export const resultsEnum = {
    WIN: 1,
    LOSE: 2,
    TIE: 3
}

export const results = {
    [resultsEnum.WIN]: {
        type: resultsEnum.WIN,
        name: 'win',
        message: 'You win',
    },
    [resultsEnum.LOSE]: {
        type: resultsEnum.LOSE,
        name: 'lose',
        message: 'You lose',
    },
    [resultsEnum.TIE]: {
        type: resultsEnum.TIE,
        name: 'tie',
        message: 'Tie',
    },
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
export class Play {
    constructor(user, cpu) {
        this.user = user;
        this.cpu = cpu;
    }

    get result() {
        let playResult = resultsEnum.LOSE;
        if(options[this.user].winsTo === this.cpu) {
            playResult = resultsEnum.WIN;
        } else if (this.user === this.cpu){
            playResult = resultsEnum.TIE;
        }
        return results[playResult];
    }
}

export const getCpuMove = (userMovesSummary) => {
    return fetch(`https://smartplay.afiniti.com/v1/play/${userMovesSummary}`)
    .then((res) => res.json())
    .then((res) => res.nextBestMove);
}

