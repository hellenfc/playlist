import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <ul>
                <li className="logo"><img src={require("../assets/tv.png")} alt="tv-logo" className="img-header"/></li>
                <li><Link to={"/contenidos"}>Contenido</Link></li>
                <li><Link to={"/contadores"}>Contadores</Link></li>
            </ul>
        </div>
    );
}

export default Header;