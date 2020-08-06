import React, {useState} from 'react';

import { Container, Edit } from './styles';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../../Components/header/index';
import { Link } from 'react-router-dom';

function Users() {
    document.title = "Guilu - Meu Usuario";

    const [showEdit, setShowEdit] = useState(false);
    const handleEditShow = () => {setShowEdit(true);};
    const handleEditClose = () => setShowEdit(false);
    return (
        <>
        <Header>
            <div>

            </div>
        </Header>
            <Container>
                <div className="container">
                    <div className="user">
                      <div className="avatar">
                        <FaUserCircle size="100" color="#999" />
                      </div>
                      <div className="infoUser">
                         <h1>Nome de usuario</h1>
                          <h2>emaildousuario@timeguilu.com</h2>
                      </div>
                    </div>
                    <div className="inputs">
                        <div className="box">
                            <div className="name">
                                <h3>Nome completo</h3>
                                <input type="text" placeholder="Nome do usuario" ></input>
                            </div>
                            <div className="email">
                                <h3>E-mail</h3>
                                <input type="text" placeholder="emaildousuario@timeguilu.com" ></input>
                            </div>
                        </div>

                        <div className="box-password">
                            <div className="password">
                                <h3>Senha</h3>
                                <input type="password" placeholder="Senha"></input>
                            </div>
                            <div className="rePassword">
                                <h3>Comfirmar Senha</h3>
                                <input type="password" placeholder="Comfirme sua senha"></input>
                            </div>
                        </div>

                    </div>
                    <div className="options">
                    <Link to="/home">
                            <button className="back">Voltar</button>
                        </Link>
                        <button className="save" onClick={()=> handleEditShow()}>Salvar</button>
                    </div>
                </div>
            </Container>

            <Edit open={showEdit} onClose={handleEditClose}>
                <div className="containerModal">
                    <p className="titleModal">Editar usuário do administrador</p>
                    <div className="line" />
                    <p> realmente desja editar as informações do administrador ?</p>
                    <div className="group">
                    <button
                        type="button"
                        className="back"
                        onClick={()=>handleEditClose()}
                    >
                        Não
                    </button>
                    <button
                        type="submit"
                        className="send"
                        onClick={()=>handleEditClose()}
                    >
                        Sim
                    </button>
                    </div>
                </div>
            </Edit>
        </>
    );
}

export default Users;
