import React from "react";
import { Button, Form } from "react-bootstrap";

const Name = ({ navigation }) => {
  const { next, previous } = navigation;
  return (
    <>
      <Form.Group controlId="credentials">
        <Form.Label>Credentials</Form.Label>
        <Form.Control name="credentials" placeholder="MD" />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName" placeholder="John" />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName" placeholder="Smith" />
      </Form.Group>
      <Form.Row className='justify-content-between'>
        <Button onClick={previous}>Previous</Button>
        <Button onClick={next}>Next</Button>
      </Form.Row>
    </>
  );
};

export default Name;
