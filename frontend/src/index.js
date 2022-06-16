import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
