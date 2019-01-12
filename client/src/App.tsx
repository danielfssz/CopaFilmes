import React, { Component } from 'react';
import Header from './components/header/Header'
import Main from './screens/Main'
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Main />
      </Container>
    );
  }
}

export default App;
