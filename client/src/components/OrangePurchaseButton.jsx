import React from "react";
import "../style/purchaseModal.css";

const OrangePurchaseButton = (props) =>{
  return(
  <div className="button-orange-desktop">
    <a href={props.link} target="_blank"className="text-i66847885331 valign-text-middle paytoneone-regular-normal-white-19-1px">Purchase</a>
  </div>
  );
};

export default OrangePurchaseButton; 