import React from "react";
import { PageHeader, Grid } from "react-bootstrap";
import env from "../environment";

export default function(props) {
  return (
    <Grid>
      <PageHeader>Dashboard</PageHeader>
      <p className="lead">Welcome!</p>
      <pre>Environment = {JSON.stringify(env)}</pre>
    </Grid>
  );
}
