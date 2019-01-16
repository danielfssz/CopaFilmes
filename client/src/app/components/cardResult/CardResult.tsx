import React from 'react';
import { Card } from 'reactstrap';

import './CardResult.css';

const CardResult = (props: any) => {
  return (
    <Card style={{ marginTop: '0px' }}>
      <div className="d-flex justify-content-start card-result">
        <div className="p-2 card-result-position">
          <div className="position">{props.posicao}º</div>
        </div>
        <div className="card-result-title">{props.filme.titulo}</div>
      </div>
    </Card>
  );
};

export default CardResult;
