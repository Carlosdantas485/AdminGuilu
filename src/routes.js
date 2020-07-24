import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import InfoUser from './pages/infoUser';
import Dashboard from './pages/dashboard';
import NewUser from './pages/newUser';
import RecoverPassword from './pages/recoverPassword';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/infoUser" component={InfoUser} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/newUser" component={NewUser} />
                <Route path="/recoverPassword" component={RecoverPassword} />
            </Switch>
        </BrowserRouter>
    );
}
