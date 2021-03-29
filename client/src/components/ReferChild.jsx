import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import SuperHeroKids from "../Images/superhero-kids.png";

const ReferChild = () => {
  return (
    <div className="refer-child-container">
      <div className="refer-child-header">
        <p className="refer-child-header-text">
          Calling on kids ready to bring cheer... select a peer in need to give
          a gift to!
        </p>
      </div>
      <div className="kpu-difference-container">
        <p className="kpu-difference">
          <b>The KPU Difference</b>
        </p>
        <p className="kpu-difference-text">
          Although it's always nice to participate in a larger cause, it's even
          more incredible to feel the power to grant an item from start to
          finish!
        </p>
        <p className="kpu-difference-text">
          KPU is a platform to sponsor a gift in completion, teaching kids the
          power of giving along the way.
        </p>
      </div>
      <div className="eligible-container">
        <div className="eligible-text">
          <p className="who-is-eligible">
            <b>Who Is Eligible?</b>
          </p>
          <p className="eligible-children">
            <b>Children who meet the following criteria:</b>
          </p>
          <ul className="eligible-requirements-list">
            <li className="eligible-requirements">- Ages 18 and under</li>
            <li className="eligible-requirements">
              - In a disadvantaged situation
            </li>
          </ul>
        </div>
        <img className="eligible-image" src={SuperHeroKids} alt="image"></img>
      </div>
      <div className="referrals-from-container">
        <p className="accept-referrals-from">
          <b>We Accept Referrals From:</b>
        </p>
        <ul className="referrals-list">
          <div className="referrals-list-one">
            <li className="referrals-list-item">Medical Professionals</li>
            <li className="referrals-list-item">Therapists</li>
          </div>
          <div className="referrals-list-two">
            <li className="referrals-list-item">Social Workers</li>
            <li className="referrals-list-item">Case Managers</li>
          </div>
        </ul>
        <div className="refer-child-button-container">
          <Button className="refer-child-button" variant="secondary">
            Refer a Child
          </Button>
        </div>
      </div>
      <div className="honor-code-container">
        <p className="honor-code">
          <b>Honor Code</b>
        </p>
        <p className="honor-code-text">
          While we do not have time to verify each recipient's eligibility, we
          operate on an honor system and ask that you do not falsify information
          as there are so many children in need of gifts.
        </p>
      </div>
    </div>
  );
};

export default ReferChild;
