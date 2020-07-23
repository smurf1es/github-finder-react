import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(async () => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setLoading(false);
  }, []);

  // Search github users
  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data.item);
    setLoading(false);
  };

  // Get a single github user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  // Get a single github repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
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
                <Search
                  clearUsers={clearUsers}
                  searchUsers={searchUsers}
                  setAlert={showAlert}
                  showClear={users.length > 0 ? true : false}
                />
                <Users loading={loading} users={users} />
              </React.Fragment>
            )}
          />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:login'
            render={(props) => (
              <User
                {...props}
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
