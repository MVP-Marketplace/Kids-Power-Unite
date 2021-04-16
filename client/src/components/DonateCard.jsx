import React from "react";
import "../style/donateCard.css";
import BlueButton from "./BlueButton";
import line49 from "../Images/Line49.png";
import line50 from "../Images/Line50.png";
import line52 from "../Images/Line52.png";
import line53 from "../Images/Line53.png";
import line51 from "../Images/Line51.png";



const DonateCard = (props) =>{
  console.log(props)
  return (
    <div className="box wishlist-item-story-desktop">
      <div className="overlap-group1">
      <div className="rectangle-1763"></div>
        <div className="rectangle-67"></div>

        <img className="ellipse-1" alt=" Child avatar"/>

        <h1 className="text-1 dosis-semi-bold-royal-blue-32px">{props.nickname}</h1>        
        <p className="text-2 opensans-normal-black-16px">This will contain a quick description of the childs story</p>

        <p className="text-3 opensans-normal-black-16px">{props.giftReason}</p>
        <div className="price valign-text-middle1 opensans-normal-black-18px">$12.99</div>
        <div className="text-4 valign-text-middle opensans-semi-bold-black-14px">Item Name</div>

        <div className="date valign-text-middle opensans-normal-black-18px">{`${props.month}/${props.day}/${props.year}`}</div> 
        <div className="text-6 valign-text-middle opensans-normal-fuscous-gray-14px">Date</div>

    
        <div className="text-7 valign-text-middle opensans-normal-fuscous-gray-14px">Item</div>

        <div className="text-8 valign-text-middle opensans-normal-fuscous-gray-14px">Item Picture</div>

        <div className="text-9 valign-text-middle opensans-normal-fuscous-gray-14px">Ocassion</div>
        <div className="text-10 valign-text-middle opensans-normal-fuscous-gray-14px">Price</div>

        <img className="line-49" src={line49} alt="line" />
        <img className="line-50" src={line50} alt="line" />
        <img className="line-52" src={line52} alt="line" />
        <img className="line-53" src={line53} alt="line" />
        <img className="line-51" src={line51} alt="line" />
        
        
      </div>
      <BlueButton/>
    </div>
  );
};


export default DonateCard; 

