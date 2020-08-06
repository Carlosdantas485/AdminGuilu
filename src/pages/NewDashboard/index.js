import React, {useState} from 'react';

import { Container, Actions } from './styles';
import Header from '../../Components/header';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Users() {
    document.title = "Guilu - Cadastrar Empresa";

    const [showConfirm, setShowConfirm] = useState(false);
    const handleConfirmShow = () => {setShowConfirm(true);};
    const handleConfirmClose = () => setShowConfirm(false);
    return (
        <>
            <Header><div></div></Header>

            <Container>
                <div className="container">
                    <div className="Dashboard">
                        <div className="infoDashboard">
                            <h2>Cadastrar Nova Empresa</h2>
                            <Link to="/home">
                                <button className="back">Voltar</button>
                            </Link>
                        </div>
                    </div>

                    <div className="inputs">
                        <div className="box">
                            <div className="XML_LINK">
                                <h3>Link do XML</h3>
                                <input type="text" placeholder=" Insira o link " ></input>
                            </div>
                            <div className="import_pc">
                                <h3>Arquivo do seu computador</h3>
                                <div className="inport">
                                    <input type="text" placeholder=" Importar arquivo" ></input>
                                    <button className="save" ><a href="" download="">Importar</a></button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="options">
                        <button className="save" >Cadastrar</button>
                    </div>
                </div>
            </Container>


        <Actions open={showConfirm} onClose={handleConfirmClose}>
            <div className="containerModal">
                <p className="titleModal">Cadastrar Empresa</p>
                <div className="line" />
                <p>Gostaria de cadastrar esta empresa ?</p>
                <div className="group">
                <button
                    type="button"
                    className="back"
                    onClick={()=>handleConfirmClose()}
                >
                    Não
                </button>
                <button
                    type="submit"
                    className="send"
                    onClick={()=>handleConfirmClose()}
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
