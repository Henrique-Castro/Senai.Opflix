import React, { Component } from 'react';
import Axios from 'axios';
export default class ListarLancamentos extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }
    componentDidMount() {

        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('usuario-opflix'); // for all requests
        // console.log(Axios.defaults.headers.common['Authorization']);
        this.listarLancamentos();
    }

    listarLancamentos = () => {
        Axios.get('http://192.168.4.224:5000/api/Lancamentos/Todos')
            .then(response => {
                this.setState({ lista: response.data });
                // console.log(this.state.lista);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <section id="listaLancamentos">
                <h2>Lançamentos</h2>
                <table className="table">
                    <thead>
                        <tr className="center-children thead-tr">
                            <th>Id</th>
                            <th>Título</th>
                            <th>Sinopse</th>
                            <th>Categoria</th>
                            <th>Duração</th>
                            <th>Estreia</th>
                            <th>Visivel</th>
                            <th>Plataforma</th>
                            <th>Qtd Episódios</th>
                            <th>Formato</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.lista.map(lancamento => {
                            return (
                                <tr className="center-children alternate-purple-background alternate-lateral-purple-borders">
                                    <td>{lancamento.idLancamento}</td>
                                    <td>{lancamento.titulo}</td>
                                    <td>{lancamento.sinopse}</td>
                                    <td>{lancamento.categoria}</td>
                                    <td>{lancamento.duracao}</td>
                                    <td>{lancamento.estreia}</td>
                                    <td>{lancamento.visivel}</td>
                                    <td>{lancamento.plataforma}</td>
                                    <td>{lancamento.qtdEpisodios}</td>
                                    <td>{lancamento.formato}</td>
                                </tr>
                            );
                        })}

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