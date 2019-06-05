import React from 'react';
import Options from './components/Options/Options';
import ResultBoard from './components/ResultBoard/ResultBoard';
import Results from './components/Results/Results';
import SwitchGeekMode from './components/SwitchGeekMode/SwitchGeekMode';
import Timeline from './components/Timeline/Timeline';
import Title from './components/Title/Title';
import './App.scss';
import { Play, resultsEnum, getCpuMove, optionsEnums } from './game';

class App extends React.Component {
  state = { 
    counter: { user: 0, cpu: 0 }, 
    history: [],
    newPlay: null,
    geekMode: false,
  }

  getUserMovesSummary() {
    return this.state.history
      .filter(h => h.userMove !== optionsEnums.LIZARD &&  h.userMove !== optionsEnums.SPOCK )
      .map(h => h.userMove).join('');
  }

  onSelectOption = async (userMove) => {
    const { history, counter, geekMode } = this.state;
   
    if(!this.isCpuThinking) {
      this.isCpuThinking = true;
      const cpuMove = await getCpuMove(this.getUserMovesSummary(), geekMode); 
      this.isCpuThinking = false;
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
    
  }

  hideResultBoard = () => {
    if (this.state.newPlay) {
      this.setState({ newPlay: null });
    }
  }

  toogleGeekMode = () => {
    const { geekMode } = this.state;
    this.setState({ geekMode: !geekMode });
  }

  render() {
    const { counter, history, newPlay, geekMode } = this.state; 
    return (
      <div className="app-container">
        {/* Main */}
        <div className="main-container">
          <Title geekMode={geekMode} />
          <Options onSelectOption={this.onSelectOption} geekMode={geekMode} />
        </div>

        {/* Side Bar */}
        <div className="side-bar-container">
          <Results {...counter} />
          <SwitchGeekMode toogleGeekMode={this.toogleGeekMode} geekMode={geekMode} />
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