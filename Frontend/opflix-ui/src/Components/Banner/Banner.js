import React, {Component} from "react";
export default class Header extends Component{


    render() {
        return(
            <div className="flex-box fundo-banner">
                <div className="conteúdo-banner">
                    <h2>Teste o Opflix Video gratuitamente.</h2>
                    <p>Assine o Opflix Video com a opção de plano teste e tenha acesso ilimitado ao conteúdo da plataforma por um mês.</p>
                    <div className="caixa-botoes">
                        <button className="botoes-banner">Já possui conta? Faça Login</button>
                        <div className="traco-banner"/> OU <div className="traco-banner"/>
                        <button className="botoes-banner">Comece seu teste gratuito</button>
                    </div>
                </div>
                {/* PEGAR O FUNDO DO BANNER NO PHOTOSHOP COMO PNG */}
            </div>
        );
    }
}