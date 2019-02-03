import React, { Component } from "react";
//import web3 from "../web3";
//import WakaCoins from "../smartContract/WakaCoins";


import { Button, Progress } from 'semantic-ui-react'

export default class ProgressExampleIndicating extends Component {
  state = { percent: 0 }

  invest = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.invest}>Invest</Button>
      </div>
    )
  }
}
