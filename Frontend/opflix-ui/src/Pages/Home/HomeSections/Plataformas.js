import React, { Component } from "react";
export default class Plataformas extends Component {


    render() {
        return (
            <section id="plataformas flex-box">
                <div className="plataformas-image-box">
                    {/* TODO: Exportar do photoshop como png */}
                </div>
                <div className="plataformas-text">
                    <h2>Plataformas disponíveis</h2>
                    <p>Opflix está disponível em navegadores de internet, lojas de aplicativos móveis e em formato para desktop para você assistir de onde e quando quiser.</p>
                    <p>Aproveite esta oportunidade e <a>inicie seu teste gratuito</a>.</p>
                </div>
            </section>
        );
    }
}