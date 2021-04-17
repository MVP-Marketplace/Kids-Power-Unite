import React from "react";
import "../style/donateCard.css";

const YellowButton = (props) =>{
  return(
    <div className="button-yellow" onClick={props.open}>
      <div className=" text-i16912736483 paytoneone-normal-white-24px">Purchase on Amazon</div>
    </div>
  );
};

export default YellowButton