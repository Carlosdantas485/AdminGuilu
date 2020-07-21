import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/guilu_preto.jpeg';

function Login() {
    const navigation = useHistory();

    function nav() {
        navigation.push('home');
    }

    return (
        <>
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
                        <button type="button" onClick={nav}>
                            Entrar
                        </button>
                        {/* eslint-disable-next-line */}
                        <a>Esqueceu sua senha?</a>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;
