import React from "react";
import "../style/donateCard.css";
import BlueButton from "./BlueButton";
import line41 from "../Images/Line41.png";
import line42 from "../Images/Line42.png";
import line43 from "../Images/Line43.png";
import line45 from "../Images/Line45.png";
import line46 from "../Images/Line46.png";


const DonateCard = () =>{
  return (
    <div className="wishlist-item-story-desktop">
      <div className="overlap-group1">
      <div className="rectangle-1763"></div>
        <div className="rectangle-67"></div>

        <img className="ellipse-1" alt=" Child avatar"/>

        <h1 className="text-1 dosis-semi-bold-royal-blue-32px">Child Name</h1>        
        <p className="text-2 opensans-normal-black-16px">This will contain a quick description of the childs story</p>

        <p className="text-3 opensans-normal-black-16px">This will contain a quick story about why the item is important/needed</p>
        <div className="price valign-text-middle1 opensans-normal-black-18px">$12.99</div>
        <div className="text-4 valign-text-middle opensans-semi-bold-black-14px">Item Name</div>

        <div className="date valign-text-middle opensans-normal-black-18px">11/11/11</div> 
        <div className="text-6 valign-text-middle opensans-normal-fuscous-gray-14px">Date</div>

    
        <div className="text-7 valign-text-middle opensans-normal-fuscous-gray-14px">Item</div>

        <div className="text-8 valign-text-middle opensans-normal-fuscous-gray-14px">Item Picture</div>

        <div className="text-9 valign-text-middle opensans-normal-fuscous-gray-14px">Ocassion</div>
        <div className="text-10 valign-text-middle opensans-normal-fuscous-gray-14px">Price</div>

        <img className="line-41" src={line41} />
        <img className="line-42" src={line42}/>
        <img className="line-43" src={line43}/>
        <img className="line-46" src={line46}/>
        <img className="line-45" src={line45}/>
        
      </div>
      <BlueButton/>
    </div>
  );
};


export default DonateCard; 

