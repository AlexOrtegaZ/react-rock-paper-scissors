import React from 'react';
import Play from './components/Play/Play'
import './Timeline.scss';

const Timeline = ({ history = [] }) => {
    return (
    <div className="timeline-container">
        <h4>History <span>({history.length} games played)</span> </h4>
        <div className="plays-container">
            {
                history.length !== 0 && 
                history.map((h, i) => (
                    <Play key={i + h.userMove } result={h.result} {...h} />
                ))
            }
        </div>
        
    </div>
)};

export default Timeline;