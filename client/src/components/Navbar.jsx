import React, { useState } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";

import SimpleLogo from "../Images/simplelogo.png";

function MyNavbar() {
  return (
    <>
      <Container fluid className="bg-primary">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={SimpleLogo}
              width="156"
              height="66"
              className="d-inline-block align-top"
              alt="Simple Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="header-text text-white pr-4" href="/login">
                Log In
              </Nav.Link>
              <Nav.Link
                className="header-text text-white pr-4"
                href="/referchild"
              >
                Refer a Child
              </Nav.Link>
              <Button variant="primary">Donate</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default MyNavbar;
