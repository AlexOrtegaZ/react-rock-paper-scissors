import React from 'react';
import './Title.scss';

const Title = () => (
    <div className="title-container">
        <h2>
            <span className="rock">Rock</span>,
            <span className="paper">Paper</span>,
            &
            <span className="scissors">Scissors</span>   
        </h2>
    </div>
)

export default Title;