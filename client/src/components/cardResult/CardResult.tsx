import React from 'react';
import { Card } from 'reactstrap';

import './CardResult.css';

const CardResult = () => {
  return (
    <Card style={{ marginTop: '0px' }}>
      <div className="d-flex justify-content-start card-result">
        <div className="p-2 card-result-position">
          <div className="position">1º</div>
        </div>
        <div className="card-result-title">
          titulo do filme ganhador titulo do filme ganhador
        </div>
      </div>
    </Card>
  );
};

export default CardResult;
