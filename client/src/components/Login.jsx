import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Google, Facebook } from "react-bootstrap-icons";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { AuthContext } from "../Auth";
import app from "../firebase";
import "firebase/auth";
import Signup from "./Signup";

const Login = ({ history, showLogin, handleClose }) => {
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
    const googleAuthProvider = new app.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(googleAuthProvider);
    history.push("/dashboard");
  };

  const handleFacebookLogin = () => {
    const facebookAuthProvider = new app.auth.FacebookAuthProvider();
    app.auth().signInWithPopup(facebookAuthProvider);
    history.push("/dashboard");
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Modal show={showLogin} onHide={handleClose} backdrop="static">
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row className="justify-content-center">
              <Col sm={6}>
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
                    <Col>
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
                      <Row className="align-items-center">
                        <Button onClick={handleShowSignup}>
                          Create Account
                        </Button>
                        <Signup
                          showSignup={showSignup}
                          handleCloseSignup={handleCloseSignup}
                        ></Signup>
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
