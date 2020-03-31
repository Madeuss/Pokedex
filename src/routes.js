import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pokemon from './components/PokemonList';


export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pokemon} />
            </Switch>
        </BrowserRouter>
    );
}