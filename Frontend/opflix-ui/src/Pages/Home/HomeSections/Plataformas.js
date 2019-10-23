import React, { Component } from "react";
import '../../../assets/css/style.css';
import '../../../assets/css/Plataformas.css';
import plataformasImg from '../../../assets/images/plataformasImage.png';
export default class Plataformas extends Component {


    render() {
        return (
            <section id="plataformas" className="flex-box">
                <div className="plataformas-image-box">
                    {/* TODO: Exportar do photoshop como png */}
                    <img src={plataformasImg} className="imgPlataformas" alt="Imagem representando todas as plataformas onde o Opflix está disponível. São elas: tablet, navegadores, área de trabalho e smart phones."/>
                </div>
                <div className="plataformas-text">
                    <h2>Plataformas disponíveis</h2>
                    <p>Opflix está disponível em navegadores de internet, lojas de aplicativos móveis e em formato para desktop para você assistir de onde e quando quiser.</p>
                    <p className="plataforma-p-link">Aproveite esta oportunidade e <a className="plataforma-link">inicie seu teste gratuito</a>.</p>
                </div>
            </section>
        );
    }
}