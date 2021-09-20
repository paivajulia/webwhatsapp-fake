import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./buscador.css";

function Buscador(){
    return(
        <div className="SearchContainer">
            <FontAwesomeIcon icon={faSearch} className="IconeSearch" />
            <input type="search" className="SearchInput" placeholder="Procurar contatos"/>

        </div>
    );
};

export default Buscador;