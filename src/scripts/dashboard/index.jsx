import React from "react";
import { PageHeader, Grid } from "react-bootstrap";
import Session from "../session";
import env from "../environment";

export default class extends React.Component {
  static onEnter(nextState, replace) {
    if (!Session.isSignedIn) replace("/sign-in");
  }

  render() {
    return (
      <Grid>
        <PageHeader>Dashboard</PageHeader>
        <p className="lead">Welcome!</p>
        <pre>Environment = {JSON.stringify(env)}</pre>
      </Grid>
    );
  }
}
