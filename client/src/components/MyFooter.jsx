import React from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";
import officiallogo from "../Images/officiallogo.png";
import { Twitter, Facebook, Instagram } from "react-bootstrap-icons";

const handleNewsletterSignup = () => {
  return true;
};

function MyFooter() {
  return (
    <>
      <Container fluid>
        <Row className="align-items-end bg-warning pt-5 pb-5">
          <Col sm={4} className="newsletter-signup text-right">
            <div>Sign up for our newsletter</div>
          </Col>
          <Col sm={6} className="align-items-center">
            <Form>
              <Form.Label className="email-newsletter">
                Email Address
              </Form.Label>
              <Form.Control
                className="newsletter-filler"
                type="email"
                placeholder="forever_upwards@gmail.com"
              />
            </Form>
          </Col>
          <Col sm={2}>
            <Button className="btn-primary" onClick={handleNewsletterSignup}>
              Sign Up
            </Button>
          </Col>
        </Row>
        <Row className="p-3 bg-primary">
          <Col>
            <img
              src={officiallogo}
              width="200"
              className="d-inline-block align-top"
              alt="Official Logo"
            />
          </Col>
          <Col>
            <Row className="mb-4">
              <b className="footer-bold text-white">Get Involved</b>
            </Row>
            <Row className="mb-4">
              <a className="text-white footer-links" href="#">
                Donate
              </a>
            </Row>
            <Row className="mb-4">
              <a className="text-white footer-links" href="#">
                Refer a Child
              </a>
            </Row>
            <Row>
              <p className="text-white copyright">© 2021 Kid Power Unites</p>
            </Row>
          </Col>
          <Col>
            <Row>
              <Button variant="primary">Donate</Button>
            </Row>
            <Row className="mt-3">
              <a href="#">
                <Twitter className="m-2" style={{ color: "white" }}></Twitter>
              </a>

              <a href="#">
                <Facebook className="m-2" style={{ color: "white" }}></Facebook>
              </a>

              <a href="#">
                <Instagram
                  className="m-2"
                  style={{ color: "white" }}
                ></Instagram>
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyFooter;
