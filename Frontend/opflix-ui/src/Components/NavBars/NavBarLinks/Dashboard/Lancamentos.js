import React, { Component } from "react";

export default class Lancamentos extends Component {

    constructor() {
        super();

        this.state = {
            showLancamentosMenu: false,
        }
        this.showLancamentosMenu = this.showLancamentosMenu.bind(this);
    }
    showLancamentosMenu = (event) => {
        event.preventDefault();
        
        this.setState({
            showLancamentosMenu: !this.state.showLancamentosMenu,
        });
    }
    // TODO: LÓGICA DAS AÇÕES DOS BOTÕES. APARECER A TABELA NO LISTAR, OS INPUTS NO CADASTRAR E ETC

    render() {
        return (
            <div>
                
                <button onClick={this.showLancamentosMenu}>
                    Lancamentos
                </button>
                    {
                        this.state.showLancamentosMenu ? (
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