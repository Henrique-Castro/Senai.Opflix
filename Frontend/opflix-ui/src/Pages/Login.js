import React, { Component } from 'react';
import Axios from 'axios';
//img
import Fundo from '../assets/images/fundoLogin.png';

//component
import NavBar from '../Components/NavBars/LoginNavBar';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            senha: ""
        }
    }

    changeSenhaState = (event) => {
        this.setState({ senha: event.target.value });
    }
    changeEmailState = (event) => {
        this.setState({ email: event.target.value });
    }

    login = (event) => {
        // console.log('passou1');
        event.preventDefault();
        // const apiUrl = ;
        Axios.post('http://localhost:5000/api/Usuarios',{
                email : this.state.email,
                senha : this.state.senha
            }
        )
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <NavBar />
                <section id="login" className="flex-box">
                    <div>
                        <p>Email</p>
                        <input className="login-input" type="email" onChange={this.changeEmailState} />
                        <p>Senha</p>
                        <input className="login-input" type="password" onChange={this.changeSenhaState} />
                        <button className="login-button" value="Entrar" onClick={this.login} >Entrar</button>
                    </div>
                </section>
            </div>
        );
    }
}