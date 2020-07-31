import React from 'react';

import Header from '../../../Components/header';
import { Container } from './styles';
import Logo from '../../../assets/logo.jpeg';


function recoverPassword2() {
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
                            <button className="back">Voltar</button>
                            <button className="recover">Recuperar</button>
                        </div>
                    </div>
                </div >
            </Container>
        </>
    );
}

export default recoverPassword2;
