import React, { useState } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Container fluid className="bg-light">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">KidPower Unites</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="#link">Get Involved</Nav.Link>
              <Nav.Link href="#link">Success Stories</Nav.Link>
              <Nav.Link href="#link">Resources</Nav.Link>
              <Button variant="primary">Donate</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default MyNavbar;
