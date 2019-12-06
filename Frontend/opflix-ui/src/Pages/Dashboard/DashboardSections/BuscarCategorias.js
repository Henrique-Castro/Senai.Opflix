import React, {Component} from 'react';

export default class BuscarCategorias extends Component{
    render(){
        return(
            <section id="buscarCategorias" className="search-box">
                <input type='text' placeholder="Id ou nome da categoria"/>
                <button className="search-button">Buscar</button>
            </section>
        );
    }
}