import React, { Component } from 'react';
import NavBar from '../Components/NavBars/HomeNavBar';
export default class Cadastrar extends Component {
    render() {
        return (
            <div>   
                <NavBar />
                <section id='cadastrar' className="flex-box">
                    <div className="container flex-box">
                        <div className="content">
                            <label>Nome</label>
                            <input type="text" />
                            <label>Email</label>
                            <input type="email" />
                            <label>Senha</label>
                            <input type="password" />
                            <label>confirmação de senha</label>
                            <input type="password" />
                            <button>Cadastrar</button>
                        </div>
                        <div className="content">
                            <input type="image" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}