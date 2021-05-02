import React from "react";
import ButtonOrangeConfirm from "./ButtonOrangeConfirm"
import ButtonBlueConfirm from "./ButtonBlueConfirm"
import "../style/confirmModal.css"

import group_11 from "../Images/group_11.svg"
import group1 from "../Images/group1.svg"
import group_2 from "../Images/group-2.svg"
import group_3 from "../Images/group_3.svg"
import group from "../Images/group.svg"
import vector from "../Images/vector_13.png"


const ConfirmPurchaseModal = (props) => {
  console.log(props)
  return (
    <div className="confirm-container-center-horizontal">
      <div className="confirm-purchase-modal-flow-3 screen">
        <div className="confirm-overlap-group">
          <div className="confirm-group-84">
            <div className="confirm-frame">
              <div className="confirm-overlap-group1">
                {/* <img
                  className="confirm-group-3"
                  src={group_3}
                  alt="confetti"
                /> */}
                <img
                  className="confirm-group-11"
                  src={group_11}
                  alt="confetti"
                />
                <img
                  className="confirm-group"
                  src={group}
                  alt="confetti"
                />
                <img
                  className="confirm-group-2"
                  src={group_2}
                  alt="confetti"
                />
                <img
                  className="confirm-vector-13"
                  src={vector}
                  alt="confetti"
                />
              </div>
            </div>
          </div>
          <div className="confirm-text-1">Thanks for helping Steven out by buying them a gift!</div>
          <ButtonOrangeConfirm closeConfirm={props.closeConfirm}/>
          <ButtonBlueConfirm updatePurchaseStatus={props.updatePurchase}/>
          <div className="confirm-group-11">
            <img src={group1}/>
          </div>
      </div>
    </div>
  </div>
  );
};

export default ConfirmPurchaseModal