import React, { Component } from "react";
import Logo from "../../assets/images/logoClaro.png";
import { Link } from "react-router-dom";
import '../../assets/css/NavBar.css';
//Components
import Entrar from "./NavBarLinks/Comuns/Entrar";

export default class NavBar extends Component {
    render() {


        return (
            <nav className="flex-box">
                <h1>Opflix</h1>
                <img className="logo" src={Logo} alt="Opflix logo" />
                <Entrar />
            </nav>
        );
    }
}