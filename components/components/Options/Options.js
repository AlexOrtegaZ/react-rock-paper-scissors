import React from 'react';
import { options, optionsEnums } from '../../game';
import './Options.scss';

const Options = ({ onSelectOption, freakyMode }) => (
    <div className="options-container">
        <h3>Choose</h3>
        <div className="options-list">
            {
                Object.values(optionsEnums).map(option => 
                    (!options[option].freaky || freakyMode) && (
                    <div key={option} className="option" onClick={() => onSelectOption(option)}>
                        <img src={`./assets/images/${options[option].name}.png`} />
                        <p>{options[option].name}</p>
                    </div>
                ))
            }
        </div>
        
    </div>
)

export default Options;
