import React, { Component } from 'react';
import Axios from 'axios';
export default class ListarCategorias extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        this.listarCategorias();
    }

    listarCategorias = () => {
        Axios.get('http://192.168.4.224:5000/api/Categorias')
            .then(response => {
                this.setState({ lista: response.data });
                // console.log(this.state.lista);
            })
            .catch(error => {
                console.log(error)
            })
    }
    // construirTabela = (data) => {
    //     data.forEach(info => {
    //         return (
    //             <tr>
    //                 <td>{info.idCategoria}</td>
    //                 <td>{info.nome}</td>
    //                 <td>{info.descricao}</td>
    //             </tr>
    //         );
    //     })
    // }

    render() {
        return (
            <section id="listaCategorias">
                <h2>Categorias</h2>
                <table className="table">
                    <thead>
                        <tr className="center-children thead-tr">
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>♥</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(categoria =>{
                            return(
                                <tr className="center-children alternate-purple-background alternate-lateral-purple-borders">
                                    <td>{categoria.idCategoria}</td>
                                    <td>{categoria.nome}</td>
                                    <td>{categoria.descricao}</td>
                                </tr>
                            );
                        })}

                        {/* <div className="table-buttons flex-box">
                            <button>Deletar</button>
                            <button>Editar</button>
                        </div> */}
                    </tbody>
                </table>
            </section>
        );
    }
}