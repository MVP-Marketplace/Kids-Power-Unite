import React, { useContext, useState } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import Login from "./Login";
import { AuthContext } from "../Auth";
import app from "../firebase";

import SimpleLogo from "../Images/simplelogo.png";

function MyNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

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
              <Button href="/about">About</Button>
              {!currentUser ? (
                <>
                  <Button onClick={handleShow}>Login</Button>
                  <Login showLogin={showLogin} handleClose={handleClose} />
                </>
              ) : (
                <>
                  <Button onClick={() => app.auth().signOut()}>Logout</Button>
                </>
              )}
              <Button href="/referchild">Refer a Child</Button>
              <Button variant="primary">Donate</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default MyNavbar;
