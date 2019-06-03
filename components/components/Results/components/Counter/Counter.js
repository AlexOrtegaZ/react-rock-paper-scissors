import React from 'react';
import './Counter.scss';

const Counter = ({player, counter}) => (
    <div className="counter-container">
        <h1>{counter}</h1>
        <p>{player}</p>
    </div>
)

export default Counter;