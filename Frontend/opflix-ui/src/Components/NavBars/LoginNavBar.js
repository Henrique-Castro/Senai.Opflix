import React, { Component } from "react";
import Logo from "../../assets/images/logoClaro.png";
import { Link } from "react-router-dom";
import '../../assets/css/NavBar.css';
//Components

export default class LoginNavBar extends Component {
    render() {


        return (
            <nav className="flex-box">
                <h1>Opflix</h1>
                <Link to="/"><img className="logo" src={Logo} alt="Opflix logo" /></Link>
            </nav>
        );
    }
}
