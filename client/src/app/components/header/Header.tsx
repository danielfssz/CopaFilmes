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
            <p className="stage">Fase de Seleção</p>
            <hr />
            <p className="result">
              Selecione 8 filmes que voce deseja que entrem na competição e
              depois pressione o botão Gerar Meu Campenato para prosseguir
            </p>
          </div>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default Header;
