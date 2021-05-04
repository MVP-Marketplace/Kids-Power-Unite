import React, { useContext } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../Auth";
import app from "../firebase";

import SimpleLogo from "../Images/simplelogo.png";
import { useHistory } from "react-router-dom";

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
              <Nav.Link
                href="/about"
                style={{ fontFamily: "Paytone One", color: "#FFFFFF" }}
              >
                About Us
              </Nav.Link>
              {!currentUser ? (
                <>
                  <Nav.Link
                    href="/login"
                    style={{ fontFamily: "Paytone One", color: "#FFFFFF" }}
                  >
                    Login
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    onClick={handleSignout}
                    style={{ fontFamily: "Paytone One", color: "#FFFFFF" }}
                  >
                    Logout
                  </Nav.Link>
                </>
              )}

              <Nav.Link
                href="/referchild"
                style={{ fontFamily: "Paytone One", color: "#FFFFFF" }}
              >
                Refer a Child
              </Nav.Link>
              <Button
                href="/donate"
                style={{ color: "#000000",fontFamily: "Paytone One", backgroundColor: "#FCA40E" }}
              >
                Donate
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default MyNavbar;
