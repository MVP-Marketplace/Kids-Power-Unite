import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import KpuLogo from "../Images/kpu-logo.png";
import app from "../firebase";

const Signup = ({ history }) => {
  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const {
      email,
      password,
      credentials,
      first,
      last,
      occupation,
      employer,
      street,
      suite,
      city,
      state,
      zip,
    } = event.target.elements;
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
              name: {
                credentials: credentials.value,
                first: first.value,
                last: last.value,
              },
              occupation: occupation.value,
              employer: employer.value,
              address: {
                street: street.value,
                suite: suite.value,
                city: city.value,
                state: state.value,
                zip: zip.value,
              },
            });
        })
        .then(() => {
          history.push("/dashboard");
        });
    } catch (error) {
      alert(error);
    }
  }, []);

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
            <Container fluid>
              <Form onSubmit={handleSignUp}>
                <Form.Row className="justify-content-center">
                  <Col sm={6}>
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
                    <Form.Group controlId="credentials">
                      <Form.Label>Credentials</Form.Label>
                      <Form.Control name="credentials" placeholder="MD" />
                    </Form.Group>
                    <Form.Group controlId="first">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control name="first" placeholder="John" />
                    </Form.Group>
                    <Form.Group controlId="last">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control name="last" placeholder="Smith" />
                    </Form.Group>
                    <Form.Group controlId="occupation">
                      <Form.Label>Occupation</Form.Label>
                      <Form.Control
                        name="occupation"
                        placeholder="Occupation"
                      />
                    </Form.Group>
                    <Form.Group controlId="employer">
                      <Form.Label>Employer</Form.Label>
                      <Form.Control
                        name="employer"
                        placeholder="Enter employer"
                      />
                    </Form.Group>
                    <Form.Group controlId="street">
                      <Form.Label>Street Address</Form.Label>
                      <Form.Control name="street" placeholder="123 Fake st" />
                    </Form.Group>
                    <Form.Group controlId="suite">
                      <Form.Label>Suite #</Form.Label>
                      <Form.Control name="suite" placeholder="Suite" />
                    </Form.Group>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control name="city" placeholder="Enter City" />
                    </Form.Group>
                    <Form.Group controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Control name="state" placeholder="Enter State" />
                    </Form.Group>
                    <Form.Group controlId="zip">
                      <Form.Label>Zip code</Form.Label>
                      <Form.Control name="zip" placeholder="123456" />
                    </Form.Group>
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#FF5308" }}
                    >
                      Sign Up
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default withRouter(Signup);
