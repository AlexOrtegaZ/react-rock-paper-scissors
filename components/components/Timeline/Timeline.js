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
                history.map((play, i) => (
                    <Play key={i + play.userMove } play={play} />
                ))
            }
        </div>
        
    </div>
)};

export default Timeline;