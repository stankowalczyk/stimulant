import React from "react";
import { Grid, Jumbotron } from "react-bootstrap";

export default function(props) {
  return (
    <Grid>
      <Jumbotron className="text-center">
        <h1>Unauthorised</h1>
        <p>The page you were looking for is forbidden.</p>
      </Jumbotron>
    </Grid>
  );
}
