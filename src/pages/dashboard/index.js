import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../Components/header/index';
import dashboardImg from '../../assets/dashboard.png'

function dashboard() {
    document.title = "Guilu - Dashboard";

  return (
  <>
    <Header>
      <div/>
    </Header>

    <Container>
      <div className="container">
        <img src={dashboardImg} alt="logo" />
        <Link to="/home">
          <button className="back">Voltar</button>
        </Link>
      </div>

    </Container>
  </>
  );
}

export default dashboard;
