import React from 'react';
import { Header } from './styles';
import Logo from '../../assets/logo.png';

function header() {
    return (
        <Header>
            <img src={Logo} alt="logo" />
            <div className="infoDiv">
                <p>Nome de usuario</p>
                <p>nomedousuario@timeguilu.com.br</p>
            </div>
            <div className="avatar" />
        </Header>
    );
}
export default header;
