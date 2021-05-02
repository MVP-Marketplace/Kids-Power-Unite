import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "../style/confirmModal.css";

const ButtonBlueConfirm = (props) => {
  console.log(props)
  return(
    <div onClick={props.updatePurchaseStatus} className="button-blue-confirm">
      <div className="confirm-text-i75543726472 confirm-valign-text-middle paytoneone-normal-white-19-1px">All Good!</div>
    </div>
  );
};

export default ButtonBlueConfirm