import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Content from "react-addons-css-transition-group";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Session, { SignIn, SignOut } from "./session";
import Navbar from "./navbar";
import Footer from "./footer";
import Welcome from "./welcome";
import Dashboard from "./dashboard";
import { NotFound, Unauthorised } from "./errors";

function App(props) {
  return (
    <div className="app">
      <Navbar />
      <Content
        component="div"
        className="content"
        transitionName="content"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeave={false}
      >
        {React.cloneElement(props.children, { key: props.location.pathname })}
      </Content>
      <Footer />
    </div>
  );
}

function onEnter(nextState, replace) {
  Session.isSignedIn ? replace("/dashboard") : replace("/welcome");
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute onEnter={onEnter} />
      <Route path="welcome" component={Welcome} onEnter={Welcome.onEnter} />
      <Route path="dashboard" component={Dashboard} onEnter={Dashboard.onEnter} />
      <Route path="sign-in" component={SignIn} onEnter={SignIn.onEnter} />
      <Route path="sign-out" component={SignOut} onEnter={SignOut.onEnter} />
      <Route path="unauthorised" component={Unauthorised} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById("react"));
