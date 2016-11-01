import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Content from "react-addons-css-transition-group";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Autheus } from "autheus";
import { SignIn, SignOut } from "./session";
import Navbar from "./navbar";
import Footer from "./footer";
import Dashboard from "./dashboard";

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
