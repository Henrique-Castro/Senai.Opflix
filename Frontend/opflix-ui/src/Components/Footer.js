import React, {Component} from 'react';
import Logo from "../assets/images/logoClaro.png";

export default class Footer extends Component{
    render(){
        return(
            <section id="footer">
                <img src={Logo} alt="Opflix"/>
                {/* <p>Voltar ao topo</p> */}
            </section>
        );
    }
}