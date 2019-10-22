import React, { Component } from 'react';
import Axios from 'axios';
import { parseJwt } from "../services/auth";

//css
import '../assets/css/NavBar.css';
import '../assets/css/Login.css';
//img
import Fundo from '../assets/images/fundoLogin.png';

//component
import NavBar from '../Components/NavBars/LoginNavBar';
import { parse } from '@babel/parser';
import { objectExpression } from '@babel/types';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            error: ""
        }
    }

    changeSenhaState = (event) => {
        this.setState({ senha: event.target.value });
    }
    changeEmailState = (event) => {
        this.setState({ email: event.target.value });
    }

    login = () => {
        // console.log('passou1');
        // const apiUrl = ;
        Axios.post('http://localhost:5000/api/Usuarios/Login', {
            email: this.state.email,
            senha: this.state.senha
        }
        )
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('usuario-opflix', response.data.token)
                    if (parseJwt().Permissao === "ADMINISTRADOR") {
                        this.props.history.push('/dashboard')
                    }
                    else{
                        this.props.history.push('/usuario')
                    }
                }
                else {
                    this.props.history.push('/login')
                    this.setState({ error: 'Email ou senha incorretos.' })
                }
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: 'Email ou senha incorretos.' })
            });

        // window.location.pathname.includes('/usuario');
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
                        <p className="mensasgem-erro">{this.state.error}</p>
                        <button className="login-button" value="Entrar" onClick={this.login} >Entrar</button>
                    </div>
                </section>
            </div>
        );
    }
}