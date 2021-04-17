import React, {useEffect,useState} from "react";
import "../style/donatePage.css";
import DonateCard from "./DonateCard";
import PurchaseModal from "./PurchaseModal";


import app from "../firebase"


const DonatePage = () => {
  let modalData
  const [children, setChildren] = useState();
  const [modalInfo, setModalInfo] = useState({
    isOpen:false,
    data: {}
  })

  const openModal = (id) =>{
    modalData = children[id]
    setModalInfo({isOpen:true,data:modalData})
  }
  const closeModal = () => {
    setModalInfo({isOpen:false})
  }
  useEffect(()=>{
    app.firestore().collection('recipient')
       .get()
       .then((query)=>{
         let data = []
         query.forEach((doc)=>{
           let child = doc.data()
           data.push(child.values)
         })
         setChildren(data)
       })
       .catch((error)=>{
          console.log(error)
       })
  },[])

  return (
    <div>
      <div className="group-67">
        <div className="overlap-group"></div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", margin:"-2.5%"}}>
      {children ? children.map((child,i)=>{
        return <DonateCard open={()=>{openModal(i)}} key={i}  {...child}/>
      }): null}
      </div>
      {modalInfo.isOpen ? <PurchaseModal close={closeModal} {...modalInfo.data}/> :null}
    </div>
  );
};

export default DonatePage
