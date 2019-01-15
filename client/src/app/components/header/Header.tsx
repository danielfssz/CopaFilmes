import React from 'react';

import { Jumbotron, Row, Col } from 'reactstrap';
import './Header.css';

const Header = (props: any) => {
  return (
    <Row>
      <Col
        sm={{ size: 10, offset: 1 }}
        md={{ size: 10, offset: 1 }}
        lg={{ size: 10, offset: 1 }}
      >
        <Jumbotron className="header d-flex justify-content-center">
          <div className="content d-flex align-items-center">
            <small>CAMPEONATO DE FILMES</small>
            <p className="stage">
              {window.location.pathname == '/' && 'Fase de Seleção'}
              {window.location.pathname == '/result' && 'Resultado'}
            </p>
            <hr />
            <p className="result">
              {window.location.pathname == '/' &&
                'Selecione 8 filmes que voce deseja que entrem na competição e depois pressione o botão Gerar Meu Campenato para prosseguir'}
              {window.location.pathname == '/result' &&
                'Veja o resultado final do Campeonato de filmes de forma simples e rápida'}
            </p>
          </div>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default Header;
