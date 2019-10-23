import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {


    render() {
        return (
            <div className="flex-box fundo-banner">
                <div className="conteudo-banner">
                    <h2>Teste o Opflix Video gratuitamente.</h2>
                    <p>Assine o Opflix Video com a opção de plano teste e tenha acesso ilimitado ao conteúdo da plataforma por um mês.</p>
                    <div className="caixa-botoes">
                        <button className="botoes-banner">Já possui conta? Faça Login</button>
                        <div className="caixa-intermediaria">
                            <div className="traco-banner"></div> OU <div className="traco-banner"></div>
                        </div>
                        <button className="botoes-banner">Comece seu teste gratuito</button>
                    </div>
                </div>
                {/* PEGAR O FUNDO DO BANNER NO PHOTOSHOP COMO PNG */}
            </div>
        );
    }
}