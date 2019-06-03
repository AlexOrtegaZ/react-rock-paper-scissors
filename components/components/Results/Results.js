import Counter from './components/Counter/Counter';
import React from 'react';
import './Results.scss';

const Results = () => (
    <div className="results-container">
        <h4>Score</h4>
        <div className="scores-container">
            <Counter name="you" counter={0} />
            <span>-</span>
            <Counter name="cpu" counter={0}  />
        </div>
    </div>
)

export default Results;