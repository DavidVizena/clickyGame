// imports React and its components, the stylesheet (App.css), and the app components
import React, { Component } from "react";
import "./css/App.css";
import Header from "./Header.js";
import Grid from "./Grid.js";
import Footer from "./Footer.js";
import dp from "./dp";

// function to shuffle array of objects
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// creates a new class, App which extends the React Component
class App extends Component {
  // stores the score and dp options in the state of App
  state = {
    score: 0,
    dp
  };

  // function to update score state
  scoreUpdate = (id, clicked) => {
    const dpArray = this.state.dp;

    if (!clicked) {
      this.setState({ dp: dpArray });
      dpArray.forEach(dp => {
        if (dp.key === id && dp.clicked === false) {
          dp.clicked = true;
          this.setState({ dp: dpArray, score: this.state.score + 1 });
        }
      });
    } else if (clicked) {
      dpArray.forEach(dp => {
        dp.clicked = false;
      });
      this.setState({ dp: dpArray, score: 0 });
    }
  };

  // renders data to the page (ultimately through index.js)
  render() {
    const shuffledArray = shuffleArray(this.state.dp);
    return (
      <div className="App">
        <Header score={this.state.score} />

        <div className="grid">
          {shuffledArray.map(dp => (
            <Grid
              name={dp.name}
              clicked={dp.clicked}
              imgUrl={dp.imgUrl}
              scoreUpdate={this.scoreUpdate}
              key={dp.key}
              id={dp.key}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

// exports App for external use
export default App;
