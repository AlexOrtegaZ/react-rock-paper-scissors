import React from 'react';
import Options from './components/Options/Options';
import Results from './components/Results/Results';
import Timeline from './components/Timeline/Timeline';
import Title from './components/Title/Title';
import './App.scss';
import { Play, resultsEnum, getCpuMove } from './game';
import ResultBoard from './components/ResultBoard/ResultBoard';

class App extends React.Component {
  state = { 
    counter: { user: 0, cpu: 0 }, 
    history: [],
    newPlay: null,
  }

  getUserMovesSummary() {
    return this.state.history.map(h => h.userMove).join('');
  }

  onSelectOption = async (userMove) => {
    const { history, counter } = this.state;
    const cpuMove = await getCpuMove(this.getUserMovesSummary()); 
    const newPlay = new Play(userMove, cpuMove);
    
    if (newPlay.result.type === resultsEnum.WIN) {
      counter.user ++;
    } else if (newPlay.result.type === resultsEnum.LOSE) {
      counter.cpu ++;
    }
    
    this.setState({
      counter,
      newPlay,
      history: [newPlay,  ...history] 
    }); 
    this.timeout = setTimeout(this.hideResultBoard, 10 * 1000);
  }

  hideResultBoard = () => {
    if (this.state.newPlay) {
      this.setState({ newPlay: null });
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { counter, history, newPlay } = this.state; 
    return (
      <div className="app-container">
        {/* Main */}
        <div className="main-container">
          <Title />
          <Options onSelectOption={this.onSelectOption} />
        </div>

        {/* Side Bar */}
        <div className="side-bar-container">
          <Results {...counter} />
          <Timeline history={history} />
        </div>
        
        {/* Results Board */}
        {
          newPlay && (
            <ResultBoard 
              result={newPlay.result} 
              onClick={this.hideResultBoard}
              {...newPlay}
            />
          )
        }
      </div>
    );
  }
}
 
export default App;