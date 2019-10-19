import React, { Component } from "react";
import Logo from "../../assets/images/logoClaro.png";
import { Link } from "react-router-dom";

//Components

export default class LoginNavBar extends Component {
    render() {


        return (
            <nav className="flex-box">
                <h1><img src={Logo} alt="Opflix logo" /></h1>
            </nav>
        );
    }
}
