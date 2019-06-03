import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';
import App from './App';

let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
