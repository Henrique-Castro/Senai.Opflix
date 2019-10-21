import React, { Component } from 'react';

import favIcon from '../assets/images/favourite-heart.png';

// components
import NavBar from '../Components/NavBars/HomeNavBar';

export default class Cadastrar extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <section id='lancamentosFavoritos'>
                    <h2>Lançamentos favoritos</h2>
                    <div className="purple-line" />
                    <div className="scroll-container flex-box">
                        {/* TODO: Para cada favoritado, criar uma div com imagem */}
                    </div>
                </section>
                <section id="listaLancamentos">
                    <h2>Lançamentos</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Título</th>
                                <th>Sinopse</th>
                                <th>Categoria</th>
                                <th>Duração</th>
                                <th>Estreia</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* <div className="table-buttons flex-box">
                                <button><img src={favIcon} alt="Botão para favoritar" /></button>
                            </div> */}
                        </tbody>
                    </table>
                </section>
                <section id="listaCategorias">
                    <h2>Categorias</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>


                            {/* <div className="table-buttons flex-box">
                                <button><img src={favIcon} alt="Botão para favoritar" /></button>
                            </div> */}
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}