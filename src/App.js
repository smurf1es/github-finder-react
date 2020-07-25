import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);

  // Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <BrowserRouter>
        <div className='app-wrapper'>
          <Navbar icon='fab fa-github' title='Github Finder' />
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <Search setAlert={showAlert} />
                  <Users />
                </React.Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
          </Switch>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
