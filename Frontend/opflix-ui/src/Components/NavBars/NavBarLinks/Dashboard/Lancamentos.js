import React, { Component } from "react";

export default class Lancamentos extends Component {

    constructor() {
        super();

        this.state = {
            showLancamentosMenu: false,
        }
        this.showMenuItems = this.showMenuItems.bind(this);
    }
    showMenuItems = (event) => {
        event.preventDefault();
        
        this.setState({
            showItemMenu: !this.state.showItemMenu,
        });
        setInterval(this.setState({
            showItemMenu: !this.state.showItemMenu,
        }), 5000);
    }
    // TODO: LÓGICA DAS AÇÕES DOS BOTÕES. APARECER A TABELA NO LISTAR, OS INPUTS NO CADASTRAR E ETC

    render() {
        return (
            <div>
                
                <button className="dash-nav-button" onMouseOver={this.showMenuItems}>
                    Lancamentos
                </button>
                    {
                        this.state.showItemMenu ? (
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