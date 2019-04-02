import React, { Component } from 'react';


class Players extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            scoreCount:0,
        }
    }

    buttonClicker = (e) => {
        this.setState(
            {
            scoreCount:this.state.scoreCount +1
        })
    };
    render(){
        return(
            <div>
                {/* player, score label*/}
                <h1>Player:{this.props.playerNumber}</h1>
                <h1>Score:{this.state.scoreCount}</h1>
                <button onClick={this.buttonClicker}>1pts</button>`
            </div>
        );
    }
}

export default Players;