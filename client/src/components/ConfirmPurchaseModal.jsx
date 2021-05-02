import React from "react";
import ButtonOrangeConfirm from "./ButtonOrangeConfirm"
import ButtonBlueConfirm from "./ButtonBlueConfirm"
import "../style/confirmModal.css"

import group_11 from "../Images/group_11.svg"
import group_2 from "../Images/group-2.svg"
import group_3 from "../Images/group_3.svg"
import group from "../Images/group.svg"
import vector from "../Images/vector_13.png"


const ConfirmPurchaseModal = (props) => {
  console.log(props)
  return (
    <div className="confirm-container-center-horizontal">
      <div className="confirm-purchase-modal-flow-3 screen">
        <div className="confirm-overlap-group">
          <div className="confirm-group-84">
            <div className="confirm-frame">
              <div className="confirm-overlap-group1">
                {/* <img
                  className="confirm-group-3"
                  src={group_3}
                  alt="confetti"
                /> */}
                <img
                  className="confirm-group-11"
                  src={group_11}
                  alt="confetti"
                />
                <img
                  className="confirm-group"
                  src={group}
                  alt="confetti"
                />
                <img
                  className="confirm-group-2"
                  src={group_2}
                  alt="confetti"
                />
                <img
                  className="confirm-vector-13"
                  src={vector}
                  alt="confetti"
                />
              </div>
            </div>
          </div>
          <div className="confirm-text-1">Thanks for helping Steven out by buying them a gift!</div>
          <ButtonOrangeConfirm closeConfirm={props.closeConfirm}/>
          <ButtonBlueConfirm updatePurchaseStatus={props.updatePurchase}/>
          <div className="confirm-group-83">
            <div className="confirm-overlap-group-1">
              <div className="confirm-group-8">
                <div className="confirm-overlap-group-1">
                  <div className="confirm-group-15">
                    <div className="confirm-overlap-group3">
                      {/* <img
                        className="confirm-vector-4"
                        src="vector-34.svg"
                      />
                      <img
                        className="confirm-vector-7"
                        src="vector-35.svg"
                      /> */}
                    </div>
                  </div>
                  <div className="confirm-group-12">
                    <div className="confirm-flex-row-1">
                      <div className="confirm-group-9">
                        <div className="confirm-overlap-group5">
                          {/* <img
                            className="confirm-vector-19"
                            src="vector-41.svg"
                          /> */}
                        </div>
                      </div>
                      <div className="confirm-group-10">
                        <div className="confirm-overlap-group4">
                          {/* <img
                            className="confirm-vector-3"
                            src="vector-39.svg"
                          /> */}
                        </div>
                      </div>
                      <div className="confirm-group-4">
                        <div className="confirm-overlap-group9">
                          {/* <img
                            className="confirm-vector-17"
                            src="vector-51.svg"
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className="confirm-group-6">
                      <div className="confirm-overlap-group3-1">
                        {/* <img
                          className="confirm-vector-14"
                          src="vector-37.svg"
                        /> */}
                      </div>
                    </div>
                    <div className="confirm-flex-row">
                      <div className="confirm-group-14">
                        <div className="confirm-overlap-group8">
                          {/* <img
                            className="confirm-vector-1"
                            src="vector-49.svg"
                          /> */}
                        </div>
                      </div>
                      <div className="confirm-group-13">
                        <div className="confirm-overlap-group6">
                          {/* <img
                            className="confirm-vector-16"
                            src="vector-43.svg"
                          /> */}
                        </div>
                      </div>
                      <div className="confirm-flex-col-3">
                        <div className="confirm-group-1">
                          {/* <img
                            className="confirm-vector-15"
                            src="vector-45.svg"
                          /> */}
                        </div>
                        <div className="confirm-group-5">
                          <div className="confirm-overlap-group7">
                            {/* <img
                              className="confirm-vector-9"
                              src="vector-47.svg"
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="confirm-group-7">
                    <div className="confirm-flex-col-2">
                      <div className="confirm-overlap-group11">
                        {/* <img
                          className="confirm-vector-5"
                          src="vector-54.svg"
                        />
                        <img
                          className="confirm-vector-11"
                          src="vector-55.svg"
                        />
                      </div>
                      <img
                        className="confirm-vector-6"
                        src="vector-56.svg"
                      /> */}
                    </div>
                    <div className="confirm-flex-col-1">
                      <div className="confirm-overlap-group10">
                        {/* <img
                          className="confirm-vector-2"
                          src="vector-52.svg"
                        />
                        <img
                          className="confirm-vector-8"
                          src="vector-53.svg"
                        />
                      </div>
                      <div className="confirm-overlap-group12">
                        <img
                          className="confirm-vector-10"
                          src="vector-57.svg"
                        />
                        <img
                          className="confirm-vector-18"
                          src="vector-58.svg"
                        /> */}
                      </div>
                    </div>
                    <div className="confirm-flex-col">
                      {/* <img
                        className="confirm-vector-12"
                        src="vector-60.svg"
                      />
                      <img
                        className="confirm-vector"
                        src="vector-59.svg"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="confirm-youre-a-star valign-text-middle">You’re A Star!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ConfirmPurchaseModal