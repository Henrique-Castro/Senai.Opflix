import React, { Component } from 'react';
import Axios from 'axios';
// import ListarCategorias from './ListarCategorias';
export default class CadastrarLancamento extends Component {

    constructor() {
        super();
        this.state = {
            titulo: "",
            sinopse: "",
            categoria: "",
            duracao: "",
            formato: "",
            estreia: "",
            qtdEpisodios: "",
            plataforma: "",
            visivel: "",
            status: "",
            listaCategorias: [],
            listaPlataformas: [],
            listaFormatos: []
        }
    }

    componentDidMount() {
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('usuario-opflix'); // for all requests
        this.listarCategorias();
        console.log(this.state.listaCategorias);
        this.listarPlataformas();
        this.listarFormatos();
    }

    listarCategorias = () => {
        Axios.get('http://192.168.4.224:5000/api/Categorias')
            .then(response => {
                this.setState({ listaCategorias: response.data });
                // console.log(this.state.lista);
            })
            .catch(error => {
                console.log(error)
            })
    }

    listarFormatos = () => {
        Axios.get('http://192.168.4.224:5000/api/Formatos')
            .then(response => {
                this.setState({ listaFormatos: response.data });
                // console.log(this.state.lista);
            })
            .catch(error => {
                console.log(error)
            })
    }

    listarPlataformas = () => {
        Axios.get('http://192.168.4.224:5000/api/Plataformas')
            .then(response => {
                this.setState({ listaPlataformas: response.data });
                // console.log(this.state.lista);
            })
            .catch(error => {
                console.log(error)
            })
    }
    changeTituloState = (event) => {
        this.setState({ titulo: event.target.value });
    }
    changeSinopseState = (event) => {
        this.setState({ sinopse: event.target.value });
    }
    changeCategoriaState = (event) => {
        this.setState({ categoria: event.target.value });
        console.log(this.state.categoria);
    }
    changeDuracaoState = (event) => {
        this.setState({ duracao: event.target.value });
    }
    changeFormatoState = (event) => {
        this.setState({ formato: event.target.value });
    }
    changeEstreiaState = (event) => {
        this.setState({ estreia: event.target.value });
    }
    changeQtdEpisodiosState = (event) => {
        this.setState({ qtdEpisodios: event.target.value });
    }
    changePlataformaState = (event) => {
        this.setState({ plataforma: event.target.value });
    }
    changeVisivelState = (event) => {
        if (event.target.value === "Sim") {
            this.setState({ visivel: 1 });
        }
        else if (event.target.vlaue === "Não") {
            this.setState({ visivel: 0 })
        }
    }
    cadastrar = async (event) => {
        await fetch("http://192.168.4.224:5000/api/Lancamentos", {
            method: "POST",
            body: JSON.stringify({
                titulo: this.state.titulo,
                sinopse: this.state.sinopse,
                categoria: this.state.categoria,
                duracao: this.state.duracao,
                formato: this.state.formato,
                estreia: this.state.estreia,
                qtdEpisodios: this.state.qtdEpisodios,
                plataforma: this.state.plataforma,
                visivel: this.state.visivel
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("usuario-opflix")
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(erro => console.log(erro))
            window.location.reload();
    }

    render() {
        return (
            <section id="cadastrarLancamento">
                <h2>Criar lançamento</h2>
                <div className="all-input-container">
                    <div className="half-input-container">
                        <p>Título</p>
                        <input type="text" onChange={this.changeTituloState} />
                        <p>Categoria</p>
                        <select>
                            {this.state.listaCategorias.map(categoria => {
                                return (
                                    <option value={categoria.idCategoria} onClick={this.changeCategoriaState}>{categoria.nome}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="half-input-container">
                        <p>Estréia</p>
                        <input type="date" onChange={this.changeEstreiaState} />
                        <p>Duração (minutos)</p>
                        <input type="number" onChange={this.changeDuracaoState} />
                    </div>

                </div>

                <div className="all-input-container">
                    <div className="half-input-container">
                        <p>Plataforma</p>
                        <select>
                            {this.state.listaPlataformas.map(plataforma => {
                                return (
                                    <option value={plataforma.idPlataforma} onClick={this.changePlataformaState}>{plataforma.nome}</option>
                                );
                            })}
                        </select>
                        <p>Formato</p>
                        <select>
                            {this.state.listaFormatos.map(formato => {
                                return (
                                    <option value={formato.idFormatoLancamento} onClick={this.changeFormatoState}>{formato.nome}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="half-input-container">
                        <p>QtdEpisódios</p>
                        <input type="number" onChange={this.changeQtdEpisodiosState} />
                    </div>
                </div>
                <div className="end-container">
                    <p>Este lançamento estará visível?</p>
                    <div className="radio-button-flex">
                        <div className="radio-button-content">
                            <input type="radio" name="visivel" value="Sim" />
                            <input type="radio" name="visivel" value="Não" />
                        </div>
                        <div className="radio-button-content">
                            <p>Sim</p>
                            <p>Não</p>
                        </div>
                    </div>
                </div>
                <div className="sinopse-input-container">
                    <p>Sinopse</p>
                    <div className="sinopse-input-content">
                        <textarea type="text" onChange={this.changeSinopseState} />
                        <div className="buttons-container">
                            <button>Limpar</button>
                            <button onClick={this.cadastrar}>Criar</button>
                            <p>{this.state.status}</p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}