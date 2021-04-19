import React from "react";
import { Button, Form } from "react-bootstrap";

const Address = ({ navigation }) => {
  const { previous } = navigation;
  return (
    <>
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
      <Form.Row className="justify-content-between">
        <Button onClick={previous}>Previous</Button>
        <Button variant="danger" type="submit">
          Sign Up
        </Button>
      </Form.Row>
    </>
  );
};

export default Address;
