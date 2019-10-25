import React, { Component } from 'react';
import Logo from "../assets/images/logoClaro.png";
import '../assets/css/Footer.css';
export default class Footer extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object 
    }

    voltarAoTopo = (event) => {
        event.preventDefault();
        window.scrollTo(0, this.myRef.current.offsetTop)
    }
    render() {
        return (
            <section id="footer">
                <img onClick={this.voltarAoTopo} src={Logo} alt="Opflix" />
                {/* <p>Voltar ao topo</p> */}
            </section>
        );
    }
}