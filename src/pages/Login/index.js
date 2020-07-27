import React from 'react';

import { useHistory, Link } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/guilu_preto.jpeg';

function Login() {
    const History = useHistory();

    function nav() {
        History.push('home');
    }

    function recoverPassword() {
        History.push('recoverPassword');
    }

    return (
        <>
            <Container>
                
            <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
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
                        <Link className="recoverPassword" type="button" onClick={recoverPassword}>
                            Esqueceu sua senha ?
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;
