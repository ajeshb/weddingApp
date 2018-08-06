import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home/HomeComponent";
import { Login } from "./Login/LoginComponent";
import { Messages } from "./Messages/MessageComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routeParams => <Home />} />
          <Route exact path="/login" render={routeParams => <Login />} />
          <Route exact path="/messages" render={routeParams => <Messages />} />
        </Switch>
      </div>
    );
  }
}

export default App;
