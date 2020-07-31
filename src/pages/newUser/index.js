import React, {useState} from 'react';
import { Container, Actions } from './styles';
import Header from '../../Components/header';
import Logo from '../../assets/logo.jpeg';
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
                    <div className="Company">
                        <div className="infoCompany">
                            <img clasName="logo" src={Logo}/>
                            <h2>Cadastrar Novo Usuário</h2>
                        </div>
                    </div>

                    <div className="inputs">
                        <div className="box">
                            <div className="user">
                                <h3>Usuário</h3>
                                <input type="text" placeholder="  Nome do usuários" ></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="email">
                                <h3>E-mail</h3>
                                <input type="text" placeholder=" E-mail"></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="password">
                                <h3>Senha</h3>
                                <input type="text" placeholder="  Senha"></input>
                            </div>
                            <div className="confirm">
                                <h3>Confirmar Senha</h3>
                                <input type="text" placeholder="  Confirmar senha"></input>
                            </div>
                        </div>

                    </div>
                    <div className="options">
                        <Link to="/home">
                            <button className="back">Voltar</button>
                        </Link>
                            <button className="save" onClick={() => handleDeleteShow()}>Cadastrar</button>
                    </div>
                </div>
            </Container>


        <Actions open={showDelete} onClose={handleDeleteClose}>
            <div className="containerModal">
                <p className="titleModal">Cadastrar Usuário</p>
                <div className="line" />
                <p>Gostaria de cadastrar esta usuário ?</p>
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
