import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import Settings from './components/Settings/Settings'
import Playlists from './components/Playlists/Playlists'
import Youtube from './components/Youtube/Youtube';
import LandingPage from './components/Login/LandingPage';

export default (
    <Switch>
        <Route exact path="/" component={LandingPage} ></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/playlists" component={Playlists}></Route> 
        <Route path="/settings" component={Settings}></Route>
        <Route path="/youtube" component={Youtube}></Route>
    </Switch>
)
 