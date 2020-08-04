import React, {useState} from 'react';

import { Container, Actions, Edit } from './styles';
import Header from '../../Components/header';

import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Companys() {

        document.title = "Guilu - Empresas";

    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteShow = () => {setShowDelete(true);};
    const handleDeleteClose = () => setShowDelete(false);

    const [showEdit, setShowEdit] = useState(false);
    const handleEditShow = () => {setShowEdit(true);};
    const handleEditClose = () => setShowEdit(false);
    return (
        <>
            <Header><div></div></Header>

        <Container>
            <div className="container">
                <div className="headerPage">
                    <h1>Lista de Empresas</h1>
                    <div className="btn-back">
                        <Link to="/home">
                            <button className="back">
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="list">
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2 id="nameCompany">Carlos Alberto Dantas Filho</h2>
                                <h2 id="emailCompany">carlosdantas485@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen" onClick={() => handleEditShow()}/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>


        <Actions open={showDelete} onClose={handleDeleteClose}>
            <div className="containerModal">
                <p className="titleModal">Excluir Empresa</p>
                <div className="line" />
                <p>Gostaria de excluir este empresa ?</p>
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
            <Edit open={showEdit} onClose={handleEditClose}>
                <div className="containerModal">
                    <p className="titleModal">Editar Empresa</p>
                    <div className="line" />
                    <div className="inputs-modal">
                        <input placeholder="Nome da empresa"/>
                        <input placeholder="E-mail da empresa"/>
                    </div>
                    <div className="group">
                    <button
                        type="button"
                        className="back"
                        onClick={()=>handleEditClose()}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="send"
                        onClick={()=>handleEditClose()}
                    >
                        Editar
                    </button>
                    </div>
                </div>
            </Edit>
        </>
    );
}

export default Companys;
