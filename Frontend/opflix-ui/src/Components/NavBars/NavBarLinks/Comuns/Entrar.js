import { Link } from "react-router-dom";
import React, { Component } from 'react';

export default class Entrar extends Component {

    render() {
        return (
            <Link className="nav-item nav-link" to="/login">Entrar</Link>
        );
    }
}
