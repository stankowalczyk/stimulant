import React from "react";
import { Grid, Jumbotron } from "react-bootstrap";

export default function(props) {
  return (
    <Grid>
      <Jumbotron className="text-center">
        <h1>Not Found</h1>
        <p>The page you were looking for does not exist.</p>
        <p>You may have mistyped the address or the page may have moved.</p>
      </Jumbotron>
    </Grid>
  );
}
