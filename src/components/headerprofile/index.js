import React from "react";
import './hp_style.css';
import profile from "../../img/profile.jpeg"


function Headerprofile(){
    return(
        <div className="profilecontainer"> 
           <img src={profile} className="profileimage" />


        </div>
    )
}
export default Headerprofile