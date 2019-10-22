import React from 'react';
import ReactDOM from 'react-dom';

//pages
import App from './Pages/Home/App';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cadastrar from './Pages/Cadastrar';
import Usuario from './Pages/UsuarioLogado';

//routes
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

const RotaPrivada = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />
                )}
    />
)


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/cadastrar" component={Cadastrar} />
                <RotaPrivada path="/usuario" component={Usuario}/>
            </Switch>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
