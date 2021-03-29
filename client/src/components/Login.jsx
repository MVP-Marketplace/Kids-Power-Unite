import React, { useContext, useCallback } from "react";
import { Google, Facebook } from "react-bootstrap-icons";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { AuthContext } from "../Auth";
import firebase from "firebase/app";
import "firebase/auth";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const handleGoogleLogin = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(googleAuthProvider);
  };

  const handleFacebookLogin = () => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    app.auth().signInWithPopup(facebookAuthProvider);
  };
    const handleFacebookLogin = () =>{
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        app.auth().signInWithPopup(facebookAuthProvider);
    };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col sm={4}>
            <h1>Log in</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Row className="justify-content-center">
                <Col sm={6}>
                  <Row className="justify-content-center">
                    <Button variant="primary" type="submit" className="w-100">
                      Login
                    </Button>
                  </Row>
                  <br></br>
                  <Row className="align-items-center">
                    <Button
                      onClick={handleFacebookLogin}
                      className="w-100 align-items-center"
                    >
                      <Facebook></Facebook> Continue with Facebook
                    </Button>
                  </Row>
                  <br></br>
                  <Row className="justify-content-center">
                    <Button onClick={handleGoogleLogin} className="w-100">
                      <Google></Google> Sign in with Google
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default withRouter(Login);
