import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Google, Facebook } from "react-bootstrap-icons";
import { Form, Button, Container, Col, Card, Row } from "react-bootstrap";
import { AuthContext } from "../Auth";
import KpuLogo from "../Images/kpu-logo.png";
import app from "../firebase";
import firebase from "firebase/app";
import "firebase/auth";

const Login = ({ history }) => {
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
    history.push("/dashboard");
  };

  const handleFacebookLogin = () => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    app.auth().signInWithPopup(facebookAuthProvider);
    history.push("/dashboard");
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Container fluid style={{ marginTop: "80px" }}>
        <Card className="text-center">
          <Row className="justify-content-center">
            <Card.Img
              src={KpuLogo}
              style={{ height: "200px", width: "250px" }}
              className="justify-self-center"
            />
          </Row>
          <Card.Body>
            <Card.Title>
              <h1>Sign In</h1>
            </Card.Title>
            <p>
              Don't Have An Account? <Link to="/signup">Create Account</Link>
            </p>
            <br />
            <br />
            <Form onSubmit={handleLogin}>
              <Form.Row className="justify-content-center">
                <Col xs={"auto"} sm={3} className="text-left">
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <br />
              <br />
              <Form.Row className="justify-content-center">
                <Col xs={'auto'} sm={'auto'}>
                  <Form.Row className="justify-content-center">
                    <Button
                      style={{ backgroundColor: "#FF5308", padding:'10px', fontSize:'20px' }}
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
                  <Form.Row className="align-items-center"></Form.Row>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default withRouter(Login);
