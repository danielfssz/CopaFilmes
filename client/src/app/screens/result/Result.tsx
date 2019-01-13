import React from 'react';
import { Row, Col } from 'reactstrap';
import CardResult from '../../components/cardResult/CardResult';

import './Result.css';
const Filmes: any[] = [
  { posicao: 1, titulo: 'Os Incríveis 2' },
  {
    posicao: 2,
    titulo: 'Jurassic World: Reino Ameaçado'
  }
];

const Result = () => {
  return (
    <div>
      <Row>
        <Col
          sm={{ size: 10, offset: 1 }}
          md={{ size: 10, offset: 1 }}
          lg={{ size: 10, offset: 1 }}
        >
          <Col>
            <div className="resultArea">
              <CardResult />
            </div>
            <div className="resultArea">
              <CardResult />
            </div>
            {/* {Filmes.map(item => (
              <p>
                {item.posicao} {item.titulo}
              </p>
            ))} */}
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Result;
