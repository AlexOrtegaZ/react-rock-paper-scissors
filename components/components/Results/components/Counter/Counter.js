import React from 'react';
import './Counter.scss';

const Counter = ({name, counter}) => (
    <div className="counter-container">
        <h1>{counter}</h1>
        <p>{name}</p>
    </div>
)

export default Counter;