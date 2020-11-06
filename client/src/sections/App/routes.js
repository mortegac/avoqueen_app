import React from 'react';
import {
    Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';

import history from './history';
import Applications from '../applications';
import Dashboard from '../dashboard';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Redirect from="/" exact to="/dashboard" />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/clientes" component={Applications} />
                <Route path="/ventas" component={Applications} />
                <Route path="/productos" component={Applications} />
                <Route path="/compras" component={Applications} />
            </Switch>
        </Router>
    );
}
