import React from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

export default class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  // Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    return (
      <div className='app-wrapper'>
        <Navbar icon='fab fa-github' title='Github Finder' />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}
