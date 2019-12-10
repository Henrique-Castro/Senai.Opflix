import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logoClaro.png";
import Axios from 'axios';
import '../../assets/css/Dashboard.css';
//Components
// import NavBar from '../Components/NavBars/DashboardNavBar';
import Categorias from '../../Components/NavBars/NavBarLinks/Dashboard/Categorias';
import Lancamentos from '../../Components/NavBars/NavBarLinks/Dashboard/Lancamentos';
import Usuarios from '../../Components/NavBars/NavBarLinks/Dashboard/Usuarios';
import Sair from '../../Components/NavBars/NavBarLinks/Comuns/Sair';
import BuscarLancamentos from './DashboardSections/BuscarLancamentos';
import BuscarCategorias from "./DashboardSections/BuscarCategorias";
import CadastrarLancamento from "./DashboardSections/CadastrarLancamento";
import CadastrarCategoria from "./DashboardSections/CadastrarCategorias";
import ListaUsuarios from "./DashboardSections/ListarUsuarios";
import ListaCategorias from "./DashboardSections/ListarCategorias";
import ListaLancamentos from "./DashboardSections/ListarLancamentos";

export default class Dashboard extends Component {
    render() {
        return (
            <section id="dashboard">
                <nav className="flex-box">
                    <img src={Logo} />
                    <Categorias />
                    <Lancamentos />
                    <Usuarios />
                    <Sair />
                </nav>
                <div className="buscar">
                    <BuscarLancamentos />
                    <BuscarCategorias />
                </div>
                <CadastrarLancamento />
                <CadastrarCategoria />
                <div className="listas">
                    <ListaUsuarios />
                    <ListaCategorias />
                    <ListaLancamentos />
                </div>
            </section>
        );
    }
}