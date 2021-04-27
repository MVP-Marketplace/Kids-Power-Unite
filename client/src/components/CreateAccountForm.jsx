import React, { useCallback, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import KpuLogo from "../Images/kpu-logo.png";
import HonorCode from "./HonorCode";
import app from "../firebase";

const CreateAccountForm = ({ history }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const {
      credentials,
      occupation,
      employer,
      employerStreet,
      employerSuite,
      employerCity,
      employerState,
      employerZip,
      deliveryStreet,
      deliverySuite,
      deliveryCity,
      deliveryState,
      deliveryZip,
    } = event.target.elements;
    try {
      await app
        .firestore()
        .collection("professional")
        .doc(app.auth().currentUser.uid)
        .update({
          employerInfo: {
            credentials: credentials.value,
            occupation: occupation.value,
            employer: employer.value,
            street: employerStreet.value,
            suite: employerSuite.value,
            city: employerCity.value,
            state: employerState.value,
            zip: employerZip.value,
          },
          deliveryAddress: {
            street: deliveryStreet.value,
            suite: deliverySuite.value,
            city: deliveryCity.value,
            state: deliveryState.value,
            zip: deliveryZip.value,
          },
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
              <h1>Guardian Advocate Information</h1>
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Row className="justify-content-center">
                <Col xs={'auto'} sm={'auto'} md={'auto'} className="text-left">
                  <Form.Group controlId="occupation">
                    <Form.Label>*Job Title</Form.Label>
                    <Form.Control name="occupation" placeholder="Title" />
                  </Form.Group>
                  <Form.Group controlId="credentials">
                    <Form.Label>Credentials</Form.Label>
                    <Form.Control name="credentials" placeholder="MD" />
                  </Form.Group>
                  <Form.Group controlId="employer">
                    <Form.Label>*Employer Name</Form.Label>
                    <Form.Control
                      name="employer"
                      placeholder="Enter employer"
                    />
                  </Form.Group>
                  <Form.Group controlId="street">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                      name="employerStreet"
                      placeholder="123 Fake st"
                    />
                  </Form.Group>
                  <Form.Group controlId="suite">
                    <Form.Label>Suite #</Form.Label>
                    <Form.Control name="employerSuite" placeholder="Suite" />
                  </Form.Group>
                  <Form.Group controlId="city">
                    <Form.Label>*City</Form.Label>
                    <Form.Control
                      name="employerCity"
                      placeholder="Enter City"
                    />
                  </Form.Group>
                  <Form.Group controlId="state">
                    <Form.Label>*State</Form.Label>
                    <Form.Control
                      name="employerState"
                      placeholder="Enter State"
                    />
                  </Form.Group>
                  <Form.Group controlId="zip">
                    <Form.Label>*Zip code</Form.Label>
                    <Form.Control name="employerZip" placeholder="ZIP" />
                  </Form.Group>
                  <hr />
                  <h3>Advocate Address for Gift Delivery</h3>
                  <p>This Information will be kept Private.</p>
                  <Form.Group controlId="street">
                    <Form.Label>*Street Address</Form.Label>
                    <Form.Control
                      name="deliveryStreet"
                      placeholder="123 Fake st"
                    />
                  </Form.Group>
                  <Form.Group controlId="suite">
                    <Form.Label>Suite #</Form.Label>
                    <Form.Control name="deliverySuite" placeholder="Suite" />
                  </Form.Group>
                  <Form.Group controlId="city">
                    <Form.Label>*City</Form.Label>
                    <Form.Control
                      name="deliveryCity"
                      placeholder="Enter City"
                    />
                  </Form.Group>
                  <Form.Row className="justify-content-between">
                    <Form.Group controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        name="deliveryState"
                        placeholder="Enter State"
                      />
                    </Form.Group>
                    <Form.Group controlId="zip">
                      <Form.Label>Zip code</Form.Label>
                      <Form.Control name="deliveryZip" placeholder="123456" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className=' text-center'>
                    <Col>
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#FF5308" }}
                    >
                      Create Account
                    </Button>
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
                    </Col>
                  </Form.Row>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
        <HonorCode show={show} handleClose={handleClose} />
      </Container>
    </>
  );
};

export default CreateAccountForm;
