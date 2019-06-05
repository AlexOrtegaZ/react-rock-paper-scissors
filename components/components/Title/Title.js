import React from 'react';
import './Title.scss';

const Title = ({ geekMode }) => (
    <div className="title-container">
        <h2>
            {
                !geekMode && (
                    <span>
                        <span className="rock">Rock</span>,&nbsp;
                        <span className="paper">Paper</span> &&nbsp;
                        <span className="scissors">Scissors</span>
                    </span>
                )
            }
            {
                geekMode && (
                    <span>
                        <span className="rock">Rock</span>,&nbsp;
                        <span className="paper">Paper</span>,&nbsp;
                        <span className="scissors">Scissors</span>,&nbsp;
                        <span className="lizard">Lizard</span> &&nbsp;
                        <span className="spock">Spock</span>
                    </span>
                )
            }
        </h2>
        <hr />
    </div>
)

export default Title;