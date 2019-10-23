import { Link } from "react-router-dom";
import React, { Component } from 'react';

export default class Entrar extends Component {

    render() {
        return (
            <div>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>
                <Link className="nav-item nav-link" to="/login" style={
                    {
                        color: '#9a75d9',
                        textDecoration: 'none',
                        fontFamily: 'Roboto',
                        fontSize: '1.4em'
                    }}>Entrar</Link>
            </div>
        );
    }
}
