import React from 'react';

import Header from '../../../Components/header';
import { Container } from './styles';
import Logo from '../../../assets/logo.jpeg';

function recoverPassword1() {
    return (
        <>
            <Header>
                <div/>
            </Header>

            <Container>
                <div class="container" >
                    <div className="div-logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <h1>Recuperar Senha</h1>
                    <div className="confirm">
                        <input type="text" placeholder="E-mail"/>
                        <div className="recover-btns">
                        <button className="back">Voltar</button>
                        <button className="recover">Recuperar</button>
                        </div>
                    </div>
                </div >
            </Container>
        </>
    );
}

export default recoverPassword1;
