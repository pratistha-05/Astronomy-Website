import './App.css';
import Welcome from './components/Welcome';
import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Ipgeolocation from './components/Ipgeolocation';
import history from './history';
import Apod from './components/Apod';


function App() {

  return (
    <Router history={history}>
    <div >
      <Switch>
    <Route path="/" exact component={Welcome}/>
    <Route path="/homepage" component={Homepage}/>
    <Route path="/pictures" component={Apod}/>
    <Route path="/date_and_timings" component={Ipgeolocation}/>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
