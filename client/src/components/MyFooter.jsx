import React from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";

const handleNewsletterSignup = () => {
  return true;
};

function MyFooter() {
  return (
    <>
      <Container fluid>
        <Row className="align-items-center bg-primary p-3">
          <Col sm={4} className="text-right text-light">
            <div>Subscribe to our newsletter</div>
          </Col>
          <Col sm={6} className="align-items-center">
            <Form>
              <Form.Control type="email" placeholder="Enter email" />
            </Form>
          </Col>
          <Col sm={2}>
            <Button className="btn-success" onClick={handleNewsletterSignup}>
              Subscribe
            </Button>
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            <h3>KidPower Unites</h3>
            <p>© 2021</p>
            <a href="#">Privacy -- Terms</a>
            <br></br>
            <Row>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </Row>
          </Col>
          <Col>
            <b>About</b>
            <br></br>
            <a href="#">About Us</a>
            <br></br>
            <a href="#">Mission</a>
            <br></br>
            <a href="#">Success Stories</a>
          </Col>
          <Col>
            <b>Get Involved</b>
            <br></br>
            <a href="#">Donate</a>
            <br></br>
            <a href="#">Refer a Child</a>
            <br></br>
            <a href="#">FAQ</a>
          </Col>
          <Col>
            <b>Resources</b>
            <br></br>
            <a href="#">Book List</a>
            <br></br>
            <a href="#">Kid Entrepreneurs</a>
            <br></br>
            <a href="#">Wishlist</a>
          </Col>
          <Col>
            <b>Contact Us</b>
            <br></br>
            <a href="#">Contact</a>
          </Col>
          <Col>
            <Button variant="primary">Donate</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyFooter;
