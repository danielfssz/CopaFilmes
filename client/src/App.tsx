import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './screens/Main';
import Footer from './components/footer/Footer';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}

export default App;
