import React, {Component} from "react";
import logo from "../../assets/images/logoClaro.png";
export default class NavBar extends Component{


    render() {
        return(
            <nav className="flex-box">
                <h1><img src={logo} alt="Opflix logo"/></h1>
                <p className="navItem">Entrar</p>
            </nav>
        );
    }
}