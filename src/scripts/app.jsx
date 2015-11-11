import "babelify/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from "react-router";
import {Session} from "./session";
import {SignIn} from "./session/sign-in";
import {SignOut} from "./session/sign-out";
import {Dashboard} from "./dashboard";
import {Navbar} from "./navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        {Session.isSignedIn && <Navbar />}
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={Session.requireSignIn} />
      <Route path="sign-in" component={SignIn} onEnter={Session.requireSignOut} />
      <Route path="sign-out" component={SignOut} onEnter={Session.requireSignIn} />
    </Route>
  </Router>
), document.getElementById("app"));
