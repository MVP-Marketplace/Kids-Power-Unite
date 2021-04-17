import React from "react";
import vector from "../Images/vector1.png"
import "../style/purchaseModal.css"



const PurchaseModal = (props) =>{
  console.log(props)
  return (
    <div className="purchase-modal">
      <div className="modal-overlap-group">
        <h1 className="important valign-text-middle2 modal-dosis-semi-bold-monza-32px">Important!</h1>
        <p className="modal-text-1 opensans-regular-normal-black-16px">Make sure you talk with your parents before buying this gift on Amazon.</p>
        <div className="group-81">
          <div className="modal-overlap-group1">
            <div className="group-79">
              <div className="overlap-group2">
                <div className="rectangle-1764 border-1px-royal-blue"></div>
                <div className="modal-price valign-text-middle2 opensans-regular-normal-black-18px">12.99</div>
                {/* <img className="line-46" src={line46} />
                <img className="line-43" src={line43} /> */}
                <div className="marvel-backpack valign-text-middle2 opensans-semi-bold-black-14px">Marvel Backpack</div>
                <div className="modal-date valign-text-middle2 opensans-regular-normal-black-18px">{`${props.month}/${props.day}/${props.year}`}</div>
                <div className="birthday valign-text-middle2 opensans-semi-bold-black-10px">ocassion type</div>
                <div className="date-added valign-text-middle2 opensans-regular-normal-fuscous-gray-14px">
                  dateAdded
                </div>
                <div className="item valign-text-middle2 opensans-regular-normal-fuscous-gray-14px">item</div>
                <div className="recipient valign-text-middle2 opensans-regular-normal-fuscous-gray-14px">
                  recipient
                </div>
                {/* <img
                  className="modal-vector"
                  src="vector-1.svg"
                /> */}
                <div className="item-picture valign-text-middle opensans-regular-normal-fuscous-gray-14px">
                  itemPicture
                </div>
                <div className="occasion valign-text-middle opensans-regular-normal-fuscous-gray-14px">occasion</div>
                <div className="cost valign-text-middle opensans-regular-normal-fuscous-gray-14px">cost</div>
                {/* <img className="line-45" src={line45} />
                <img className="modal-line-47" src={line47} />
                <img className="modal-image-5" src={image5} /> */}
              </div>
            </div>
            <div className="group-80">
              {/* <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <img className="mask-group" src={maskGroup} />
              </div> */}
              <div className="steven-age-7 dosis-semi-bold-royal-blue-26-1px">{props.nickname}</div>
            </div>
          </div>
        </div>
        <div className="claritycaret-line">
          <img onClick={props.close} alt="close button" className="vector-1" src={vector} />
        </div>
      </div>
      <p className="modal-text-2 opensans-regular-normal-white-16px">
        <span className="span">Click on </span>
        <span className="span1">Purchase</span>
        <span className="span"> and the Amazon item will open in a new tab. After the item is purchased, please return here and click </span>
        <span className="span3">I’ve Purchased This Item</span>
        <span className="span"> so we can keep track of everything.</span>
      </p>
      {/* <ButtonOrangeDesktop2>{buttonOrangeDesktop2Props.children}</ButtonOrangeDesktop2> */}
    </div>
  );
}

export default PurchaseModal;