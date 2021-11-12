import React, { Component } from "react";
import InstructionList from "../components/InstructionList";
import Input from "../components/Input";
import Preview from "../components/Preview";
import "../static/css/input.css";
import Winner from "../components/Winner";
export default class BattlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false,
    };
  }

  onSubmit = (id, username) => {
    this.setState({ [id]: username });
  };

  onReset = (id) => {
    this.setState({ [id]: null });
  };

  handleBattle=()=>{
    this.setState({ battle: true });
  }

  render() {

    if(this.state.battle){
      return (<Winner playerOne={this.state.playerOne} playerTwo={this.state.playerTwo}/>)
    }
    return (
      <React.Fragment>
        <InstructionList />
        <div className="player">
          <h1 className="centerText header">Players</h1>
          <div className="row-player">
            {this.state.playerOne === null ? (
              <Input
                label="Player One"
                id="playerOne"
                onSubmit={this.onSubmit}
              />
            ) : (
              <Preview
                username={this.state.playerOne}
                label="Player One"
                onReset={() => this.onReset("playerOne")}
              />
            )}

            {this.state.playerTwo === null ? (
              <Input
                label="Player Two"
                id="playerTwo"
                onSubmit={this.onSubmit}
              />
            ) : (
              <Preview
                username={this.state.playerTwo}
                label="Player Two"
                onReset={() => this.onReset("playerTwo")}
              />
            )}
          </div>

          { this.state.playerOne && this.state.playerTwo && (
            <button className="dark-btn btn btn-space" onClick={this.handleBattle}>Battle</button>
          )}


        </div>
      </React.Fragment>
    );
  }
}
