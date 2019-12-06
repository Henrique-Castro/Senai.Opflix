import { Link } from "react-router-dom";
import React, { Component } from 'react';

export default class Sair extends Component {

    render() {
        return (
            <Link className="logout-nav-button" to="/">Sair</Link>
        );
    }
}
