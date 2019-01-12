import React from 'react';
import { Card } from 'reactstrap';
import './CardFilm.css';

const CardFilm = () => {
  return (
    <Card>
      <div className="form-check form-check-inline card-content">
        <div>
          <input className="form-check-input" type="checkbox" />
        </div>
        <div className="card-text">
          <p className="form-check-label cart-text-title">Titulo do filme</p>
          <p className="form-check-label cart-text-year">
            <small>2018</small>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardFilm;
