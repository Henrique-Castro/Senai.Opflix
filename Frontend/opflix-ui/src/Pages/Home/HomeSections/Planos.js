import React, { Component } from "react";
export default class Planos extends Component {


    render() {
        return (
            <section id="planos">
                <h2>Escolha o plano que mais se adequa a você</h2>
                <form className="flex-box">
                    <div className="planos-div">
                        <div>
                            <h3>Plano caverna</h3>
                            <p>Ideal para usuários pouco assíduos.</p>
                            <p>Com um preço menor, este plano existe para democratizar nossa plataforma.</p>
                            <input type="radio" name="plano" value="R$9,99/Mês" />
                        </div>
                        <div>
                            <h3>Plano bugiganga</h3>
                            <p>Este aqui é para você que gosta de estar confortável com o que tem.</p>
                            <p>Preço adequado à familias que gostam de se manter unidas na hora do entretenimento.</p>
                            <input type="radio" name="plano" value="R$14,99/Mês" />
                        </div>
                        <div>
                            <h3>Plano manda-chuva</h3>
                            <p>Destinado para aqueles que querem ter uma liberdade maiior ao assistir.</p>
                            <p>Ao contrário do crime, este plano realmente compensa.</p>
                            <input type="radio" name="plano" value="R$24,99/Mês" />
                        </div>
                    </div>
                    <button value="Prossegur" type="submit" />
                </form>
            </section>
        );
    }
}