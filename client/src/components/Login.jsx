import React, { useContext, useCallback, useState } from "react";
import app from "../firebase";
import { Google, Facebook } from "react-bootstrap-icons";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Auth";
import firebase from "firebase/app";
import "firebase/auth";
import Signup from "./Signup";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";

const Login = ({ history, show, handleClose }) => {
  const [showSignup, setShowSignup] = useState(false);
  
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
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

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Dashboard" />;
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row className="justify-content-center">
              <Col sm={4}>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Row className="justify-content-center">
                    <Col sm={6}>
                      <Row className="justify-content-center">
                        <Button
                          variant="primary"
                          type="submit"
                          className="w-100"
                        >
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
                      <br />
                      <Row>
                        <Button onClick={handleShowSignup}>Create Account</Button>
                        <Signup showSignup={showSignup} handleCloseSignup={handleCloseSignup}>
                          Create Account
                        </Signup>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Login);
