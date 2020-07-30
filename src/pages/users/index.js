import React, {useState} from 'react';

import { Container, Actions } from './styles';
import Header from '../../Components/header';

import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Users() {
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteShow = () => {setShowDelete(true);};
    const handleDeleteClose = () => setShowDelete(false);
    return (
        <>
            <Header><div></div></Header>

        <Container>
            <div className="container">
                <div className="headerPage">
                    <h1>Lista de usuarios</h1>
                    <Link to="/home">
                        <button className="back">
                            Voltar
                        </button>
                    </Link>
                </div>

                <div className="list">
                    <div className="user">
                        <div className="headerUser">
                            <div className="infoUser" >
                                <h2 id="nameUser">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailUser">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen"/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="headerUser">
                            <div className="infoUser" >
                                <h2 id="nameUser">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailUser">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen"/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>


        <Actions open={showDelete} onClose={handleDeleteClose}>
            <div className="containerModal">
                <p className="titleModal">Excluir Usuário</p>
                <div className="line" />
                <p>Gostaria de excluir este usuário ?</p>
                <div className="group">
                <button
                    type="button"
                    className="back"
                    onClick={()=>handleDeleteClose()}
                >
                    Não
                </button>
                <button
                    type="submit"
                    className="send"
                    onClick={()=>handleDeleteClose()}
                >
                    Sim
                </button>
                </div>
            </div>
            </Actions>
        </>
    );
}

export default Users;
