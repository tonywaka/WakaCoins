import React, { Component } from "react";
import web3 from "../web3";
import WakaCoins from "../smartContract/WakaCoins";

export default class Invest extends Component {
  constructor(props) {
    super(props);
    this.invest = this.invest.bind(this);
    this.numberOfTokensOnChanged = this.numberOfTokensOnChanged.bind(this);
    this.state = {
      userWalletAddress: "",
    
    };
  }

  componentDidMount() {
    this.getUserWalletAddress();
  }

  getUserWalletAddress() {
    web3.eth.getAccounts().then(accounts => {
      if (accounts.length !== 0) {
        this.setState({
          userWalletAddress: accounts[0]
        });
      }
    });
  }

  numberOfTokensOnChanged(e) {
    let numberOfTokens = e.currentTarget.value;
    this.setState({
        numberOfTokens: numberOfTokens
    });
  }

  invest() {
    WakaCoins.methods
      .invest(this.state.numberOfTokens)
      .send({
        from: this.state.userWalletAddress
      })
      .then(result => {
        console.log(result);
      });
  }

  render() {
    return (
      <div>
        <div className="ui segment invest">
             <form className="ui form invest">
            <div className="ui field">          
            </div>
            <div className="ui field">
              <input
                type="text"
                name="myTokens"
                placeholder="Number of tokens"
                onChange={this.numberOfTokensOnChanged}
              />
            </div>
            <div className="ui field">
              <button
                className="ui primary basic button"
                type="button"
                onClick={this.invest}
              >
                Invest
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
