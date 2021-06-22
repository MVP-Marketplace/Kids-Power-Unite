import React, {useState, useEffect} from "react";

const ProfileButton = (props) => {
  // onClick = {props.click(props.url)}
  let [selectedImg, setSelectedImg] = useState("");
  
  useEffect(()=>{
    props.click(selectedImg);
  }, [selectedImg]);

  return(
    <button onClick = {()=>{setSelectedImg(props.url)}}>
      <img src={props.url}></img>
    </button>
  )
}

export default ProfileButton