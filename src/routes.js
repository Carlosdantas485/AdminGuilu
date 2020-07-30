import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import InfoUser from './pages/infoUser';
import Dashboard from './pages/dashboard';
import NewUser from './pages/newUser';
import RecoverPassword from './pages/recoverPassword';
import Users from './pages/users';
import Company from './pages/company';
import NewCompany from './pages/NewCompany';

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
                <Route path="/usersList" component={Users} />
                <Route path="/company" component={Company} />
                <Route path="/NewCompany" component={NewCompany} />
            </Switch>
        </BrowserRouter>
    );
}
