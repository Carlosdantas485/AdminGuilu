import React from 'react';

import { Container } from './styles';
import Header from '../../Components/header/index';
import { FaUserCircle } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";


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
                    <div className="infoUser">
                        <div className="headerUser">
                            <FaUserCircle  className="avatar" size={100} color="#999" /> 
                            <div className="trash">
                                <MdDelete size="30" className="icon" />
                            </div>
                        </div>
                        <div>
                            <h2>Carlos Alberto Dantas Filho</h2>
                            <h3>carlosdantas485@gmail.com</h3>
                        </div>  
                    </div>
                </div>

                <div className="user">
                    <div className="infoUser">
                        <div className="headerUser">
                            <FaUserCircle  className="avatar" size={100} color="#999" /> 
                            <div className="trash">
                                <MdDelete size="30" className="icon" />
                            </div>
                        </div>
                        <div>
                            <h2>Carlos Alberto Dantas Filho</h2>
                            <h3>carlosdantas485@gmail.com</h3>
                        </div>  
                    </div>
                </div>
                <div className="user">
                    <div className="infoUser">
                        <div className="headerUser">
                            <FaUserCircle  className="avatar" size={100} color="#999" /> 
                            <div className="trash">
                                <MdDelete size="30" className="icon" />
                            </div>
                        </div>
                        <div>
                            <h2>Carlos Alberto Dantas Filho</h2>
                            <h3>carlosdantas485@gmail.com</h3>
                        </div>  
                    </div>
                </div>
                <div className="user">
                    <div className="infoUser">
                        <div className="headerUser">
                            <FaUserCircle  className="avatar" size={100} color="#999" /> 
                            <div className="trash">
                                <MdDelete size="30" className="icon" />
                            </div>
                        </div>
                        <div>
                            <h2>Carlos Alberto Dantas Filho</h2>
                            <h3>carlosdantas485@gmail.com</h3>
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