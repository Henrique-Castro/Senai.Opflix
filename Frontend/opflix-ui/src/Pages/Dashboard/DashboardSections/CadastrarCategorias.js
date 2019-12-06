import React, { Component } from 'react';

export default class CadastrarCategorias extends Component {

    constructor(){
        super();

        this.state = {
            nomeCategoria : "",
            descricaoCategoria : ""
        }
    }

    changeNomeCategoriaState = (event) =>{
        this.setState({nomeCategoria : event.target.value});
    }
    changeDescricaoCategoriaState = (event) =>{
        this.setState({descricaoCategoria : event.target.value});
    }

    cadastrarCategoria = (event) =>{
        event.preventDefault();
        fetch('http://localhost:5000/api/Categorias',{
            method : "POST",
            body : JSON.stringify({
                nome : this.state.nomeCategoria,
                descricao : this.state.descricaoCategoria
            }),
            headers :{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem('usuario-opflix')
            }
        })
        // .then(response => listarCategorias())
        .catch(error => console.log(error))
    }

    render() {
        return (
            <section id="cadastrarCategorias">
                <h2>Criar categoria</h2>
                <div className="all-input-container">
                    <div className="half-input-container">
                        <p>Nome</p>
                        <input type="text" onChange={this.changeNomeCategoriaState}/>
                    </div>
                </div>
                <div className="sinopse-input-container">
                    <p>Descrição</p>
                    <div className="sinopse-input-content">
                        <input type="text" onChange={this.changeDescricaoCategoriaState}/>
                        <div className="buttons-container">
                            <button>Limpar</button>
                            <button onClick ={this.cadastrarCategoria}>Criar</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}