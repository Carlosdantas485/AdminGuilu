import React from 'react';

import { Container } from './styles';
import Header from '../../Components/header/index';
import { FaUserCircle } from 'react-icons/fa';


function infoUser() {
  return (
  <>
    <Header>
      <div/>
    </Header>
  
    <Container>
    <div className="container">
      <h1>Meu perfil</h1>
      <div className="infosUser">
        <div className="avatar">
          <FaUserCircle size="90" color="#999" />
        </div>
        <div className="nameEmailUser">
          <h2>Nome de usuario</h2>
          <h3>nomedousuario@timeguilu.com</h3>
        </div>
      </div>

        <div className="nameCel">
          <div className="name">
            <h3>Nome completo</h3>
            <input placeholder="Nome de usuario" />
          </div>
          <div className="cel">
            <h3>Celular</h3>
            <input placeholder="(11) 98765-3210"/>
          </div>
        </div>

        <div className="emailCpfCnpj">
          <div className="email">
          <h3>E-mail</h3>
            <div className="edit">
              <input placeholder="emaildousuario@timeguilu.com" />
              <button>Alterar</button>
            </div>
          </div> 
          <div className="CpfCnpj">
            <h3>CPF/CNPJ</h3>
            <div className="edit">
              <input placeholder="987654321" />
              <button>Alterar</button>
            </div>
          </div>
        </div>

      <div className="boxCepNumberComplement">
        <div className="cep">
          <h3>Cep</h3>
          <input placeholder="987654-2" />
        </div>
        <div className="number">
          <h3>Numero</h3>
          <input placeholder="123"/>
        </div>
        <div className="complement">
          <h3>Complemento</h3>
          <input placeholder="nome da rua do usuario"/>
        </div>
      </div>

      <div className="local">
        <div className="neighborhood">
          <h3>Bairro</h3>
          <input placeholder="Bairro do usuario" />
        </div>
        <div className="logradouro">
          <h3>Logradouro</h3>
          <input placeholder="Logradouro do usuario"/>
        </div>
      </div>

      <div className="cityUf">
        <div className="city">
          <h3>Cidade</h3>
          <input placeholder="Cidade do usuario" />
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
      <div className="options">
        <button className="back">Voltar</button>
        <button className="save">Salvar</button>
      </div>
    </div>
    </Container>
  </>
  );
}

export default infoUser;