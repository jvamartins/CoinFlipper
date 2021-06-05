import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return <img className="Coin" alt="img" src={this.props.imgSrc} />;
  }
}

export default Coin;
