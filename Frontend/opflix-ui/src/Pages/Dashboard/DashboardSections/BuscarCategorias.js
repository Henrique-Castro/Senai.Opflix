import React, { Component } from 'react';

export default class BuscarCategorias extends Component {
    render() {
        return (
            <section id="buscarCategorias">
                <h2>Buscar categorias</h2>
                <div className="search-box">
                    <input type='text' placeholder="Id ou nome da categoria" />
                    <button className="search-button">Buscar</button>
                </div>
            </section>
        );
    }
}