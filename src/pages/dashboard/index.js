import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../Components/header/index';

function dashboard() {
    document.title = "Guilu - Dashboard";

  return (
  <>
    <Header>
      <div/>
    </Header>

    <Container>
      <div className="container">
      <Link to="/home">
          <button className="back">Voltar</button>
        </Link>
      <iframe width="100%" height="800" src="https://app.powerbi.com/reportEmbed?reportId=ad6b3b8c-bcd8-45ec-9b6d-839c3a4294d0&autoAuth=true&ctid=64a5f56b-2ae1-445e-8aae-af6c5663ae31&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1iLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>

      </div>

    </Container>
  </>
  );
}

export default dashboard;
