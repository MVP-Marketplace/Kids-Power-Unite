import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import { Button, Modal } from "react-bootstrap";

const Signup = ({ history, showSignup, handleCloseSignup }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        email,
        password,
        credentials,
        first,
        last,
        occupation,
        employer,
        street,
        suite,
        city,
        state,
        zip,
      } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(() => {
            app
              .firestore()
              .collection("professional")
              .doc(app.auth().currentUser.uid)
              .set({
                name: {
                  credentials: credentials.value,
                  first: first.value,
                  last: last.value,
                },
                occupation: occupation.value,
                employer: employer.value,
                address: {
                  street: street.value,
                  suite: suite.value,
                  city: city.value,
                  state: state.value,
                  zip: zip.value,
                },
              });
          });
        handleCloseSignup();
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSignUp}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <label>
              Credentials
              <input name="credentials" type="text" placeholder="MD" />
            </label>
            <label>
              First Name
              <input name="first" type="text" placeholder="John" />
            </label>
            <label>
              Last Name
              <input name="last" type="text" placeholder="Smith" />
            </label>
            <label>
              Occupation
              <input name="occupation" type="text" placeholder="Occupation" />
            </label>
            <label>
              Employer
              <input name="employer" type="text" placeholder="Employer" />
            </label>
            <label>
              Street address
              <input name="street" type="text" placeholder="Street address" />
            </label>
            <label>
              Suite #
              <input name="suite" type="text" placeholder="Suite #" />
            </label>
            <label>
              City
              <input name="city" type="text" placeholder="City" />
            </label>
            <label>
              State
              <input name="state" type="text" placeholder="State" />
            </label>
            <label>
              ZIP code
              <input name="zip" type="text" placeholder="ZIP code" />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(Signup);
