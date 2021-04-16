import React, {useEffect,useState} from "react";
import "../style/donatePage.css";
import DonateCard from "./DonateCard";

import app from "../firebase"


const DonatePage = () => {
  const [children, setChildren] = useState();

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
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", margin:"-5px"}}>
      {children ? children.map((child)=>{
        return <DonateCard {...child}/>
      }): null}
      </div>
    </div>
  );
};

export default DonatePage
