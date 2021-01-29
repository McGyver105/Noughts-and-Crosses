import './App.css';
import React from "react";
import XOButton from './Components.js/XOButton'
import PlayerNames from './Components.js/PlayerNames'
import ResetButton from './Components.js/ResetButton';

class App extends React.Component {
  state = {
    buttonOne: { notPressed: true, letter: '' },
    buttonTwo: { notPressed: true, letter: '' },
    buttonThree: { notPressed: true, letter: '' },
    buttonFour: { notPressed: true, letter: '' },
    buttonFive: { notPressed: true, letter: '' },
    buttonSix: { notPressed: true, letter: '' },
    buttonSeven: { notPressed: true, letter: '' },
    buttonEight: { notPressed: true, letter: '' },
    buttonNine: { notPressed: true, letter: '' },
    playerX: true,
    playerO: true,
    playerXname: '',
    playerOname: '',
    playerXscore: 0,
    playerOscore: 0,
    gameStatus: 'please enter your names',
    buttonsDisabled: true
  }

  componentDidMount () {
    this.fetchScore();
  }

  render () {
    return (
      <div className="App">
        <header>
          <img src="https://ichef.bbci.co.uk/images/ic/640x360/p01hcbq8.jpg" alt="XO" className="titleImage"></img>
          <h1>Noughts and Crosses</h1>
          <img src="https://ichef.bbci.co.uk/images/ic/640x360/p01hcbq8.jpg" alt="XO" className="titleImage"></img>
        </header>
        
        <h2>
          <PlayerNames xNeedsName={this.state.playerX} oNeedsName={this.state.playerO} handleSubmit={this.handleSubmit} handleTyping={this.handleTyping} namesHaveBeenEntered={this.namesHaveBeenEntered} valueX={this.state.playerXname} valueO={this.state.playerOname}></PlayerNames>
        </h2>
        <h3>
          <p>Player X: {this.state.playerXname} - vs - Player O: {this.state.playerOname}</p>
        </h3>
        <h2>
          Game status: {this.state.gameStatus}
        </h2>
        <h2>Score
          <p>{this.state.playerXname}: {this.state.playerXscore}  {this.state.playerOname}: {this.state.playerOscore}</p>
        </h2>
        <h4>
          <ResetButton handleReset={this.handleReset} handleSave={this.handleSave} handleClearSave={this.handleClearSave}></ResetButton>
        </h4>
        <table className="gameBoard">
          <tbody>
          <tr>
          <th colSpan="3">Game Board</th>
          </tr>
         <tr>
              <XOButton buttonInfo={this.state.buttonOne} handleClick={this.handleClick} id="buttonOne" disabled={this.state.buttonsDisabled}/>
              <XOButton buttonInfo={this.state.buttonTwo} handleClick={this.handleClick} id="buttonTwo" disabled={this.state.buttonsDisabled}/>
              <XOButton buttonInfo={this.state.buttonThree} handleClick={this.handleClick} id="buttonThree" disabled={this.state.buttonsDisabled}/>
          </tr>
          <tr>
              <XOButton buttonInfo={this.state.buttonFour} handleClick={this.handleClick} id="buttonFour" disabled={this.state.buttonsDisabled}/>
              <XOButton buttonInfo={this.state.buttonFive} handleClick={this.handleClick} id="buttonFive" disabled={this.state.buttonsDisabled}/>
              <XOButton buttonInfo={this.state.buttonSix} handleClick={this.handleClick} id="buttonSix" disabled={this.state.buttonsDisabled}/>
          </tr>
          <tr>
              <XOButton buttonInfo={this.state.buttonSeven} handleClick={this.handleClick} id="buttonSeven" disabled={this.state.buttonsDisabled}/>
              <XOButton buttonInfo={this.state.buttonEight} handleClick={this.handleClick} id="buttonEight" disabled={this.state.buttonsDisabled}/>
              <XOButton buttonInfo={this.state.buttonNine} handleClick={this.handleClick} id="buttonNine" disabled={this.state.buttonsDisabled}/>
            </tr>
            </tbody>
        </table>
      </div>
    );
  }
  
