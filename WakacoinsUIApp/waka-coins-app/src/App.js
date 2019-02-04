import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Invest from './Pages/Invest.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="banner"></div>
        <div className="ui secondary menu">
          <a className="item" href="/">
          </a>
          <a className="item" href="/dapp/Invest">
            Invest
          </a>
        </div>
        <Router>
          <div>
           <Route exact path="/" component={Invest} />
            <Route path="/dapp/invest" component={Invest} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App