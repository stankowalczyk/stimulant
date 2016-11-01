import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Autheus } from "autheus";
import { SignIn, SignOut } from "./session";
import Navbar from "./navbar";
import Dashboard from "./dashboard";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        {Autheus.isSignedIn && <Navbar />}
        {this.props.children}
      </div>
    );
  }
}

let [requireSignIn, requireSignOut] = Autheus.getReactRouterHooks("/sign-in", "/sign-out");

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={requireSignIn} />
      <Route path="sign-in" component={SignIn} onEnter={requireSignOut} />
      <Route path="sign-out" component={SignOut} onEnter={requireSignIn} />
    </Route>
  </Router>
), document.getElementById("react"));
