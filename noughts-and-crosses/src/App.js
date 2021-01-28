import './App.css';
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Noughts and Crosses</h1>
      </div>
    );
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