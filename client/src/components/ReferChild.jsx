import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import EligibleImageOne from "../Images/eligible-image-one.png";
import EligibleImageTwo from "../Images/eligible-image-two.png";

const ReferChild = () => {
  return (
    <div className="refer-child-container">
      <div className="refer-child-header"></div>
      <div className="to-know-container">
        <p className="to-know">
          <b>What you need to know</b>
        </p>
        <p className="to-know-text">
          Thanks for your interest in referring a child to receive a gift! It's
          just as important to ask for help when we need it as it is to give
          gifts.
        </p>
      </div>
      <div className="eligible-container">
        <div className="eligible-text">
          <p className="eligible-header-text">
            <b>Who is eligible?</b>
          </p>
          <ul className="eligible-requirements-list">
            <li>Children ages 18 and under</li>
            <li>In a disadvantaged situation</li>
          </ul>
        </div>
        <img
          className="eligible-image"
          id="eligible-image-one"
          src={EligibleImageOne}
          alt="image"
        ></img>
      </div>
      <div className="referrals-from-container">
        <img
          className="eligible-image"
          src={EligibleImageTwo}
          alt="image"
        ></img>
        <div className="referrals-container-text">
          <p className="eligible-header-text">
            <b>We accept referrals from:</b>
          </p>
          <ul className="eligible-requirements-list">
            <li>Social Workers</li>
            <li>Case Managers</li>
            <li>Therapists</li>
            <li>Medical Professionals</li>
          </ul>
        </div>
      </div>
      <div className="what-to-expect-container">
        <h2>What to expect</h2>
        <div className="what-to-expect">
          <div className="expect-step">
            <p className="stepNo">01</p>
            <div className="expect-text">
              <p>Create A Profile</p>
              <p id="expect-text-one">
                You will be the main point of contact, and all gifts will be
                sent to you to distribute.
              </p>
            </div>
          </div>
          <div className="expect-step">
            <p className="stepNo">02</p>
            <div className="expect-text">
              <p>Add Children</p>
              <p id="expect-text-two">
                Each child will remain anonymous. Profile will display a bit of
                their story to remain personable.
              </p>
            </div>
          </div>
          <div className="expect-step">
            <p className="stepNo">03</p>
            <div className="expect-text">
              <p>
                Experience The Power <br /> Of Receiving
              </p>
              <p id="expect-text-three">
                Items are purchased through Amazon. You’ll receive a
                confirmation and tracking number once gift is purchased.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link className="refer-child-button" to="/dashboard">
        Refer a Child
      </Link>
      <div className="honor-code-container">
        <p className="honor-code-text">
          <b>Honor code: </b> We operate on an honor system. Please do not
          falsify information since there are so many children in need of gifts.
        </p>
      </div>
    </div>
  );
};

export default ReferChild;
