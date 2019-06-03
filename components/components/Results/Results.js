import Counter from './components/Counter/Counter';
import React from 'react';
import './Results.scss';

const Results = ({ user, cpu }) => (
    <div className="results-container">
        <h4>Score</h4>
        <div className="scores-container">
            <Counter player="you" counter={user} />
            <span>-</span>
            <Counter player="cpu" counter={cpu}  />
        </div>
    </div>
)

export default Results;