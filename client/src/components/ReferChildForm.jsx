import React, { useContext, useEffect, useState, useCallback } from "react";
import { AuthContext } from "../Auth";
import { useHistory } from "react-router-dom";
import "../App.css";
import app from "../firebase";
import PlusSign from "../Images/plus-sign.png";
import LeftArrow from "../Images/LeftArrow.png";
import Form from "react-bootstrap/Form";
import "firebase/storage";

import LimitedTextarea from "./LimitedTextarea";

function validate(values) {
  let errors = {};

  if (!values.nickname) {
    errors.nickname = "Please enter a nickname";
  }
  if (!values.amazonLink) {
    errors.amazonLink = "Please enter a link";
  }
  if (!values.giftName) {
    errors.giftName = "Please enter a gift name";
  }
  if (!values.giftReason) {
    errors.giftReason = "Please enter a gift reason";
  }
  if (!values.childBio) {
    errors.childBio = "Please enter a child bio";
  }
  if (!values.giftExplanation) {
    errors.giftExplanation = "Please enter a gift explanation";
  }
  if (!values.relationship) {
    errors.relationship = "Please enter a relationship";
  }
  if (!values.age) {
    errors.age = "Please enter an age";
  }
  if (!values.month) {
    errors.month = "Please enter a month";
  }
  if (!values.day) {
    errors.day = "Please enter a day";
  }
  if (!values.year) {
    errors.year = "Please enter a year";
  }
  if (!values.status) {
    errors.status = "Please enter a status";
  }
  if (!values.parentalConsent) {
    errors.parentalConsent = "Please check mark for parental consent";
  }

  return errors;
}

