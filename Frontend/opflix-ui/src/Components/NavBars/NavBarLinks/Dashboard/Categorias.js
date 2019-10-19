import React, { Component } from "react";

export default class Categorias extends Component {

    constructor() {
        super();

        this.state = {
            showCategoriasMenu: false,
        }
        this.showCategoriasMenu = this.showCategoriasMenu.bind(this);
    }
    showCategoriasMenu = (event) => {
        event.preventDefault();
        
        this.setState({
            showCategoriasMenu: !this.state.showCategoriasMenu,
        });
    }
    // TODO: LÓGICA DAS AÇÕES DOS BOTÕES. APARECER A TABELA NO LISTAR, OS INPUTS NO CADASTRAR E ETC

    render() {
        return (
            <div>
                
                <button onClick={this.showCategoriasMenu}>
                    Categorias
                </button>
                    {
                        this.state.showCategoriasMenu ? (
                            //CASE TRUE
                            <div className="drop-menu">
                                <button>Cadastrar</button>
                                <button>Listar</button>
                                <button>Buscar</button>
                            </div>
                        ) :
                            (
                                //CASE FALSE
                                <div/>
                            )
                    }
            </div>
        );
    }
}