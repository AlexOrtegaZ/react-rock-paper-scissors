import React from 'react';
import './Confetti.scss';
import '../ResultBoard.scss';

// Confetti By Andy
// https://codepen.io/andyobrien/pen/WYrxMe

const Confetti = ({ show, children}) => show ? (
    <div className="confetti">
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        {children}
    </div>
) : (<div>{children}</div>);

export default Confetti;