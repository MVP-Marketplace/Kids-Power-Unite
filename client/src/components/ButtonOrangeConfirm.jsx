import React from "react";
import "../style/confirmModal.css";

const ButtonOrangeConfirm = (props) => {
  return(
    <div onClick={props.closeConfirm} className="button-orange-confirm">
      <div className="confirm-text-i66847995331 confirm-valign-text-middle paytoneone-normal-white-19-1px">Oops!</div>
    </div>
  )
}

export default ButtonOrangeConfirm