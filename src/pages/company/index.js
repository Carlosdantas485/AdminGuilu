import React, {useState} from 'react';

import { Container, Actions } from './styles';
import Header from '../../Components/header';

import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Companys() {
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteShow = () => {setShowDelete(true);};
    const handleDeleteClose = () => setShowDelete(false);
    return (
        <>
            <Header><div></div></Header>

        <Container>
            <div className="container">
                <div className="headerPage">
                    <h1>Lista De Empresas</h1>
                    <Link to="/home">
                        <button className="back">
                            Voltar
                        </button>
                    </Link>
                </div>

                <div className="list">
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2>Guilu Undergound</h2>
                                <h2>GuiluUndergound@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen"/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2>Guilu of legends</h2>
                                <h2>Guiluoflegends@timeguilu.com</h2>
                            </div>
                            <div className="options">
                                <FiEdit2 size="20" className="icon" id="pen"/>
                                <MdDelete size="20" className="icon" onClick={() => handleDeleteShow()}/>
                            </div>
                        </div>
                    </div>
                    <div className="Company">
                        <div className="headerCompany">
                            <div className="infoCompany" >
                                <h2>Guilu Hero</h2>
                                <h2>GuiluHero@timeguilu.com</h2>
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
                <p className="titleModal">Excluir Empresa</p>
                <div className="line" />
                <p>Gostaria de excluir esta empresa ?</p>
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

export default Companys;
