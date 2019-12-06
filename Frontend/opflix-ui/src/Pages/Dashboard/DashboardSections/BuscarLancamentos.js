import React, {Component} from 'react';

export default class BuscarLancamentos extends Component{
    render(){
        return(
            <section id="buscarLancamentos" className="search-box">
                <input type='text' placeholder="Id ou nome do lancamento"/>
                <button className="search-button">Buscar</button>
            </section>
        );
    }
}