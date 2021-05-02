import React from "react";
import "../style/purchaseModal.css";

const GreenPurchaseButton = (props) =>{
  console.log(props)
  return(
  <div onClick={props.openConfirm} className="button-green-desktop valign-text-middle paytoneone-regular-normal-white-19-1px">
    {props.buttonMessage}
  </div>
  );
};

export default GreenPurchaseButton; 