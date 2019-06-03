import React from 'react';
import Play from './components/Play/Play'
import './Timeline.scss';

const Timeline = ({ history = [] }) => (
    <div className="timeline-container">
        <h4>History <span>({history.length} games)</span> </h4>
        <div className="plays-container">
            {
                history.length && 
                history.map((h, i) => (
                    <Play key={i + h.userOption} {...h} />
                ))
            }
        </div>
        
    </div>
);

export default Timeline;