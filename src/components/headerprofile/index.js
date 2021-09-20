import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faCommentAlt} from "@fortawesome/free-solid-svg-icons";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import {BtDefault} from "../botao";


import './hp_style.css';
import profile from "../../img/profile.jpeg"


function Headerprofile(){
    return(
        <div className="profilecontainer"> 
           <div className="imageprofilecontainer">
              <img src={profile} className="profileimage" />
            </div>
           <BtDefault icon={faCanadianMapleLeaf}/>
           <BtDefault icon={faCommentAlt}/>
           <BtDefault icon={faEllipsisV}/>


        </div>
    )
}
export default Headerprofile