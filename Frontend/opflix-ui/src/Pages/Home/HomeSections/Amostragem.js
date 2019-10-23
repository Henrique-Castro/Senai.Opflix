import React, { Component } from "react";
//Images
import ultramanImg from "../../../assets/images/ultraman-700x525.jpg";
import esquiloImg from "../../../assets/images/esquilo_sem_grilo.png";
import corridaMalucaImg from "../../../assets/images/corrida_maluca.jpg";
import formigaTamanduaImg from "../../../assets/images/formiga_tamandua.png";
import formigaAtomicaImg from "../../../assets/images/formigaAtomica.png";
import falcaoBiocao from "../../../assets/images/falcaoAzulEBiocao.png";
//css
import '../../../assets/css/Amostragem.css';
export default class Amostragem extends Component {


    render() {
        return (
            <section id="amostragem" className="flex-box">
                {/* TODO: CONSIDERAR COLOCAR UMA DESCRIÇÃO DE CADA CONTEÚDO QUE APAREÇA COM O EVENTO MOUSE OVER */}
                <div className="parte-1">
                    <h3>Ultraman</h3>
                    <div className="opac-background">
                        <div className="content">
                            <img src={ultramanImg} alt="Imagem do personagem Ultraman com seus ante braços cruzados em forma de cruz, numa posição de defesa." />
                        </div>
                    </div>
                </div>
                <div className="parte-2">
                    <h3>Esquilo sem grilo</h3>
                    <div className="opac-background">
                        <div className="content">
                            <img src={esquiloImg} alt="Imagem do personagem Esquilo sem grilo mostrando sua coleção de armas cartunescas que ele carrega de baixo de seu sobretudo." />
                        </div>
                    </div>
                    <h3>Corrida maluca</h3>
                    <div className="opac-background">
                        <div className="content">
                            <img src={corridaMalucaImg} />
                        </div>
                    </div>
                </div>
                <div className="parte-3">
                    <h3>A formiga e o tamanduá</h3>
                    <div className="opac-background">
                        <div className="content">
                            <img src={formigaTamanduaImg} alt="Tamanduá olhando para a formiga de cima para baixo de forma confusa, não entendendo o que ela quer dizer" />
                        </div>
                    </div>
                    <h3>A formiga atômica</h3>
                    <div className="opac-background">
                        <div className="content">
                            <img src={formigaAtomicaImg} alt="Uma formiga em postura heróica trajando um capacete e um colete com a letra A." />
                        </div>
                    </div>
                    <h3>Falcão azul e Biocão</h3>
                    <div className="opac-background">
                        <div className="content">
                            <img src={falcaoBiocao} alt="Falcão azul e Biocão juntos em pose de alerta, procurando por inimigos." />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}