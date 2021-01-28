import './App.css';
import React from "react";
import XOButton from './Components.js/XOButton'
import PlayerNames from './Components.js/PlayerNames'

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
    gameStatus: 'please enter your names'
  }
  render () {
    return (
      <div className="App">
        <h1>Noughts and Crosses</h1>
        <h2>
          <PlayerNames xNeedsName={this.state.playerX} oNeedsName={this.state.playerO} handleSubmit={this.handleSubmit} handleTyping={this.handleTyping} namesHaveBeenEntered={this.namesHaveBeenEntered}></PlayerNames>
        </h2>
        <h3>
          <p>Player X: {this.state.playerXname}</p>
          <p>Player O: {this.state.playerOname}</p>
        </h3>
        <h2>
          Game status: {this.state.gameStatus}
        </h2>
        <h2>
          The score will be displayed here
        </h2>
        <h2>
          Along with a button to reset the scores
        </h2>
        <table className="gameBoard">
          <tbody>
          <tr>
          <th colSpan="3">Game Board</th>
          </tr>
         <tr>
              <XOButton buttonInfo={this.state.buttonOne} handleClick={this.handleClick} id="buttonOne"/>
              <XOButton buttonInfo={this.state.buttonTwo} handleClick={this.handleClick} id="buttonTwo"/>
              <XOButton buttonInfo={this.state.buttonThree} handleClick={this.handleClick} id="buttonThree"/>
          </tr>
          <tr>
              <XOButton buttonInfo={this.state.buttonFour} handleClick={this.handleClick} id="buttonFour"/>
              <XOButton buttonInfo={this.state.buttonFive} handleClick={this.handleClick} id="buttonFive"/>
              <XOButton buttonInfo={this.state.buttonSix} handleClick={this.handleClick} id="buttonSix"/>
          </tr>
          <tr>
              <XOButton buttonInfo={this.state.buttonSeven} handleClick={this.handleClick} id="buttonSeven"/>
              <XOButton buttonInfo={this.state.buttonEight} handleClick={this.handleClick} id="buttonEight"/>
              <XOButton buttonInfo={this.state.buttonNine} handleClick={this.handleClick} id="buttonNine"/>
            </tr>
            </tbody>
        </table>
      </div>
    );
  }
  handleClick = (event, id) => {
    this.setState(() => {
      return { [id]: { notPressed: false, letter: event.target.innerText } };
    });
  }
  handleSubmit = (event, name) => {
    event.preventDefault()
    this.setState(currentState => {
      return { [name]: false };
    })
  }
  handleTyping = (event, name) => {
    this.setState(currentState => {
      return { [name]: event.target.value };
    });
  }
  namesHaveBeenEntered = (event) => {
    this.setState(() => {
      return { gameStatus: '***names have been entered***'}
    })
  }
}

export default App;