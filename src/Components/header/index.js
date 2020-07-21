import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Header } from './styles';
import Logo from '../../assets/guilu_preto.jpeg';

function header() {

    
    
   
    return (
        <Header>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="content">
                <div className="infoDiv">
                    <button >Nome de usuario</button>
                    <p className="email">nomedousuario@timeguilu.com.br</p>
                </div>
                <div className="avatar">
                    <FaUserCircle size="55" color="#999" />
                </div>
            </div>
        </Header>
    );
}
export default header;
