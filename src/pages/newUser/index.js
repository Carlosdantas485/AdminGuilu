import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/header/index';
import { Container} from './styles';
import Logo from '../../assets/guilu_preto.jpeg';


function newUser() {
    return (
        <>
            <Header>
                <div/>
            </Header>

            <Container>
                <div className="container">
                    <div className="user">
                        <div className="infoUser">
                            <img  clasName="logo" src={Logo}/>
                            <h2>Criar novo Usuario</h2>
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
                                <input type="text" placeholder="E-mail"></input>
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
                                <label for="cars">UF</label>

                                <select name="cars" id="cars">
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
                            <button className="save">Cadastrar</button>
                    </div>
                </div>
            </Container>


        </>
    );
}

export default newUser;
