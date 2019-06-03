import React from 'react';
import Results from './components/Results/Results';
import Timeline from './components/Timeline/Timeline';
import './App.scss';

class App extends React.Component {
  state = { 
    counter: { user: 0, cpu: 1 }, 
    history: [{userOption: 'R', cpuOption: 'P' }, { userOption: 'S', cpuOption: 'P'},  ],
  }

  getUserOptionsSummary = () => {
    const { history } = this.state;
    return history.map(h => h.userOption).join('');
  }

  render() {
    const { counter, history } = this.state; 
    return (
      <div className="app-container">
        {/* Main */}
        <div className="main-container">
          <h2>Rock, Paper && Scissors</h2> 
        </div>

        {/* Side Bar */}
        <div className="side-bar-container">
          <Results counter={counter} />
          <Timeline history={history} />
        </div>
        
      </div>
    );
  }
}
 
export default App;