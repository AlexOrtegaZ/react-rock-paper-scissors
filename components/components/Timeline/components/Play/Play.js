import React from 'react';
import { youWin } from '../../../../game';
import './Play.scss';

const Play = ({ userOption = 'R', cpuOption = 'P' }) => {
    const userWins = youWin(userOption, cpuOption);
    return (
        <div className={`play-container ${ userWins ? 'win': 'lose' }`}  >
            <h4>{userWins ? 'Win' : 'Lose'}</h4>
            <div className="options-container">
                <Option player="you" option={userOption} />
                <hr />
                <Option player="cpu" option={cpuOption} />
            </div>
            
        </div>
    )
}

const Option = ({ player, option }) => (
    <div className="option-container">
        <img src={`../../../../../assets/images/mini-${option.toLowerCase()}.png`} />
        <p>{player}</p>
    </div>
)

export default Play;