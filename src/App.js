import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';

import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='app-wrapper'>
            <Navbar icon='fab fa-github' title='Github Finder' />
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
