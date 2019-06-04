import React from 'react';

const SwitchFreakyMode = ({ toogleFreakyMode, freakyMode }) => (
    <div className="switch-freaky-mode">
        Freaky Mode : 
        <input type="checkbox" onChange={toogleFreakyMode} checked={freakyMode} />
    </div>
)

export default SwitchFreakyMode;
