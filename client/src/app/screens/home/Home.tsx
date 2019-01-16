import React, { Component } from 'react';
import { Row, Col, Button, Alert } from 'reactstrap';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import {
  carregaLista,
  atualizaListaSelecionados,
  carregaVencedores
} from '../../../actions/CampeonatoActions';

import './Home.css';
import CardFilm from '../../components/cardFilm/CardFilm';

class Home extends Component {
  public props: any;

  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  public state: { [key: string]: any } = {
    resultadoCampeonato: false
  };

  private handleChange(e: any, filme: any) {
    if (e.target.checked) {
      if (this.props.listaSelecionados.length < 8) {
        this.props.atualizaListaSelecionados(
          filme,
          this.props.listaSelecionados
        );
        e.target.checked = true;
      } else e.target.checked = false;
    } else
      this.props.atualizaListaSelecionados(filme, this.props.listaSelecionados);
  }

  private _carregaLista(): any {
    this.props.carregaLista();

    if (this.props.listaFilmes.length > 0) {
      return this._CardList();
    }
  }

  private _CardList = () => {
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
              onChangeCheckBok={this.handleChange}
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

  private _gerarMeuCampeonato() {
    this.props.carregaVencedores(this.props.listaSelecionados);
  }

  componentWillReceiveProps() {
    if (this.props.listaVencedores.length > 0) {
      this.setState({ resultadoCampeonato: true });
    }
  }

  render() {
    if (this.state.resultadoCampeonato) {
      return <Redirect to="result" />;
    }
    return (
      <div>
        <Row>
          <Col
            sm={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
            lg={{ size: 10, offset: 1 }}
          >
            <Row>
              <Col sm={{ size: 12 }} md={{ size: 3 }} lg={{ size: 3 }}>
                <p className="textSelectedItem">
                  Selecionado {this.props.listaSelecionados.length} de 8 itens
                </p>
              </Col>
              <Col
                sm={{ size: 12 }}
                md={{ size: 4, offset: 1 }}
                lg={{ size: 4, offset: 1 }}
              >
                <Alert
                  className="alert-max-itens"
                  isOpen={this.props.listaSelecionados.length > 7}
                >
                  Você já selecionou os 8 itens!
                </Alert>
              </Col>
              <Col
                sm={{ size: 12 }}
                md={{ size: 3, offset: 1 }}
                lg={{ size: 3, offset: 1 }}
              >
                <Button
                  color="secondary"
                  className="btnGerarCampeonato"
                  onClick={() => this._gerarMeuCampeonato()}
                >
                  Gerar Meu Campeonato
                </Button>
              </Col>
            </Row>
            <Col>
              {this.props.erro && (
                <div>
                  <hr />
                  <div className="alert alert-danger" role="alert">
                    {this.props.erro}
                  </div>
                </div>
              )}
              {!this.props.erro && this._carregaLista()}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  listaFilmes: state.SelecaoReducer.listaFilmes,
  listaSelecionados: state.SelecaoReducer.listaSelecionados,
  listaVencedores: state.SelecaoReducer.listaVencedores,
  erro: state.SelecaoReducer.erro
});

export default connect(
  mapStateToProps,
  { carregaLista, atualizaListaSelecionados, carregaVencedores }
)(Home);
