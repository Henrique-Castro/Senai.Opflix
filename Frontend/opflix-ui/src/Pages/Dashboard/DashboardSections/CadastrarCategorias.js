import React, { Component } from 'react';

export default class CadastrarCategorias extends Component {
    render() {
        return (
            <section id="cadastrarCategorias">
                <h2>Criar categoria</h2>
                <div className="all-input-container">
                    <div className="half-input-container">
                        <p>Nome</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="sinopse-input-container">
                    <p>Sinopse</p>
                    <div className="sinopse-input-content flex-box">
                        <input type="text"/>
                        <div className="buttons-container">
                            <button>Limpar</button>
                            <button>Criar</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}