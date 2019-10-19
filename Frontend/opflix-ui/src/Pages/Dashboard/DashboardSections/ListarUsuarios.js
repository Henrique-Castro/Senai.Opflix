import React, { Component } from 'react';

export default class ListarUsuarios extends Component {
    render() {
        return (
            <section id="listaUsuarios">
                <h2>Usuários</h2>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Id
                        </th>
                            <th>
                                Nome
                        </th>
                            <th>
                                Email
                        </th>
                            <th>
                                Assinatura
                        </th>
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