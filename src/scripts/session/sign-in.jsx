import React from "react";
import { Grid, Row, Col, PageHeader, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { hashHistory } from "react-router";
import Session from "../session";

export default class extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={4} sm={2} />

          <Col md={4} sm={8} xs={12}>
            <PageHeader>Sign In</PageHeader>

            <p className="lead">Enter your credentials below to sign in.</p>

            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" required />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" required />
              </FormGroup>

              <Button bsStyle="primary" type="submit">
                <i className="fa fa-sign-in"></i> Sign In
              </Button>
            </form>
          </Col>

          <Col md={4} sm={2} />
        </Row>
      </Grid>
    );
  }

  handleFormSubmit(event) {
    event.preventDefault(); // Don't follow form submission.

    Session.signIn("fake-auth-token");
    hashHistory.push("/");
  }
}
