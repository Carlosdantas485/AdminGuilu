import React from 'react';

import { Container } from './styles';

function Home() {
  return (
      <Container>
                <div className="box">
                <h1>Usuarios</h1>

                    <div className="Option_Home">
                      <h2>Registrar empresa</h2>
                      <p>Cadastrar uma empresa para comecar a usar os beneficios da WIINNER.</p>
                    </div>
                    <div className="Option_Home">
                      <h2>Listar empresa</h2>
                      <p>Veja a lista completa de todas as empresas participando da WIINNER.</p>

                    </div>
                    <div className="Option_Home">
                     <h2>Registrar usuario</h2>
                     <p>Cadastre um novo usuario pertencente a uma empresa.</p>

                    </div>
                    <div className="Option_Home">
                      <h2>Listar usuario</h2>
                      <p>Veja a todas as informações dos usuarios cadastrados.</p>

                    </div>
                </div>
                <div className="box">
                <h1>Dashboard</h1>

                  <div className="Option_Home">
                    <h2>Dashboard</h2>
                    <p>Vizualize as principais informações.</p>
                  </div>
                  <div className="Option_Home">
                    <h2>Adicionar Dashboard</h2>
                    <p>Adicione um Dashboard para obter varias informações importantes.</p>
                  </div>
                </div>
                <div className="box">
                <h1>Arquivos</h1>

                <div className="Option_Home">
                    <h2>XML por Link</h2>
                    <p>Vizualize as principais informações.</p>
                  </div>
                  <div className="Option_Home">
                    <h2>Historico de uploads</h2>
                    <p>Adicione um Dashboard para obter varias informações importantes.</p>
                  </div>

                </div>
      </Container>
  );
}

export default Home;
