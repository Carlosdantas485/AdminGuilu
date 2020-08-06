import React from 'react';

import { Container } from './styles';
import Logo from '../../../assets/logo.png';
import {Link} from 'react-router-dom';

function recoverPassword1() {
    document.title = "Guilu - Recuperar Senha";

    return (
        <>
            <Container>

                <div class="container" >
                    <div className="div-logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <h1>Recuperar Senha</h1>
                    <div className="confirm">
                        <input type="text" placeholder="E-mail"/>
                        <div className="recover-btns">
                            <Link to="/">
                                <button className="back">Voltar</button>
                            </Link>
                            <Link to="/recoverPassword2">
                                <button className="recover">Recuperar</button>
                            </Link>
                        </div>
                    </div>
                </div >
            </Container>
        </>
    );
}

export default recoverPassword1;
