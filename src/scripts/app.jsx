import "babelify/polyfill";
import React from "react";
import Router, {Route, RouteHandler, DefaultRoute} from "react-router";
import {SESSION} from "./session";
import {SignIn} from "./session/sign-in";
import {SignOut} from "./session/sign-out";
import {Dashboard} from "./dashboard";
import {Navbar} from "./navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        {SESSION.authToken && <Navbar />}
        <RouteHandler />
      </div>
    );
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="sign-in" handler={SignIn} />
    <Route name="sign-out" handler={SignOut} />
    <DefaultRoute handler={Dashboard} />
  </Route>
);

// Render the app!
Router.run(routes, Handler => React.render(<Handler />, document.getElementById("app")));
