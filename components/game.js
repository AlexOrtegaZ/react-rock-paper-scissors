
export const resultsEnum = {
    WIN: 1,
    LOSE: 2,
    TIE: 3
}
export const optionsEnums = {
    ROCK: 'R',
    PAPER: 'P',
    SCISSORS: 'S',
    LIZARD: 'L',
    SPOCK: 'Y',
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
        winsTo: {
           [optionsEnums.SCISSORS]: 'Rock crushes scissors',
           [optionsEnums.LIZARD]: 'Rock crushes lizard',
        },
    },
    [optionsEnums.PAPER]: {
        name: 'Paper',
        winsTo: {
            [optionsEnums.ROCK]: 'Paper covers rock',
            [optionsEnums.SPOCK]: 'Paper disproves Spock',
         },
    },
    [optionsEnums.SCISSORS]: {
        name: 'Scissors',
        winsTo: {
            [optionsEnums.PAPER]: 'Scissors cuts paper',
            [optionsEnums.LIZARD]: 'Scissors decapitates Lizard',
         },
    },
    [optionsEnums.LIZARD]: {
        name: 'Lizard',
        freaky: true,
        winsTo: {
            [optionsEnums.PAPER]: 'Lizard eats paper',
            [optionsEnums.SPOCK]: 'Lizard poisons spock',
         },
    },
    [optionsEnums.SPOCK]: {
        name: 'Spock',
        freaky: true,
        winsTo: {
            [optionsEnums.ROCK]: 'Spock vaporizes Rock',
            [optionsEnums.SCISSORS]: 'Spock smashes scissors',
         },
    },
};
export class Play {
    constructor(userMove, cpuMove) {
        this.userMove = userMove;
        this.cpuMove = cpuMove;
    }

    get result() {
        let playResult = resultsEnum.TIE;
        let reason = ':|';
        
        if (options[this.cpuMove].winsTo[this.userMove]){
            playResult = resultsEnum.LOSE;
            reason = options[this.cpuMove].winsTo[this.userMove];
        } else if(options[this.userMove].winsTo[this.cpuMove]) {
            playResult = resultsEnum.WIN;
            reason = options[this.userMove].winsTo[this.cpuMove];
        }
        return { ...results[playResult], reason };
    }
}

export const getCpuMove = (userMovesSummary, freakyMode) => {
    if (!freakyMode) {
        return fetch(`https://smartplay.afiniti.com/v1/play/${userMovesSummary}`)
        .then((res) => res.json())
        .then((res) => res.nextBestMove);
    } else {
        const options = Object.values(optionsEnums);
        const index = getRandomArbitrary(0, options.length - 1)
        return options[index]
    }
    
}

function getRandomArbitrary(min, max) {
    return Math.floor( Math.random() * (max - min) + min );
}

