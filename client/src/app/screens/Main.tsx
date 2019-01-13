import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../screens/home/Home';
import Result from '../screens/result/Result';

const Main = (props: any) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
      </Switch>
    </main>
  );
};

export default Main;
