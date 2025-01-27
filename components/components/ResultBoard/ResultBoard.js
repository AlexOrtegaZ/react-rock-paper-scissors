import React from 'react';
import Confetti from './components/Confetti'
import './ResultBoard.scss';
import { resultsEnum } from '../../game';

const ResultBoard = ({ play: { userMove, cpuMove, result }, onClick }) => (
    <div className="result-board-container" onClick={onClick}>
        <Confetti show={result.type === resultsEnum.WIN}>
            <div className={`result ${ result.name }`}>
                <h1>{result.message}</h1>
                <div className="options-container">
                    <Option player="you" option={userMove} />
                    <hr />
                    <Option player="cpu" option={cpuMove} />
                </div>
                <p className="reason">{result.reason}</p>
                <p>Click to continue</p>
            </div>
        </Confetti>
    </div>
)


const Option = ({ player, option }) => (
    <div className={`option-container ${player}`}>
        <img src={`./assets/images/mini-${option}.png`} />
        <p>{player}</p>
    </div>
)
export default ResultBoard;