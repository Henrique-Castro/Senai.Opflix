import React, { Component } from 'react';

export default class ListarLancamentos extends Component {
    render() {
        return (
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


                        <div className="table-buttons flex-box">
                            {/* <button>Deletar</button>
                            <button>Editar</button> */}
                        </div>
                    </tbody>
                </table>
            </section>
        );
    }
}