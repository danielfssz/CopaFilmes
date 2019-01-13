import React from 'react';
import { Card } from 'reactstrap';

import './CardFilm.css';

const CardFilm = (props: any) => {
  return (
    <Card>
      <div className="form-check form-check-inline card-content">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={e => {
              props.onChangeCheckBok(props.filme);
            }}
          />
        </div>
        <div className="card-text">
          <p className="form-check-label cart-text-title">
            {props.filme.titulo}
          </p>
          <p className="form-check-label cart-text-year">
            <small>{props.filme.ano}</small>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardFilm;
