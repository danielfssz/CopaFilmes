import React, { Component } from 'react';
import Header from './components/header/Header'
import Main from './screens/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
