import React, {useState} from 'react';

import { Container, Edit } from './styles';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../../Components/header/index';


import { Link } from 'react-router-dom';


function Users() {
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
                                <input type="text" placeholder="Nome completo" ></input>
                            </div>
                            <div className="cel">
                                <h3>Celular</h3>
                                <input type="text" placeholder="(XX) XXXXX-XXXX" ></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="email">
                                <h3>E-mail</h3>
                                  <input type="text" placeholder="E-mail"/>
                            </div>
                            <div className="cpf">
                                <h3>CPF/CNPJ</h3>
                                    <input type="text" placeholder="CPF/CNPJ"></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="cep">
                                <h3>Cep</h3>
                                <input type="text" placeholder="XXXXX-XXX"></input>
                            </div>
                            <div className="number">
                                <h3>Numero</h3>
                                <input type="text" placeholder="Numero"></input>
                            </div>
                            <div className="complement">
                                <h3>Complemento</h3>
                                <input type="text" placeholder="Rua do usuario"></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="bairro">
                                <h3>Bairro</h3>
                                <input type="text" placeholder="Bairro do usuario"></input>
                            </div>
                            <div className="logradouro">
                                <h3>Logradouro</h3>
                                <input type="text" placeholder="Logradouro do usuario"></input>
                            </div>
                        </div>

                        <div className="box">
                            <div className="city">
                                <h3>Cidade</h3>
                                <input type="text" placeholder="Cidade do usuaruio"></input>
                            </div>
                            <div className="uf">
                                <label for="cars" className="ufs">UF</label>

                                <select name="Uf" id="uf">
                                    <option value="Acre">AC</option>
                                    <option value="Alagoas">AL</option>
                                    <option value="Amapá">AP</option>
                                    <option value="Amazonas">AM</option>
                                    <option value="Bahia">BA</option>
                                    <option value="Ceará">CE</option>
                                    <option value="Distrito Federal">DF</option>
                                    <option value="Espirito Santo">ES</option>
                                    <option value="Goiás">GO</option>
                                    <option value="Maranhão">MA</option>
                                    <option value="Mato Grosso">MT</option>
                                    <option value="Mato Grosso do Sul">MS</option>
                                    <option value="Minas Gerais">MG</option>
                                    <option value="Pará">PA</option>
                                    <option value="Paraiba">PB</option>
                                    <option value="Pernambuco">PE</option>
                                    <option value="Piauí">PI</option>
                                    <option value="Rio De Janeiro">RJ</option>
                                    <option value="Rio Grande Do Norte">RN</option>
                                    <option value="Rio Grande Do Sul">RS</option>
                                    <option value="Rondônia">RO</option>
                                    <option value="Roraima">RR</option>
                                    <option value="Santa Catarina">SC</option>
                                    <option value="São Paulo">SP</option>
                                    <option value="Sergipe">SE</option>
                                    <option value="Tocantins">TO</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                    <Link to="/home">
                            <button className="back">Voltar</button>
                        </Link>
                        <Link to="/home">
                            <button className="save" onClick={()=> handleEditShow}>Salvar Altereação</button>
                        </Link>
                    </div>
                </div>
            </Container>

            <Edit open={showEdit} onClose={handleEditClose}>
                <div className="containerModal">
                    <p className="titleModal">Editar Usuário</p>
                    <div className="line" />
                    <p> realmente desja editar estas informações ?</p>
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
