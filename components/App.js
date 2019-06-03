import React from 'react';
import Options from './components/Options/Options';
import Results from './components/Results/Results';
import Timeline from './components/Timeline/Timeline';
import Title from './components/Title/Title';
import './App.scss';
import { Play, resultsEnum, getCpuMove } from './game';

class App extends React.Component {
  state = { 
    counter: { user: 0, cpu: 0 }, 
    history: [],
  }

  getUserMovesSummary() {
    return this.state.history.map(h => h.user).join('');
  }

  onSelectOption = async (userMove) => {
    const { history, counter } = this.state;
    const cpuMove = await getCpuMove(this.getUserMovesSummary()); 
    const newPlay = new Play(userMove, cpuMove);
    
    if(newPlay.result.type === resultsEnum.WIN) {
      counter.user ++;
    } else if (newPlay.result.type === resultsEnum.LOSE) {
      counter.cpu ++;
    }
    
    this.setState({
      counter,
      history: [newPlay,  ...history] 
    });
  }

  render() {
    const { counter, history } = this.state; 
    return (
      <div className="app-container">
        {/* Main */}
        <div className="main-container">
          <Title />
          <Options onSelectOption={this.onSelectOption} />
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