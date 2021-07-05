import React from "react";
import ButtonOrangeConfirm from "./ButtonOrangeConfirm";
import ButtonBlueConfirm from "./ButtonBlueConfirm";
import "../style/confirmModal.css";

import group83 from "../Images/group83.png"

const ConfirmPurchaseModal = (props) => {

  return (
    <div className="confirm-container-center-horizontal">
      <div className="confirm-purchase-modal-flow-3 screen">
        <div className="confirm-overlap-group">
          <div className="confirm-text-1">
            Thanks for helping {props.nickname} out by buying them a gift!
          </div>
          <ButtonOrangeConfirm closeConfirm={props.closeConfirm} />
          <ButtonBlueConfirm updatePurchaseStatus={props.updatePurchase} />
          <div className="confirm-group-83">
              <img src={group83} alt="success message"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPurchaseModal;
