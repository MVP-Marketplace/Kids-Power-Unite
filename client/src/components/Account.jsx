import React from "react";
import { Button, Form } from "react-bootstrap";

const Account = ({ navigation }) => {
  const { next } = navigation;
  return (
    <>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Row className="justify-content-end">
        <Button onClick={next}>Next</Button>
      </Form.Row>
    </>
  );
};

export default Account;
