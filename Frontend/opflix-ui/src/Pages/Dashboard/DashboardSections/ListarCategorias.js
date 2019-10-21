import React, { Component } from 'react';
import Axios from 'axios';
export default class ListarCategorias extends Component {

    constructor(){
        super();
        this.state = {
            lista : []
        }
    }

    componentDidMount(){
        this.listarCategorias();
    } 
    
    listarCategorias = () =>{
        Axios.get('http://localhost:5000/api/Categorias')
        .then(response => {
            this.construirTabela(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }
    construirTabela = (data) =>{
        data.forEach(info =>{
            return(
                <tr>
                    <td>{info.idCategoria}</td>
                    <td>{info.nome}</td>
                    <td>{info.descricao}</td>
                </tr>
            );
        })
    }

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
                        {this.construirTabela}

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