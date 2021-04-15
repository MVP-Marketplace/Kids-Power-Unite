import React, { useContext, useState } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import Login from "./Login";
import { AuthContext } from "../Auth";
import app from "../firebase";

import SimpleLogo from "../Images/simplelogo.png";

function MyNavbar() {
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="bg-primary">
        <Navbar expand="lg">
          <Navbar.Brand href="/">
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
              {!currentUser ? (
                <>
                  <Button onClick={handleShow}>Login</Button>
                  <Login show={show} handleClose={handleClose} />
                </>
              ) : (
                <>
                  <Button onClick={() => app.auth().signOut()}>Sign out</Button>
                </>
              )}
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
