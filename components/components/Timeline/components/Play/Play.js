import React from 'react';
import './Play.scss';

const Play = ({ result, userMove, cpuMove }) =>  (
    <div className={`play-container ${ result.name }`}  >
        <h4 className="title">{result.name.toUpperCase()}</h4>
        <div className="options-container">
            <Option player="you" option={userMove} />
            <hr />
            <Option player="cpu" option={cpuMove} />
        </div>
        
    </div>
);


const Option = ({ player, option }) => (
    <div className="option-container">
        <img src={`../../../../../assets/images/mini-${option.toLowerCase()}.png`} />
        <p>{player}</p>
    </div>
)

export default Play;