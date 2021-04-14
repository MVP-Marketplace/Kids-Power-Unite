import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth";
import "../App.css";
import app from "../firebase";
import PlusSign from "../Images/plus-sign.png";

const ReferChildForm = () => {
  const { currentUser } = useContext(AuthContext);
  const [sponsorId, setSponsorId] = useState("");
  const [submit, setSubmit] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [values, setValues] = useState({
    nickname: "",
    amazonLink: "",
    giftReason: "",
    giftExplanation: "",
    relationship: "",
    age: "",
    gender: "",
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
      values.giftReason &&
      values.giftExplanation &&
      values.relationship &&
      values.age &&
      values.gender &&
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
      giftReason: "",
      giftExplanation: "",
      relationship: "",
      age: "",
      gender: "",
      month: "",
      day: "",
      year: "",
      parentalConsent: false,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="child-form-container">
      <form onSubmit={handleSubmit}>
        <p className="referral-form">Referral</p>
        <p className="recipient-info">Recipient Information</p>
        <hr className="child-form-line-break"></hr>
        <div className="avatar-container">
          <button className="avatar-container-items">
            <img></img>
            <img
              className="add-avatar-sign"
              src={PlusSign}
              alt="add-avatar"
            ></img>
          </button>
          <p className="select-avatar">Select Avatar</p>
        </div>
        <div className="recipient-info">
          <label className="recipient-field">Child's Nickname</label>
          <input
            className="child-form-fields"
            type="text"
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            placeholder="Mighty Mouse"
          ></input>
          {submit && !values.nickname ? (
            <span className="error-message">Please enter a nickname</span>
          ) : null}
          <label className="recipient-field">amazonLink To Amazon Gift</label>
          <input
            className="child-form-fields"
            type="text"
            name="amazonLink"
            value={values.amazonLink}
            onChange={handleChange}
            placeholder="Ex. Marvel Backpack"
          ></input>
          {submit && !values.amazonLink ? (
            <span className="error-message">
              Please enter an Amazon amazonLink
            </span>
          ) : null}
          <label className="recipient-field">Reason For Gift</label>
          <input
            className="child-form-fields"
            type="text"
            name="giftReason"
            value={values.giftReason}
            onChange={handleChange}
            placeholder="Birthday"
          ></input>
          {submit && !values.reason ? (
            <span className="error-message">Please enter a reason</span>
          ) : null}
          <label className="recipient-field">Why This Gift Is Important</label>
          <input
            className="child-form-fields"
            type="text"
            name="giftExplanation"
            value={values.giftExplanation}
            onChange={handleChange}
            placeholder="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore"
          ></input>
          {submit && !values.giftExplanation ? (
            <span className="error-message">
              Please enter a gift explanation
            </span>
          ) : null}
          <label className="recipient-field">
            Your Relationship With Child
          </label>
          <input
            className="child-form-fields"
            type="text"
            name="relationship"
            value={values.relationship}
            onChange={handleChange}
            placeholder="Psychologist"
          ></input>
          {submit && !values.relationship ? (
            <span className="error-message">Please enter a relationship</span>
          ) : null}
          <div className="child-age">
            <label className="recipient-field">Age Of Child</label>
            <input
              className="child-form-fields"
              type="text"
              name="age"
              value={values.age}
              onChange={handleChange}
              placeholder="8"
            ></input>
            {submit && !values.age ? (
              <span className="error-message">Please enter an age</span>
            ) : null}
          </div>
          <div className="child-gender">
            <label className="recipient-field">Gender</label>
            <input
              className="child-form-fields"
              type="text"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              placeholder="Optional"
            ></input>
            {submit && !values.gender ? (
              <span className="error-message">Please enter a gender</span>
            ) : null}
          </div>
          <div className="date-desired">
            <label className="recipient-field">Date Gift Desired</label>
            <div className="date-fillers">
              <input
                className="child-form-fields"
                type="text"
                name="month"
                value={values.month}
                onChange={handleChange}
                placeholder="MO"
              ></input>
              {submit && !values.month ? (
                <span className="error-message">Please enter a month</span>
              ) : null}
              <input
                className="child-form-fields"
                type="text"
                name="day"
                value={values.day}
                onChange={handleChange}
                placeholder="DAY"
              ></input>
              {submit && !values.day ? (
                <span className="error-message">Please enter a day</span>
              ) : null}
              <input
                className="child-form-fields"
                type="text"
                name="year"
                value={values.year}
                onChange={handleChange}
                placeholder="YEAR"
              ></input>
              {submit && !values.year ? (
                <span className="error-message">Please enter a year</span>
              ) : null}
            </div>
          </div>
          <div className="referral-approval">
            <label className="recipient-field">
              Does Family Approve Referral
            </label>
            <input
              className="child-form-fields"
              type="checkbox"
              name="parentalConsent"
              value={values.parentalConsent}
              onChange={handleChange}
            />
            <span>Yes</span>
          </div>
          {submit && !values.parentalConsent ? (
            <span className="error-message">Please check yes</span>
          ) : null}
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
    </div>
  );
};

export default ReferChildForm;
