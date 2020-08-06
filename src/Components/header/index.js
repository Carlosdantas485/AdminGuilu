import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { Header } from './styles';
import { IoIosPower } from "react-icons/io";
import Logo from '../../assets/logo.png';

function header(){
    return (
        <Header>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="content">
                <div className="infoDiv">
                    <Link className="nameUser" to="infoUser" >Nome de usuario</Link>
                    <p className="email">nomedousuario@timeguilu.com.br</p>
                </div>
                <div className="avatar">
                    <FaUserCircle size="50" color="#999" />
                </div>
                <Link to="/" className="exit1">
                    <div >
                        <IoIosPower size="25" color="#fff"></IoIosPower>
                    </div>
                </Link>

            </div>
            <Link to="/" className="exit2">
                <div >
                    <IoIosPower size="25" color="#fff"></IoIosPower>
                </div>
            </Link>

        </Header>
    );
}
export default header;
