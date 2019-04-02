import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from "./Players";


class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            scoreCount:0,
        }
    }

    // function to add 1 point //
    score1point = (e) =>{
        this.setState(
            {
                scoreCount:this.state.scoreCount +1
    }
        )
    };

    // function to add  points //
    score5point = (e) =>{
        this.setState(
            {
                scoreCount:this.state.scoreCount +5
            }
        )
    };

    // function to add 10 points //
    score10point = (e) =>{
        this.setState(
            {
                scoreCount:this.state.scoreCount +10
            }
        )
    };


  render() {
    return (
      <div className="App">
        <header className="App-header\]-04">
            {/*my code for the score point buttons */}
            <button onClick={this.score1point}>1pts</button>
            <button onClick={this.score5point}>5pts</button>
            <button onClick={this.score10point}>10pts</button>
            <Players playerNumber={1} />
            <Players playerNumber={2} />
            <Players playerNumber={3} />


        </header>
      </div>
    );
  }
}

export default App;
