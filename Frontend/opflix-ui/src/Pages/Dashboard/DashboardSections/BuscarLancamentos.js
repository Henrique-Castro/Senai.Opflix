import React, {Component} from 'react';

export default class BuscarLancamentos extends Component{
    render(){
        return(
            <section id="buscarLancamentos" className="flex-box">
                <input type='text' placeholder="Id ou nome do lancamento"/>
                <button>Buscar</button>
            </section>
        );
    }
}