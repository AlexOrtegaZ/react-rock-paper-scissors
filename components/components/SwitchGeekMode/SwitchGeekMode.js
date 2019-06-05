import React from 'react';
import './SwitchGeekMode.scss';

const SwitchGeekMode = ({ toogleGeekMode, geekMode }) => (
    <div className="switch-geek-mode">
        Geek Mode : 
        <input type="checkbox" onChange={toogleGeekMode} checked={geekMode} />
    </div>
)

export default SwitchGeekMode;
