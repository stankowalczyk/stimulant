import React from "react";
import {Grid} from "react-bootstrap";
import {SESSION, isSignedIn} from "./";

@isSignedIn
export class SignOut extends React.Component {
  static contextTypes = { router: React.PropTypes.func }

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
    // TODO: Send sign-out request to API.
    setTimeout(() => {
      SESSION.authToken = null;
      this.context.router.transitionTo("app");
    }, 2000);
  }
}
