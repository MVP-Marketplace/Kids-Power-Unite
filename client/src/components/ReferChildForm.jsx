import React, { useState } from "react";
import "../App.css";

const ReferChildForm = () => {
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useState({
    nickname: "",
    link: "",
    reason: "",
    giftExplanation: "",
    relationship: "",
    age: "",
    gender: "",
    date: Date,
  });
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      value.nickname &&
      value.link &&
      value.reason &&
      value.giftExplanation &&
      value.relationship &&
      value.age &&
      value.gender &&
      value.date
    ) {
      setValid(true);
    }
    setSubmit(true);
  };

  return (
    <div className="refer-child-form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="child-recipient-form">Child Recipient Form</h3>
        <p className="recipient-info-subheader">Recipient Information</p>
        <hr></hr>
        <div className="avatar-container">
          <img></img>
          <button>+</button>
          <p>Select Avatar</p>
        </div>
        <div className="recipient-info">
          <label className="recipient-field">Child's Nickname</label>
          <input
            type="text"
            name="nickname"
            value={value.nickname}
            onChange={handleChange}
            placeholder="Mighty Mouse"
          ></input>
          {submit && !value.nickname ? (
            <span className="error-message">Please enter a nickname</span>
          ) : null}
          <label className="recipient-field">Link To Amazon Gift</label>
          <input
            type="text"
            name="amazonLink"
            value={value.link}
            onChange={handleChange}
            placeholder="Ex. Marvel Backpack"
          ></input>
          {submit && !value.link ? (
            <span className="error-message">Please enter an Amazon link</span>
          ) : null}
          <label className="recipient-field">Reason For Gift</label>
          <input
            type="text"
            name="giftReason"
            value={value.reason}
            onChange={handleChange}
            placeholder="Birthday"
          ></input>
          {submit && !value.reason ? (
            <span className="error-message">Please enter a reason</span>
          ) : null}
          <label className="recipient-field">Why This Gift Is Important</label>
          <input
            type="text"
            name="giftExplanation"
            value={value.giftExplanation}
            onChange={handleChange}
            placeholder="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore"
          ></input>
          {submit && !value.giftExplanation ? (
            <span className="error-message">
              Please enter a gift explanation
            </span>
          ) : null}
          <label className="recipient-field">
            Your Relationship With Child
          </label>
          <input
            type="text"
            name="relationship"
            value={value.relationship}
            onChange={handleChange}
            placeholder="Psychologist"
          ></input>
          {submit && !value.relationship ? (
            <span className="error-message">Please enter a relationship</span>
          ) : null}
          <div className="child-age">
            <label className="recipient-field">Age Of Child</label>
            <input
              type="text"
              name="age"
              value={value.age}
              onChange={handleChange}
              placeholder="8"
            ></input>
            {submit && !value.age ? (
              <span className="error-message">Please enter an age</span>
            ) : null}
          </div>
          <div className="child-gender">
            <label className="recipient-field">Gender</label>
            <input
              type="text"
              name="gender"
              value={value.gender}
              onChange={handleChange}
              placeholder="Optional"
            ></input>
            {submit && !value.gender ? (
              <span className="error-message">Please enter a gender</span>
            ) : null}
          </div>
          <div className="date-desired">
            <label className="recipient-field">Date Gift Desired</label>
            <div className="date-fillers">
              <input
                type="text"
                name="date"
                value={value.date}
                onChange={handleChange}
                placeholder="MO"
              ></input>
              {submit && !value.date ? (
                <span className="error-message">Please enter a month</span>
              ) : null}
              <input
                type="text"
                name="date"
                value={value.date}
                onChange={handleChange}
                placeholder="DAY"
              ></input>
              {submit && !value.date ? (
                <span className="error-message">Please enter a day</span>
              ) : null}
              <input
                type="text"
                name="date"
                value={value.date}
                onChange={handleChange}
                placeholder="YEAR"
              ></input>
              {submit && !value.date ? (
                <span className="error-message">Please enter a year</span>
              ) : null}
            </div>
          </div>
          <div className="referral-approval">
            <label className="recipient-field">
              Does Family Approve Referral
            </label>
            <input type="checkbox" />
            <span>Yes</span>
          </div>
          <button className="submit-child-form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      {submit && valid ? (
        <div className="form-success">
          <h1 className="success-heading">CONGRATS!</h1>
          <p className="success-message">
            Your child has been added to the database
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ReferChildForm;
