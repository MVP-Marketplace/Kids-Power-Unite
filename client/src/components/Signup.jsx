import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import KpuLogo from "../Images/kpu-logo.png";
import HonorCode from "./HonorCode";
import { Google, Facebook } from "react-bootstrap-icons";
import firebase from "firebase/app";
import app from "../firebase";

const Signup = ({ history }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          app
            .firestore()
            .collection("professional")
            .doc(app.auth().currentUser.uid)
            .set({
              name: name.value,
            });
        })
        .then(() => {
          history.push("/create-account");
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleGoogleLogin = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(googleAuthProvider);
    history.push("/create-account");
  };

  const handleFacebookLogin = () => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    app.auth().signInWithPopup(facebookAuthProvider);
    history.push("/create-account");
  };

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
              <h1>Create Account</h1>
            </Card.Title>
            <p>
              Already Have An Account? <Link to="/login">Sign In</Link>
            </p>

            <Form onSubmit={handleSignUp}>
              <Form.Row className="justify-content-center">
                <Col xs={"auto"} sm={"auto"} className="text-left">
                  <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" placeholder="Enter Full Name" />
                  </Form.Group>
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
                      placeholder="Enter Password"
                    />
                    <p style={{ fontSize: "10px" }}>
                      By creating an account, you agree to KidPower Unites'{" "}
                      <Button
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0",
                          font: "inherit",
                          textDecoration: "underline",
                          color: "blue",
                          cursor: "pointer",
                        }}
                        onClick={handleShow}
                      >
                        Honor Code
                      </Button>
                    </p>
                  </Form.Group>
                  <Form.Row className="justify-content-center">
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#FF5308",
                        padding: "10px 50px",
                        fontSize: "20px",
                      }}
                    >
                      Sign Up
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
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
        <HonorCode handleClose={handleClose} show={show} />
      </Container>
    </>
  );
};

export default withRouter(Signup);
