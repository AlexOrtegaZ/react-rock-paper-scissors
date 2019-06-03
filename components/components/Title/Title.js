import React from 'react';
import './Title.scss';

const Title = () => (
    <div className="title-container">
        <h2>
            <span className="rock">Rock</span>,&nbsp;
            <span className="paper">Paper</span> &&nbsp;
            <span className="scissors">Scissors</span>   
        </h2>
        <hr />
    </div>
)

export default Title;