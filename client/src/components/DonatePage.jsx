import React, { useEffect, useState } from "react";
import "../style/donatePage.css";
import DonateCard from "./DonateCard";
import PurchaseModal from "./PurchaseModal";
import ConfirmPurchaseModal from "./ConfirmPurchaseModal";

import app from "../firebase";
import { Justify } from "react-bootstrap-icons";

const DonatePage = () => {
  let modalData;
  const [children, setChildren] = useState();
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    data: {},
  });
  const [confirmModalInfo, setConfirmModalInfo] = useState({});

  const [confirmPurchase, setConfirmPurchase] = useState(false);

  const openModal = (id) => {
    modalData = children[id];
    setModalInfo({ isOpen: true, data: modalData });
    setConfirmModalInfo(modalData);
  };
  const closeModal = () => {
    setModalInfo({ isOpen: false });
  };

  const openConfirmModal = () => {
    setConfirmPurchase(true);
    setModalInfo({ isOpen: false });
  };

  const closeConfirmModal = () => {
    setConfirmPurchase(false);
  };

  const updatePurchase = (nickName) => {
    // let childQuery = app.firestore().collection('recipient')
    //                     .where("values.nickname",'==',nickName)
    let childRef = app.firestore().collection("recipient").doc(nickName);
    childRef
      .update({
        "values.status": "complete",
      })
      .then(() => {
        window.location.reload();
      });
    // childQuery.get().then(function(querySnapshot) {
    //                   querySnapshot.forEach(function(doc) {
    //                         doc.ref.update({
    //                           status:"purchased"
    //                         });
    //                 });
    //                 window.location.reload();
    //               });
  }
  
  useEffect(()=>{ 
    getActiveChildren();
  }, []);
  

  const getActiveChildren = async () => {
    await app
      .firestore()
      .collection("recipient")
      .where("values.status", "==", "in progress")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          let child = doc.data();
          data.push(child.values);  
        });
        setChildren(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <div className="group-67">
        <div className="overlap-group"></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "-2.5%",
          padding:"5%",
          justifyContent:"space-evenly"
        }}
      >
        {children
          ? children.map((child, i) => {
              return (
                <DonateCard
                  open={() => {
                    openModal(i);
                  }}
                  key={i}
                  {...child}
                />
              );
            })
          : null}
      </div>
      {modalInfo.isOpen ? (
        <PurchaseModal
          openConfirm={openConfirmModal}
          close={closeModal}
          {...modalInfo.data}
        />
      ) : null}
      {confirmPurchase ? (
        <ConfirmPurchaseModal
          updatePurchase={() => updatePurchase(confirmModalInfo.nickname)}
          closeConfirm={closeConfirmModal}
          {...confirmModalInfo}
        />
      ) : <h1>No Donations today! Check back soon!</h1>}
    </div>
  );
};

export default DonatePage;