const ReferChildForm = ({ formSuccess }) => {
  let limit = "";

  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [sponsorId, setSponsorId] = useState("");
  const [submit, setSubmit] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [values, setValues] = useState({
    nickname: "",
    amazonLink: "",
    giftName: "",
    giftReason: "",
    childBio: "",
    giftExplanation: "",
    relationship: "",
    age: "",
    month: "",
    day: "",
    year: "",
    status: "in progress",
    parentalConsent: checked,
  });
  const [profilePics, setProfilePics] = useState();
  const [profilepicModal, setprofilepicModal] = useState(false);

  let storageRef = app.firebase_.storage().ref();
  const getImage = () => {
    let imageArray = [];
    for (let i = 1; i <= 9; i++) {
      let imageRef = storageRef.child(`Profile Images/profile${i}.png`);
      imageRef
        .getDownloadURL()
        .then((url) => {
          imageArray.push(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setProfilePics(imageArray);
  };

  // getImage();

  useEffect(() => {
    if (currentUser) {
      setSponsorId(currentUser.uid);
      getImage();
    }
  }, [currentUser]);

  const handleClick = (e) => {
    e.persist();
    setChecked((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = validate(values);
    setErrors(error);
    // if (errors.length > 0) {
    //   this.setState({ errors });
    //   return;
    // }
    if (
      error.nickname ||
      error.amazonLink ||
      error.giftName ||
      error.giftReason ||
      error.childBio ||
      error.giftExplanation ||
      error.relationship ||
      error.age ||
      error.month ||
      error.day ||
      error.year ||
      error.status ||
      error.parentalConsent
    ) {
      return;
    }
    try {
      await app
        .firestore()
        .collection("recipient")
        .doc(`${values.nickname}`)
        .set({ values, sponsorId });
    } catch (error) {
      alert(error);
    }
    setSubmit(true);
    setAddModal(true);
    setValues({
      nickname: "",
      amazonLink: "",
      giftName: "",
      giftReason: "",
      childBio: "",
      giftExplanation: "",
      relationship: "",
      age: "",
      month: "",
      day: "",
      year: "",
      status: "in progress",
      parentalConsent: checked,
    });
    formSuccess();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    event.persist();
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="child-form-container">
      <div className="child-form-header">
        <button className="form-back-button">
          <img className="left-arrow" src={LeftArrow} alt="arrow"></img>
        </button>
        <p className="child-recipient-form">Child Recipient Form</p>
      </div>
      <Form className="child-recipient-form-container" onSubmit={handleSubmit}>
        <p className="recipient-info">Recipient Information</p>
        <div className="avatar-container">
          <button className="avatar-container-items">
            <img></img>
            <img
              className="add-avatar-sign"
              src={PlusSign}
              alt="add avatar"
            ></img>
          </button>
          <p className="select-avatar">Select Avatar</p>
        </div>
        <div className="recipient-info">
          <div className="recipient-info-one">
            <label className="recipient-field">Child's Nickname</label>
            <input
              className="child-form-fields"
              type="text"
              name="nickname"
              value={values.nickname}
              onChange={handleChange}
              placeholder="Ex. Steven"
            />
            {submit || (validate && errors?.nickname) ? (
              <span className="error-message">Please enter a nickname</span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">Link To Amazon Gift</label>
            <input
              className="child-form-fields"
              type="text"
              name="amazonLink"
              value={values.amazonLink}
              onChange={handleChange}
              placeholder="Ex. Https://Amzn.To/2Q46G3O"
            ></input>
            {submit || (validate && errors?.amazonLink) ? (
              <span className="error-message">
                Please enter an Amazon amazonLink
              </span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">Gift Name</label>
            <input
              className="child-form-fields"
              type="text"
              name="giftName"
              value={values.giftName}
              onChange={handleChange}
              placeholder="Ex. Marvel Backpack"
            ></input>
            {submit || (validate && errors?.giftName) ? (
              <span className="error-message">Please enter a gift name</span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">Reason For Gift</label>
            <Form.Control
              as="select"
              className="child-form-fields"
              type="text"
              name="giftReason"
              value={values.giftReason}
              onChange={handleChange}
              placeholder="Select reason below"
            >
              <option value="...">Select your reason</option>
              <option className="option-field" value="birthday">
                Birthday
              </option>
              <option className="option-field" value="holiday">
                Holiday
              </option>
              <option className="option-field" value="medical">
                Medical
              </option>
              <option className="option-field" value="school">
                School
              </option>
            </Form.Control>
            {submit || (validate && errors?.giftReason) ? (
              <span className="error-message">Please enter a reason</span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">Brief bio of child</label>
            <Form.Group controlId="limited-field">
              <Form.Control
                as="textarea"
                // rows={rows}
                // cols={cols}
                placeholder="Please type here.."
                className="child-form-fields"
                name="childBio"
                maxLength={150}
                value={values.childBio}
                onChange={handleChange}
                maxLength={150}
              />
              {/* <LimitedTextarea
                placeholder="Please type here.."
                className="child-form-fields"
                name="childBio"
                value={values.childBio}
                onChange={handleChange}
                rows={5}
                cols={10}
                limit={150}
                maxLength="150"
              /> */}
            </Form.Group>

            {submit || (validate && errors?.childBio) ? (
              <span className="error-message">Please enter a bio</span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">
              Why is this gift important to the child?
            </label>
            <Form.Group controlId="limited-field">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Please type here.."
                className="child-form-fields"
                type="text"
                name="giftExplanation"
                maxLength={150}
                value={values.giftExplanation}
                onChange={handleChange}
                maxLength={150}
              />
            </Form.Group>
            {submit || (validate && errors?.giftExplanation) ? (
              <span className="error-message">
                Please enter a gift explanation
              </span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">
              Your Relationship With Child
            </label>
            <input
              className="child-form-fields"
              type="text"
              name="relationship"
              value={values.relationship}
              onChange={handleChange}
              placeholder="Ex. Family Case Worker"
            ></input>
            {submit || (validate && errors?.relationship) ? (
              <span className="error-message">Please enter a relationship</span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">Age Of Child</label>
            <input
              id="age-field"
              className="child-form-fields"
              type="text"
              name="age"
              value={values.age}
              onChange={handleChange}
              placeholder="X"
            ></input>
            {submit || (validate && errors?.age) ? (
              <span className="error-message">Please enter an age</span>
            ) : null}
          </div>
          <div className="recipient-info-one">
            <label className="recipient-field">Date Gift Desired</label>
            <div className="date-fillers">
              <input
                id="date-month"
                className="child-form-fields"
                type="text"
                name="month"
                value={values.month}
                onChange={handleChange}
                placeholder="Month"
              ></input>
              {submit || (validate && errors?.month) ? (
                <span className="error-message">Please enter a month</span>
              ) : null}
              <input
                id="date-day"
                className="child-form-fields"
                type="text"
                name="day"
                value={values.day}
                onChange={handleChange}
                placeholder="Day"
              ></input>
              {submit || (validate && errors?.day) ? (
                <span className="error-message">Please enter a day</span>
              ) : null}
              <input
                id="date-year"
                className="child-form-fields"
                type="text"
                name="year"
                value={values.year}
                onChange={handleChange}
                placeholder="Year"
              ></input>
              {submit || (validate && errors?.year) ? (
                <span className="error-message">Please enter a year</span>
              ) : null}
            </div>
          </div>
          <div className="recipient-info-one">
            <div className="referral-approval">
              <label id="fam-approval" className="recipient-field">
                <p className="star">*</p>
                Does Family Approve Referral
              </label>
              <input
                id="child-checkbox"
                className="child-form-fields"
                type="checkbox"
                name="parentalConsent"
                checked={checked}
                value={checked}
                onClick={handleClick}
                onChange={handleChange}
              />
              <p className="approval-received">Approval Must Be Received</p>
            </div>
            {submit || (validate && errors?.parentalConsent) ? (
              <span className="error-message">Please check yes</span>
            ) : null}
          </div>
          <button className="submit-child-form-button" type="submit">
            Submit
          </button>
        </div>
      </Form>
      {addModal ? (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReferChildForm;
