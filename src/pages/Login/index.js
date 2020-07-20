import React from 'react';

import Header from '../../Components/header';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

function Login() {
    return (
        <>
            <Header title="signin">
                <div />
            </Header>
            <Container>
                <div className="cardDiv">
                    <div className="logoDiv">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="formDiv">
                        <p>Login</p>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="btnDiv">
                        <button type="button">Entrar</button>
                        {/* eslint-disable-next-line */}
                        <a>Esqueceu sua senha?</a>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;
