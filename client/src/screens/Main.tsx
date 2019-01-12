import React from 'react'
import { Switch, Route } from "react-router";

import Home from "../screens/home/Home";
import Result from "../screens/result/Result";

import { Container } from 'reactstrap';

const Main = () => {
    return (
        <main>
            <Container>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/result' component={Result} />
                </Switch>
            </Container>
        </main>
    )
}

export default Main;