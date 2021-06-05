import React, { Component } from "react";
import Coin from "./Coin";
import headsImg from "./heads.jpg";
import tailsImg from "./tails.jpg";

class CoinGame extends Component {
  static defaultProps = {
    coin: [headsImg, tailsImg],
  };

  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      currSide: null,
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip(e) {
    this.flip();
  }

  flip() {
    let side =
      this.props.coin[Math.floor(Math.random() * this.props.coin.length)];

    this.setState((currState) => {
      let newState = {
        ...currState,
        currSide: side,
        flips: currState.flips + 1,
      };
      if (side.includes("heads")) {
        newState.heads += 1;
      } else {
        newState.tails += 1;
      }
      return newState;
    });
  }

  render() {
    return (
      <div>
        <h1>Flip a coin!</h1>
        <Coin imgSrc={this.state.currSide} />
        <br />
        <button onClick={this.handleFlip}>Flip Me!</button>
        <h2>
          Out of {this.state.flips} coin flips, {this.state.heads} heads and{" "}
          {this.state.tails} tails
        </h2>
      </div>
    );
  }
}

export default CoinGame;
