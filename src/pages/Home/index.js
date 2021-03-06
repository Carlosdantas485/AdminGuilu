import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../Components/header/index';

function Home() {
        document.title = "Guilu - Home";

    return (
        <>
            <Header>
                <div />
            </Header>

            <Container>

                <div className="container">
                    <div className="box" id="users">
                        <h1>Usuários</h1>
                        <div className="Option_Home">
                            <Link className="link" to="newCompany">
                                <h2>Registrar Empresa</h2>
                                <p className="info-box">
                                    Cadastre uma no empresa na plataforma da WIINNER.
                                </p>
                            </Link>
                        </div>
                        <div className="Option_Home">
                            <Link className="link" to="company">
                                <h2>Listar Empresa</h2>

                                <p className="info-box">
                                    Veja a lista completa de todas as empresas
                                    participando da WIINNER.
                                </p>
                            </Link>
                        </div>
                        <div className="Option_Home">
                            <Link className="link" to="/newUser">
                                <h2>Registrar Usuário</h2>

                                <p className="info-box">
                                    Cadastre um novo usuário pertencente a uma empresa.
                                </p>
                            </Link>
                        </div>
                        <div className="Option_Home">
                            <Link className="link" to="/usersList">
                                <h2>Listar Usuário</h2>

                                <p className="info-box">
                                    Veja todas as informações dos usuários
                                    cadastrados.
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="box" id="dashboard">
                        <h1>Dashboard</h1>
                            <div className="Option_Home">
                                <Link  className="link"to="/dashboard">
                                    <h2>Dashboard</h2>

                                    <p className="info-box">Vizualize as principais informações.</p>
                                </Link>
                            </div>
                        <div className="Option_Home">
                            <Link className="link" to="/NewDashboard">
                                <h2>Adicionar Dashboard</h2>

                                <p className="info-box">
                                    Adicione um Dashboard para obter várias informações
                                    importantes.
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="box" id="archive">
                        <h1>Arquivos</h1>
                        <div className="Option_Home">
                            <Link className="link" to="/NewXML">
                                <h2>XML por Link</h2>

                                <p className="info-box">Vizualize as principais informações.</p>
                            </Link>
                        </div>
                        <div className="Option_Home">
                            <Link className="link" to="">
                                <h2>Historico de uploads</h2>

                                <p className="info-box">
                                    Adicione um Dashboard para obter várias informações
                                    importantes.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
}

export default Home;
