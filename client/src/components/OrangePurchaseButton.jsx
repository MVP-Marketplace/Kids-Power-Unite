import React from "react";
import "../style/purchaseModal.css";

const OrangePurchaseButton = (props) =>{
  return(
      props.buttonMessage === "Purchase" ? 
      <div className="button-orange-desktop">
        <a href={props.link} target="_blank" className="text-i66847885331 valign-text-middle paytoneone-regular-normal-white-19-1px">{props.buttonMessage}</a>
      </div> : 
      <div onClick={props.close} className="button-orange-desktop valign-text-middle paytoneone-regular-normal-white-19-1px">
        {props.buttonMessage}
      </div>
  );
};

export default OrangePurchaseButton; 