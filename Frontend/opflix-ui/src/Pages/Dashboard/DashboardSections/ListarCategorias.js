import React, { Component } from 'react';

export default class ListarCategorias extends Component {
    render() {
        return (
            <section id="listaCategorias">
                <h2>Categorias</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>♥</th>
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