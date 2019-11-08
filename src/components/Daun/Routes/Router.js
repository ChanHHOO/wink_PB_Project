import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Login, Board, MyBoard, MyPage } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/Daun" component={Home} />
        <Route path="/Daun/About" component={About} />
        <Route path="/Daun/Login" component={Login} />
        <Route path="/Daun/Board" component={Board} />
        <Route path="/Daun/MyBoard" component={MyBoard} />
        <Route path="/Daun/MyPage" component={MyPage} />
    </Switch>
);

export default Router;