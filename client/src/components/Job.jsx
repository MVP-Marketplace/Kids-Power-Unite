import React from "react";
import { Button, Form } from "react-bootstrap";

const Job = ({ navigation }) => {
  const { next, previous } = navigation;
  return (
    <>
      <Form.Group controlId="occupation">
        <Form.Label>Occupation</Form.Label>
        <Form.Control name="occupation" placeholder="Occupation" />
      </Form.Group>
      <Form.Group controlId="employer">
        <Form.Label>Employer</Form.Label>
        <Form.Control name="employer" placeholder="Enter employer" />
      </Form.Group>
      <Form.Row className="justify-content-between">
        <Button onClick={previous}>Previous</Button>
        <Button onClick={next}>Next</Button>
      </Form.Row>
    </>
  );
};

export default Job;
