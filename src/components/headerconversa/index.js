import React from "react";
import "./headerconversa.css";
import {BtDefault} from "../botao";
import {faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import imgteste from '../../img/profile.jpeg'


function HeaderConversa(){
    return(
        <div className="hdconversacontainer">
            <div className="hdconversaimg">
                <img src={imgteste} alt="" />
            </div>
            <div className="hdconversadescricao">
                <h1 className="hdconversatitle"> Sala1</h1>
                <p className ="hdconversaintegrantes"> Bruno e julia</p>
            </div>
            <BtDefault icon={faSearch} />
            <BtDefault icon={faEllipsisV}/>


        </div>
    );
};

export default HeaderConversa;