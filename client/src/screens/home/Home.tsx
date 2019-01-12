import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import CardFilm from '../../components/cardFilm/CardFilm';

import './Home.css';

export default class Home extends Component {
  constructor(props: any) {
    super(props);
  }

  private Filmes: any[] = [
    { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
    {
      id: 'tt4881806',
      titulo: 'Jurassic World: Reino Ameaçado',
      ano: 2018,
      nota: 6.7
    },
    {
      id: 'tt5164214',
      titulo: 'Oito Mulheres e um Segredo',
      ano: 2018,
      nota: 6.3
    },
    { id: 'tt7784604', titulo: 'Hereditário', ano: 2018, nota: 7.8 },
    {
      id: 'tt4154756',
      titulo: 'Vingadores: Guerra Infinita',
      ano: 2018,
      nota: 8.8
    },
    { id: 'tt5463162', titulo: 'Deadpool 2', ano: 2018, nota: 8.1 },
    {
      id: 'tt3778644',
      titulo: 'Han Solo: Uma História Star Wars',
      ano: 2018,
      nota: 7.2
    },
    { id: 'tt3501632', titulo: 'Thor: Ragnarok', ano: 2017, nota: 7.9 },
    { id: 'tt2854926', titulo: 'Te Peguei!', ano: 2018, nota: 7.1 },
    { id: 'tt0317705', titulo: 'Os Incríveis', ano: 2004, nota: 8.0 },
    { id: 'tt3799232', titulo: 'A Barraca do Beijo', ano: 2018, nota: 6.4 },
    { id: 'tt1365519', titulo: 'Tomb Raider: A Origem', ano: 2018, nota: 6.5 },
    { id: 'tt1825683', titulo: 'Pantera Negra', ano: 2018, nota: 7.5 },
    { id: 'tt5834262', titulo: 'Hotel Artemis', ano: 2018, nota: 6.3 },
    { id: 'tt7690670', titulo: 'Superfly', ano: 2018, nota: 5.1 },
    { id: 'tt6499752', titulo: 'Upgrade', ano: 2018, nota: 7.8 }
  ];

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
          >
            <CardFilm />
          </Col>
        );
        c1++;
        c2++;
      } while (c1 < 4 && c2 < this.Filmes.length);
      list.push(<Row>{cols}</Row>);
      c1 = 0;
    } while (c2 < this.Filmes.length);

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
              <div>{this.CardList()}</div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
