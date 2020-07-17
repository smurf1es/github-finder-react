import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

export default function App() {
  const [data, setData] = useState({
    users: [],
    loading: false,
  });

  // ComponentDidMount alike
  useEffect(() => {
    setData({
      loading: true,
    });

    async function fetchData() {
      const res = await axios.get('https://api.github.com/users');
      setData({ users: res.data, loading: false });
    }
    fetchData();
  }, []);

  return (
    <div className='app-wrapper'>
      <Navbar icon='fab fa-github' title='Github Finder' />
      <Users />
    </div>
  );
}
