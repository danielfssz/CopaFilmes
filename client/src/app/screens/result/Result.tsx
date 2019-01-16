import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import CardResult from '../../components/cardResult/CardResult';

import './Result.css';
import { carregaVencedores } from '../../../actions/CampeonatoActions';

class Result extends Component {
  public props: any;
  constructor(props: any) {
    super(props);
  }

  public state: { [key: string]: any } = {
    resultadoCampeonato: false,
    vencedores: []
  };

  componentWillReceiveProps() {
    if (this.props.listaVencedores.length > 0) {
      this.setState({
        vencedores: this.props.listaVencedores,
        resultadoCampeonato: true
      });
    }
  }

  private exibeResultado = () => {
    if (this.state.vencedores) {
      let list: any[] = [];

      this.state.vencedores.forEach((filme: any, c: number) => {
        list.push(
          <div className="resultArea">
            <CardResult filme={filme} posicao={c + 1} />
          </div>
        );
      });

      return list;
    }
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
            <Col>{this.exibeResultado()}</Col>
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
  { carregaVencedores }
)(Result);
