import React, { Component } from 'react';
import NavBar from '../Components/NavBars/HomeNavBar';
export default class Cadastrar extends Component {


    constructor(){
        super();

        this.state = {
            nome : "",
            email : "",
            senha : "",
            confimacaoSenha : "",
        }
    }


    changeNomeState = (event) =>{
        this.setState({nome : event.target.value});
    }
    changeEmailState = (event) =>{
        this.setState({email : event.target.value});
    }
    changeSenhaState = (event) =>{
        this.setState({senha : event.target.value});
    }
    changeConfirmacaoSenhaState = (event) =>{
        this.setState({confirmacaoSenha : event.target.value});
    }

    cadastrar = () =>{
        
    }

    render() {
        return (
            <div>   
                <NavBar />
                <section id='cadastrar' className="flex-box">
                    <div className="container flex-box">
                        <div className="content">
                            <label>Nome</label>
                            <input type="text" onChange ={this.changeNomeState}/>
                            <label>Email</label>
                            <input type="email" onChange ={this.changeEmailState}/>
                            <label>Senha</label>
                            <input type="password" onChange ={this.changeSenhaState}/>
                            <label>confirmação de senha</label>
                            <input type="password" onChange ={this.changeConfirmacaoSenhaState}/>
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