import React from "react";
import {Grid} from "react-bootstrap";
import {hashHistory} from "react-router";
import {Autheus} from "autheus";

export class SignOut extends React.Component {
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
      Autheus.signOut();
      hashHistory.push("/");
    }, 2000);
  }
}