  handleClick = (event, id) => {
    this.setState(() => {
      return { [id]: { notPressed: false, letter: event.target.innerText }, gameStatus: '**play has commenced**' };
    }, () => {
      const winner = this.checkWinner(this.state);
      if (winner) {
        this.setState((currentState) => {
          return { buttonsDisabled: true, [`${winner}score`]: currentState[`${winner}score`] + 1, gameStatus: `${this.state[winner + 'name']} is the winner` };
        });
      }
    });
  }
  
  handleSubmit = (event, name) => {
    event.preventDefault()
    this.setState(() => {
      return { [name]: false };
    })
  }

  handleTyping = (event, name) => {
    this.setState(() => {
      return { [name]: event.target.value };
    });
  }

  namesHaveBeenEntered = () => {
    this.setState(() => {
      return { gameStatus: '***names have been entered***', buttonsDisabled: false}
    })
  }

  handleReset = () => {
    this.setState(() => {
      return {
        buttonOne: { notPressed: true, letter: '' },
        buttonTwo: { notPressed: true, letter: '' },
        buttonThree: { notPressed: true, letter: '' },
        buttonFour: { notPressed: true, letter: '' },
        buttonFive: { notPressed: true, letter: '' },
        buttonSix: { notPressed: true, letter: '' },
        buttonSeven: { notPressed: true, letter: '' },
        buttonEight: { notPressed: true, letter: '' },
        buttonNine: { notPressed: true, letter: '' },
        gameStatus: 'get ready',
        buttonsDisabled: false
      }
    })
  }

  handleSave = () => {
    localStorage.setItem("gameScore", JSON.stringify(this.state));
  };
  
  handleClearSave = () => {
    localStorage.clear();
    window.location.reload();
  }

  fetchScore = () => {
    const score = JSON.parse(localStorage.getItem("gameScore"))
    this.setState(() => {
      return { ...score };
    });
  }

  checkWinner = ({buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine}) => {
    const XRegex = /x/i
    const ORegex = /o/i
    if (XRegex.test(buttonOne.letter) && XRegex.test(buttonTwo.letter) && XRegex.test(buttonThree.letter)) return 'playerX';
    if (ORegex.test(buttonOne.letter) && ORegex.test(buttonTwo.letter) && ORegex.test(buttonThree.letter)) return 'playerO';
    if (XRegex.test(buttonOne.letter) && XRegex.test(buttonFour.letter) && XRegex.test(buttonSeven.letter)) return 'playerX';
    if (ORegex.test(buttonOne.letter) && ORegex.test(buttonFour.letter) && ORegex.test(buttonSeven.letter)) return 'playerO';
    if (XRegex.test(buttonOne.letter) && XRegex.test(buttonFive.letter) && XRegex.test(buttonNine.letter)) return 'playerX';
    if (ORegex.test(buttonOne.letter) && ORegex.test(buttonFive.letter) && ORegex.test(buttonNine.letter)) return 'playerO';
    if (XRegex.test(buttonSeven.letter) && XRegex.test(buttonFive.letter) && XRegex.test(buttonThree.letter)) return 'playerX';
    if (ORegex.test(buttonSeven.letter) && ORegex.test(buttonFive.letter) && ORegex.test(buttonThree.letter)) return 'playerO';
    if (XRegex.test(buttonSeven.letter) && XRegex.test(buttonEight.letter) && XRegex.test(buttonNine.letter)) return 'playerX';
    if (ORegex.test(buttonSeven.letter) && ORegex.test(buttonEight.letter) && ORegex.test(buttonNine.letter)) return 'playerO';
    if (XRegex.test(buttonThree.letter) && XRegex.test(buttonSix.letter) && XRegex.test(buttonNine.letter)) return 'playerX';
    if (ORegex.test(buttonThree.letter) && ORegex.test(buttonSix.letter) && ORegex.test(buttonNine.letter)) return 'playerO';
    if (XRegex.test(buttonFour.letter) && XRegex.test(buttonFive.letter) && XRegex.test(buttonSix.letter)) return 'playerX';
    if (ORegex.test(buttonFour.letter) && ORegex.test(buttonFive.letter) && ORegex.test(buttonSix.letter)) return 'playerO';
    if (XRegex.test(buttonTwo.letter) && XRegex.test(buttonFive.letter) && XRegex.test(buttonEight.letter)) return 'playerX';
    if (ORegex.test(buttonTwo.letter) && ORegex.test(buttonFive.letter) && ORegex.test(buttonEight.letter)) return 'playerO';
    return null;
  }
}

export default App;