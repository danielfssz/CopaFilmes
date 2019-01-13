import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import CardFilm from '../../components/cardFilm/CardFilm';

import './Home.css';

const Home = (props: any) => {
  const CardList = () => {
    let list = [];
    let c1 = 0;
    let c2 = 0;

    do {
      let cols = [];
      do {
        cols.push(
          <Col
            xl={{ size: 3 }}
            lg={{ size: 3 }}
            md={{ size: 3 }}
            sm={{ size: 12 }}
          >
            <CardFilm />
          </Col>
        );
        c1++;
        c2++;
      } while (c1 < 4 && c2 < props.listaFilmes.length);
      list.push(<Row>{cols}</Row>);
      c1 = 0;
    } while (c2 < props.listaFilmes.length);

    return list;
  };
  console.log(props);

  return (
    <div>
      <Row>
        <Col
          sm={{ size: 10, offset: 1 }}
          md={{ size: 10, offset: 1 }}
          lg={{ size: 10, offset: 1 }}
        >
          <Col>
            <div className="d-flex justify-content-between">
              <p className="textSelectedItem">Selecionado 0 de 8 itens</p>
              <NavLink to="result">
                <Button color="secondary" className="btnGerarCampeonato">
                  Gerar Meu Campeonato
                </Button>
              </NavLink>
            </div>
          </Col>
          <Col>
            <div>{CardList()}</div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  listaFilmes: state.SelecaoReducer.listaFilmes
});

export default connect(
  mapStateToProps,
  null
)(Home);
