import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

import Header from './app/components/header/Header';
import Main from './app/screens/Main';
import Footer from './app/components/footer/Footer';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Container fluid>
          <Header />
          <Main />
          <Footer />
        </Container>
      </Provider>
    );
  }
}

export default App;
