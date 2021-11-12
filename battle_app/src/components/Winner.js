import React, { Component } from "react";
import { Battle } from "../static/utils/api";
export default class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, winner: null, loser: null, error: null };
  }
  componentDidMount() {
    const { playerOne, playerTwo } = this.props;
    Battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch((message) => {
        this.setState({
          error: message,
          loading: true,
        });
      });
  }
  render() {
    return <div className="grid container">
        <div className="card centerTest">
            {this.state.winner.score}

        </div>
    </div>;
  }
}
