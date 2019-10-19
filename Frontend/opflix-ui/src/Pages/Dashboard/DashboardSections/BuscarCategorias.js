import React, {Component} from 'react';

export default class BuscarCategorias extends Component{
    render(){
        return(
            <section id="buscarCategorias" className="flex-box">
                <input type='text' placeholder="Id ou nome da categoria"/>
                <button>Buscar</button>
            </section>
        );
    }
}