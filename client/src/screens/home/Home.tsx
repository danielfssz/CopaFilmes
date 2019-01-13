import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { carregaLista } from '../../actions/SelecaoActions';
import CardFilm from '../../components/cardFilm/CardFilm';

import './Home.css';

class Home extends Component {
  public props: any;
  constructor(props: any) {
    super(props);
  }

  private _carregaLista(): any {
    this.props.carregaLista();

    if (this.props.listaFilmes.length) {
      return this.CardList();
    }
    if (this.props.erro) {
      return (
        <div>
          <div className="alert alert-danger" role="alert">
            {this.props.erro} - Entre em contato com o desenvolvedor
          </div>
        </div>
      );
    }
  }

  private CardList = () => {
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
            key={c2}
          >
            <CardFilm
              key={this.props.listaFilmes[c2].id}
              filme={this.props.listaFilmes[c2]}
            />
          </Col>
        );

        c1++;
        c2++;
      } while (c1 < 4 && c2 < this.props.listaFilmes.length);
      list.push(<Row key={c2}>{cols}</Row>);
      c1 = 0;
    } while (c2 < this.props.listaFilmes.length);

    return list;
  };

  render() {
    return (
      <div>
        <Row>
          <Col
            sm={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
            lg={{ size: 10, offset: 1 }}
          >
            <Col>
              <div>
                <p>{this.props.erro}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="textSelectedItem">Selecionado 0 de 8 itens</p>
                <NavLink to="result">
                  <Button color="secondary" className="btnGerarCampeonato">
                    Gerar Meu Campeonato
                  </Button>
                </NavLink>
              </div>
            </Col>
            <Col>{this._carregaLista()}</Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  listaFilmes: state.SelecaoReducer.listaFilmes,
  erro: state.SelecaoReducer.erro
});

export default connect(
  mapStateToProps,
  { carregaLista }
)(Home);
