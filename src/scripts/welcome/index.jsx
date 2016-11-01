import React from "react";
import { Grid, Jumbotron, Button } from "react-bootstrap";
import Session from "../session";

export default class extends React.Component {
  static onEnter(nextState, replace) {
    if (Session.isSignedIn) replace("/not-found");
  }

  render() {
    return (
      <Grid>
        <Jumbotron className="text-center">
          <h1>Welcome</h1>
          <p>To get started, please sign in!</p>
          <Button bsStyle="success" bsSize="large" href="#/sign-in">
            <i className="fa fa-sign-in" /> Sign In
          </Button>
        </Jumbotron>
      </Grid>
    );
  }
}
