import React, { Component } from "react";

export default class Usuarios extends Component {

    constructor() {
        super();

        this.state = {
            showUsuariosMenu: false,
        }
        this.showUsuariosMenu = this.showUsuariosMenu.bind(this);
    }
    showUsuariosMenu = (event) => {
        event.preventDefault();
        
        this.setState({
            showUsuariosMenu: !this.state.showUsuariosMenu,
        });
    }
    // TODO: LÓGICA DAS AÇÕES DOS BOTÕES. APARECER A TABELA NO LISTAR, OS INPUTS NO CADASTRAR E ETC

    render() {
        return (
            <div>
                
                <button onClick={this.showUsuariosMenu}>
                    Usuários
                </button>
                    {
                        this.state.showUsuariosMenu ? (
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