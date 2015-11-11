import React from "react";
import {Grid} from "react-bootstrap";
import {SESSION} from "./";

export class SignOut extends React.Component {
  static contextTypes = { history: React.PropTypes.object }

  render() {
    return (
      <Grid fluid>
        <p className="lead text-center" style={{margin: 30 + "px"}}>
          <i className="fa fa-cog fa-spin"></i> Signing out&hellip;
        </p>
      </Grid>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      SESSION.authToken = null;
      this.context.history.pushState(null, "/");
    }, 2000);
  }
}
