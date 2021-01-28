import './App.css';
import React from "react";
import XOButton from './Components.js/XOButton'

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
    buttonNine: { notPressed: true, letter: '' }
  }
  render() {
    return (
      <div className="App">
        <h1>Noughts and Crosses</h1>
        <h2>
          Player name inputs will go here
        </h2>
        <h2>
          Player names will be displayed here
        </h2>
        <h2>
          Game status will be displayed here
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
}

export default App;


/*
Planning section

This app will display a 3 by 3 grid somehow (need to investigate). possibly use a table with empty headers
https://www.w3schools.com/html/html_tables.asp
Each box will have a nought and cross button
clicking the button will make that choice appear in the box on the grid
Need to somehow check if there are 3 in a row. If so, something will indicate that you won.
Add an extra button to play again.

Advanced features will be:
player names input
a score counter by each player
reset scores button
*/

/*
App -
contains a title - n & cs
player names inputs & button (adv)
list of players(adv)

Step 1:
table 3x3
each <td> tag has a XO component
the XO components have buttons to click
  clicking the button either assigns an X or O as a value
  clicking the button also removes both buttons, so you can't change your answer
 
Step 2:
Add something that fires whenever the button is pressed. It checks is certain combinations of buttons have the right values, then changes the game status from in progress to winner is X or O.

Step 3:
Add the usernames input and display.
Links each person to X or O.
Links the game status winning message to the user
*/