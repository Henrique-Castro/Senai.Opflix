import React, { Component } from 'react';
import Axios from 'axios';

export default class ListarUsuarios extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('usuario-opflix'); // for all requests
        this.listarUsuarios();
    }

    listarUsuarios = () => {
        Axios.get('http://192.168.4.224:5000/api/Usuarios')
            .then(response => { this.setState({ lista: response.data }) })
            .catch(erro => { console.log(erro) })
    }

    render() {
        return (
            <section id="listaUsuarios">
                <h2>Usuários</h2>
                <table className="table">
                    <thead>
                        <tr className="center-children thead-tr">
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
                                Permissão
                        </th>
                        <th>
                            Ações
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(usuario => {
                            return (
                                <tr className="center-children alternate-purple-background alternate-lateral-purple-borders">
                                    <td>{usuario.idUsuario}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.permissao}</td>
                                    <div className="table-buttons flex-box">
                                        <button>Deletar</button>
                                        <button>Editar</button>
                                    </div>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        );
    }
}