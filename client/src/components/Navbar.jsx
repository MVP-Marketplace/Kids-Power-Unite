import React, { useContext } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../Auth";
import app from "../firebase";

import SimpleLogo from "../Images/simplelogo.png";
import { Link, useHistory } from "react-router-dom";

function MyNavbar() {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const handleSignout = () => {
    app.auth().signOut();
    history.push("/");
  };

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
                  <Button href="/login">Login</Button>
                </>
              ) : (
                <>
                  <Button onClick={handleSignout}>Logout</Button>
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
