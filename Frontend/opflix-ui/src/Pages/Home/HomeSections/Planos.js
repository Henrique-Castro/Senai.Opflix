import React, { Component } from "react";
import '../../../assets/css/Planos.css';
//images
import flintstonesFundo from '../../../assets/images/cavernaFundoOpac.png';
import bugigangaFundo from '../../../assets/images/bugigangaOpac.png';
import mandaChuvaFundo from '../../../assets/images/mandaChuvaFundoOpac.png';
export default class Planos extends Component {


    // constructor(){
    //     super();
    //     this.state = {
    //         bugigangaState : "",
    //         cavernaState : "",
    //         mandaChuvaState : ""
    //     }
    // }

    // selectBugiganga = (event) =>{

    // }

    ordenarAssinatura = (event) =>{
        event.preventDefault();
        window.alert('Essa função ainda não está disponível, sinto muito.');
    }

    render() {
        return (
            <section id="planos">
                <h2>Escolha o plano que mais se adequa a você</h2>
                <form>
                    <div className="planos-div flex-box">

                        <div className="plano-caverna">
                            <img src={flintstonesFundo} />
                            <div className="content">
                                <h3>Plano caverna</h3>
                                <p>Ideal para usuários pouco assíduos.</p>
                                <p>Com um preço menor, este plano existe para democratizar nossa plataforma.</p>
                            </div>
                            <div className="caixa-preco flex-box">
                                <input id="caverna"type="radio" name="plano" value="R$9,99/Mês"/>
                                <label for="caverna">R$9,99/Mês</label>
                            </div>
                        </div>



                        <div className="plano-bugiganga">
                            <div className="content">
                                <img src={bugigangaFundo} />
                                <h3>Plano bugiganga</h3>
                                <p>Este aqui é para você que gosta de estar confortável com o que tem.</p>
                                <p>Preço adequado à familias que gostam de se manter unidas na hora do entretenimento.</p>
                            </div>
                            <div className="caixa-preco flex-box">
                                <input id="bugiganga" type="radio" name="plano" value="R$14,99/Mês" />
                                <label for="bugiganga">R$14,99/Mês</label>
                            </div>
                        </div>

                        <div className="plano-manda-chuva">
                            <img src={mandaChuvaFundo} />
                            <div className="content">
                                <h3>Plano manda-chuva</h3>
                                <p>Destinado para aqueles que querem ter uma liberdade maiior ao assistir.</p>
                                <p>Ao contrário do crime, este plano realmente compensa.</p>
                            </div>
                            <div className="caixa-preco flex-box">
                                <input id="mandaChuva" type="radio" name="plano" value="R$24,99/Mês" />
                                <label for="mandaChuva">R$24,99/Mês</label>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.ordenarAssinatura} className="planos-button" value="Prossegur" type="submit">Prosseguir</button>
                </form>
            </section >
        );
    }
}