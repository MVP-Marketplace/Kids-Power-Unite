import React, {useEffect,useState} from "react";
import "../style/donatePage.css";
import DonateCard from "./DonateCard";
import PurchaseModal from "./PurchaseModal";


import app from "../firebase"


const DonatePage = () => {
  const [children, setChildren] = useState();
  const [modalInfo, setModalInfo] = useState({
    isOpen:false,
    modalId: -1
  })

  const openModal = () =>{
    setModalInfo({isOpen:true})
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
        return <DonateCard key={i} {...child}/>
      }): null}
      </div>
      {modalInfo.isOpen ? <PurchaseModal/> :null}
    </div>
  );
};

export default DonatePage
