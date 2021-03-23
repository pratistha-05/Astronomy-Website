import './App.css';
import Welcome from './components/Welcome';
import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import history from './history';


function App() {

  return (
    <Router history={history}>
    <div >
      <Switch>
    <Route path="/" exact component={Welcome}/>
    <Route path="/Homepage" component={Homepage}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
