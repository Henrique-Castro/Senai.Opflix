import React, { Component } from "react";
import Logo from "../../assets/images/logoClaro.png";
import { Link } from "react-router-dom";

//Components
import Entrar from "./NavBarLinks/Comuns/Entrar";

export default class NavBar extends Component {
    render() {


        return (
            <nav className="flex-box">
                <h1><img src={Logo} alt="Opflix logo" /></h1>
                <Entrar />
            </nav>
        );
    }
}