import React, { Component } from 'react';

export default class CadastrarLancamento extends Component {
    render() {
        return (
            <section id="cadastrarLancamento">
                <h2>Criar lançamento</h2>
                <div className="all-input-container flex-box">
                    <div className="half-input-container">
                        <p>Título</p>
                        <input type="text" />
                        <p>Categoria</p>
                        <input type="text" />
                    </div>
                    <div className="half-input-container">
                        <p>Estréia</p>
                        <input type="text" />
                        <p>Duração</p>
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