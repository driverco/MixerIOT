import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';
import AboutUs from './components/AboutUs';
import MainMixerVolume from './components/MainMixerVolume';


/*
import SelectBoard from './components/SelectBoard';
import About from './components/About';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import Stats from './components/Stats';
import Scene from './components/Scene';
import Rules from './components/Rules';
        <Route component = {Page404} />

*/

const AppRoutes = () => 
<App>
    <Switch>
        <Route exact path="/Home" component = {Home} />
        <Route exact path="/" component = {Home} />
        <Route exact path="/About" component = {AboutUs} />
        <Route exact path="/MainVolume" component = {MainMixerVolume} />
    </Switch>
</App>

export default AppRoutes;