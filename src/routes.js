import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import PrimarySearchAppBar from './components/Appbar/Appbar'


export default (
    <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/appbar" component={PrimarySearchAppBar}></Route>
    </Switch>
)
 