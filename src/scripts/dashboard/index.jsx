import React from "react";
import {PageHeader, Grid} from "react-bootstrap";
import {ENV} from "../environment";
import {isSignedIn} from "../session";

@isSignedIn
export class Dashboard extends React.Component {
  render() {
    return (
      <Grid fluid>
        <PageHeader>Dashboard</PageHeader>
        <p className="lead">Welcome!</p>
        <pre>Environment = {JSON.stringify(ENV)}</pre>
      </Grid>
    );
  }
}
