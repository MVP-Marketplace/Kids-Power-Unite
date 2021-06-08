import React, {useState, useEffect} from "react";
import ProfileButton from "./ProfileButton";

const ProfilePictures = (props) => {
  // click{()=>{onButtonClick()}}
  // props.setSelectedPic(url);

  const onButtonClick = (url) =>{
    props.setSelectedPic(url);
  }
  return(
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", margin:"-2.5%"}}>
      {props.pictures.map((picture)=>{
        return <ProfileButton click={onButtonClick} url={picture}/>
      })}
    </div>
  )
}

export default ProfilePictures