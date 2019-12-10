import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';
import Axios from 'axios';
export default class BuscarLancamentos extends Component {
    
        constructor(){
            super();
            this.state={
                inputState:"",
                itemEncontrado:""
            }
        }
        
        searchItem = (event) =>{
            Axios()
        }

    render() {
        return (
            <section id="buscarLancamentos">
                <h2>Buscar lançamentos</h2>
                <div className="search-box">
                    <input type='text' placeholder="Id ou nome do lancamento" />
                    <button className="search-button">Buscar</button>
                </div>
                <div className="encontrado">

                </div>
            </section >
        );
    }
}