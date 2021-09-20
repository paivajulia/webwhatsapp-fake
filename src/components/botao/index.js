import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './botao.css'

 export function BtDefault(props){
    return(
        <div className="BtDefault">
            <FontAwesomeIcon icon={props.icon}/>

        </div>
    );
};

export function BtNav(props){
    return(
        <div>

        </div>
    );
};
