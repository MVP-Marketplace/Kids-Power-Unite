import React, { useContext, useState } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "../Auth";
import app from "../firebase";

import SimpleLogo from "../Images/simplelogo.png";

function MyNavbar() {
  // usestates
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  // context referencees
  const { currentUser } = useContext(AuthContext);
  // Signup modal show and close functions 
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  // Login modal show and close functions
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

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
                  <Button onClick={handleShowLogin}>Login</Button>
                  <Login
                    showLogin={showLogin}
                    handleShowSignup={handleShowSignup}
                    handleCloseLogin={handleCloseLogin}
                  />
                </>
              ) : (
                <>
                  <Button onClick={() => app.auth().signOut()}>Logout</Button>
                </>
              )}
              {showSignup ? (
                <Signup
                  showSignup={showSignup}
                  handleCloseSignup={handleCloseSignup}
                />
              ) : null}
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
