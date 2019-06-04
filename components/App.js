import React from 'react';
import Options from './components/Options/Options';
import ResultBoard from './components/ResultBoard/ResultBoard';
import Results from './components/Results/Results';
import SwitchFreakyMode from './components/SwitchFreakyMode/SwitchFreakyMode';
import Timeline from './components/Timeline/Timeline';
import Title from './components/Title/Title';
import './App.scss';
import { Play, resultsEnum, getCpuMove } from './game';

class App extends React.Component {
  state = { 
    counter: { user: 0, cpu: 0 }, 
    history: [],
    newPlay: null,
    freakyMode: false,
  }

  getUserMovesSummary() {
    return this.state.history.map(h => h.userMove).join('');
  }

  onSelectOption = async (userMove) => {
    const { history, counter, freakyMode } = this.state;
    const cpuMove = await getCpuMove(this.getUserMovesSummary(), freakyMode); 
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
  }

  hideResultBoard = () => {
    if (this.state.newPlay) {
      this.setState({ newPlay: null });
    }
  }

  toogleFreakyMode = () => {
    const { freakyMode } = this.state;
    this.setState({ freakyMode: !freakyMode });
  }

  render() {
    const { counter, history, newPlay, freakyMode } = this.state; 
    return (
      <div className="app-container">
        {/* Main */}
        <div className="main-container">
          <Title freakyMode={freakyMode} />
          <Options onSelectOption={this.onSelectOption} freakyMode={freakyMode} />
        </div>

        {/* Side Bar */}
        <div className="side-bar-container">
          <Results {...counter} />
          <SwitchFreakyMode toogleFreakyMode={this.toogleFreakyMode} freakyMode={freakyMode} />
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