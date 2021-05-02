import React, { useContext, useEffect, useState, useCallback } from "react";
import { AuthContext } from "../Auth";
import "../App.css";
import ReactDOM from "react-dom";
import app from "../firebase";
import PlusSign from "../Images/plus-sign.png";
import LeftArrow from "../Images/LeftArrow.png";
import Form from "react-bootstrap/Form";
import Textarea from "./Textarea";

const ReferChildForm = () => {
  const [count, setCount] = useState(0);
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
    parentalConsent: false,
  });

  useEffect(() => {
    if (currentUser) {
      setSponsorId(currentUser.uid);
    }
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      values.nickname &&
      values.amazonLink &&
      values.giftName &&
      values.giftReason &&
      values.childBio &&
      values.giftExplanation &&
      values.relationship &&
      values.age &&
      values.month &&
      values.day &&
      values.year &&
      values.parentalConsent
    ) {
      try {
        await app
          .firestore()
          .collection("recipient")
          .doc(`${values.nickname}`)
          .set({ values, sponsorId });
      } catch (error) {
        alert(error);
      }
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
      parentalConsent: false,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setFormattedArea(event.target.value);
    setCount(event.target.value.length);
    setValues({
      ...values,
      [name]: value,
    });
  };

  function validate(values) {
    const errors = {};

    if (!values.nickname && values.nickname.length === 0) {
      errors.nickname("Please enter a nickname");
    }
    if (!values.amazonLink) {
      errors.amazonLink("Please enter a link");
    }
    return errors;
  }

  return (
    <div className="child-form-container">
      <div className="child-form-header">
        <button className="form-back-button">
          <img className="left-arrow" src={LeftArrow} alt="arrow"></img>
        </button>
        <p className="child-recipient-form">Child Recipient Form</p>
      </div>
      <Form>
        <form
          className="child-recipient-form-container"
          onSubmit={handleSubmit}
        >
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
              ></input>
              {submit && !values.nickname ? (
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
              {submit && !values.amazonLink ? (
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
              {submit && !values.giftName ? (
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
              >
                <option className="option-field">Birthday</option>
                <option className="option-field">Holiday</option>
                <option className="option-field">Medical</option>
                <option className="option-field">School</option>
              </Form.Control>
              {submit && !values.giftReason ? (
                <span className="error-message">Please enter a reason</span>
              ) : null}
            </div>
            <div className="recipient-info-one">
              <label className="recipient-field">Brief bio of child</label>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  // rows={rows}
                  // cols={cols}
                  placeholder="Please type here.."
                  id="limited-field"
                  className="child-form-fields"
                  name="childBio"
                  value={values.childBio}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>
                {/* {count.length}/{limit} */}
                {/* {count}/{limit} */}
              </p>
              {submit && !values.childBio ? (
                <span className="error-message">Please enter a bio</span>
              ) : null}
            </div>
            <div className="recipient-info-one">
              <label className="recipient-field">
                Why is this gift important to the child?
              </label>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Please type here.."
                  id="limited-field"
                  className="child-form-fields"
                  type="text"
                  name="giftExplanation"
                  value={values.giftExplanation}
                  onChange={handleChange}
                />
              </Form.Group>
              {submit && !values.giftExplanation ? (
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
              {submit && !values.relationship ? (
                <span className="error-message">
                  Please enter a relationship
                </span>
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
              {submit && !values.age ? (
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
                {submit && !values.month ? (
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
                {submit && !values.day ? (
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
                {submit && !values.year ? (
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
                  value={values.parentalConsent}
                  onChange={handleChange}
                />
                <p className="approval-received">Approval Must Be Received</p>
              </div>
              {submit && !values.parentalConsent ? (
                <span className="error-message">Please check yes</span>
              ) : null}
            </div>
            <button className="submit-child-form-button" type="submit">
              Submit
            </button>
          </div>
        </form>
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
      </Form>
    </div>
  );
};

export default ReferChildForm;
