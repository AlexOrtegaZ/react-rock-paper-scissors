import React from 'react';
import Results from './components/Results/Results';
import Timeline from './components/Timeline/Timeline';
import './App.scss';

class App extends React.Component {
  state = { 
    counter: { user: 0, cpu: 0 }, 
    history: []
  }

  render() { 
    return (
      <div className="app-container">
        {/* Main */}
        <div className="main-container">
          <h2>Rock, Paper && Scissors</h2>    
        </div>

        {/* Side Bar */}
        <div className="side-bar-container">
          <Results />
          <Timeline />
        </div>
        
      </div>
    );
  }
}
 
export default App;