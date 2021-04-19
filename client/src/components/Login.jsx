import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Google, Facebook } from "react-bootstrap-icons";
import { Form, Button, Container, Col, Modal } from "react-bootstrap";
import { AuthContext } from "../Auth";
import app from "../firebase";
import "firebase/auth";

const Login = ({ history, showLogin, handleCloseLogin, handleShowSignup }) => {
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
    <>
      <Modal show={showLogin} onHide={handleCloseLogin} backdrop="static">
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form onSubmit={handleLogin}>
              <Form.Row className="justify-content-center">
                <Col sm={6}>
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
                  <Form.Row className="justify-content-center">
                    <Col>
                      <Form.Row className="justify-content-center">
                        <Button
                          variant="primary"
                          type="submit"
                          className="w-100"
                        >
                          Login
                        </Button>
                      </Form.Row>
                      <br></br>
                      <Form.Row className="align-items-center">
                        <Button
                          onClick={handleFacebookLogin}
                          className="w-100 align-items-center"
                        >
                          <Facebook></Facebook> Continue with Facebook
                        </Button>
                      </Form.Row>
                      <br></br>
                      <Form.Row className="justify-content-center">
                        <Button onClick={handleGoogleLogin} className="w-100">
                          <Google></Google> Sign in with Google
                        </Button>
                      </Form.Row>
                      <br />
                      <Form.Row className="align-items-center">
                        <Button
                          onClick={() => {
                            handleShowSignup();
                            handleCloseLogin();
                          }}
                        >
                          Create Account
                        </Button>
                      </Form.Row>
                    </Col>
                  </Form.Row>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withRouter(Login);
