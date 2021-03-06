import React, {useState} from 'react';

import { Container, Actions } from './styles';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';



function XML() {
    document.title = "Guilu - Cadastrar XML";

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
                            <h2>Cadastrar XML</h2>
                            <Link to="/home">
                                <button className="back">Voltar</button>
                            </Link>
                        </div>
                    </div>

                    <div className="inputs">
                        <div className="box">
                            <div className="XML_LINK">
                                <h3>Link do XML</h3>
                                <input type="text" placeholder=" Insira o link "  ></input>
                            </div>
                            <div className="import_pc">
                                <h3>Arquivo do seu computador</h3>
                                <input type="file" id="file" accept=".xml"/>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <button className="save" onClick={()=> handleConfirmShow()} >Adicionar</button>
                    </div>
                </div>
            </Container>

            <Actions open={showConfirm} onClose={handleConfirmClose}>
                <div className="containerModal">
                    <p className="titleModal">Cadastrar XML</p>
                    <div className="line" />
                    <p>Gostaria de cadastrar este XML ?</p>
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

export default XML;
