import React from 'react';

import { Container } from './styles';
import Header from '../../Components/header/index';
import { FaUserCircle } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";


function users() {
  

  return (
      <>
      <Header>
          <div/>
      </Header>
      <Container>
          <div className="container">
            <h1>Lista de usuarios</h1>

            <div className="list">
                <div className="user">
                    <div className="headerUser">
                        <div className="infoUser" >
                            <div className="boxInfo">
                                <h2 id="nameUser">Carlos Alberto Dantas Filho</h2>
                                <button className="edit">Editar</button>
                            </div>
                            <div className="boxInfo">
                                <h3 id="emailUser">carlosdantas485@timeguilu.com</h3>
                                <button className="edit">Editar</button>
                            </div>
                        </div> 
                        <div className="options">
                            <FiEdit2 size="20" className="icon" id="pen"/> 
                            <MdDelete size="20" className="icon" />
                        </div>
                    </div> 
                </div> 
                <div className="user">
                    <div className="headerUser">
                        <div className="infoUser" >
                            <div className="boxInfo">
                                <h2 id="nameUser">Carlos Alberto Dantas Filho</h2>
                                <button className="edit">Editar</button>
                            </div>
                            <div className="boxInfo">
                                <h3 id="emailUser">carlosdantas485@timeguilu.com</h3>
                                <button className="edit">Editar</button>
                            </div>
                        </div> 
                        <div className="options">
                            <FiEdit2 size="20" className="icon" id="pen"/> 
                            <MdDelete size="20" className="icon" />
                        </div>
                    </div> 
                </div>  
            </div>
          </div>
      </Container>
      </>
  );
}

export default users;