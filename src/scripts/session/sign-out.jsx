import React from "react";
import { Grid } from "react-bootstrap";
import { hashHistory } from "react-router";
import Session from "../session";

export default class extends React.Component {
  render() {
    return (
      <Grid>
        <p className="lead text-center" style={{ margin: "30px" }}>
          <i className="fa fa-cog fa-spin"></i> Signing out&hellip;
        </p>
      </Grid>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      Session.signOut();
      hashHistory.push("/");
    }, 2000);
  }
}
