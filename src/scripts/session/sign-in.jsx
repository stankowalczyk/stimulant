import React from "react";
import {Grid, Row, Col, PageHeader, Button, Input, Alert} from "react-bootstrap";
import {hashHistory} from "react-router";
import {Autheus} from "autheus";

export class SignIn extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={4} sm={2} />

          <Col md={4} sm={8} xs={12}>
            <PageHeader>Sign In</PageHeader>

            <p className="lead">Enter your credentials below to sign in.</p>

            <Alert bsStyle="info">
              For now, any credentials will work. <i className="fa fa-smile-o"></i>
            </Alert>

            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <Input placeholder="Password" type="password" ref="password" required />
              <Button bsStyle="success" type="submit"><i className="fa fa-sign-in"></i> Sign In</Button>
            </form>
          </Col>

          <Col md={4} sm={2} />
        </Row>
      </Grid>
    );
  }

  handleFormSubmit(event) {
    event.preventDefault(); // Don't follow form submission.

    Autheus.signIn("fake-auth-token");
    hashHistory.push("/");
  }
}
