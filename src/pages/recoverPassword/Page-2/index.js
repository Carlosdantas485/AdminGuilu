import React from 'react';

import { Container } from './styles';
import Logo from '../../../assets/logo.jpeg';
import {Link} from 'react-router-dom';

function recoverPassword2() {
    document.title = "Guilu - Redefinir Senha";
    return (
        <>
            <Container>

                <div class="container" >
                    <div className="div-logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <h1>Redefinir Senha</h1>
                    <div className="confirm">
                    <h2> E-mail</h2>
                    <input type="text" placeholder="E-mail"/>

                    <h2>Codigo enviado para seu e-mail </h2>
                    <input type="text" placeholder="Codigo"/>

                    <h2> Nova senha </h2>
                    <input type="password" placeholder="Nova senha"/>

                    <h2> Confirme nova senha </h2>
                    <input type="password" placeholder="Confirmar senha"/>
                        <div className="recover-btns">
                            <Link to="/">
                                <button className="recover">Recuperar</button>
                            </Link>
                        </div>
                    </div>
                </div >
            </Container>
        </>
    );
}

export default recoverPassword2;
