import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

export default function App() {
  return (
    <div className='app-wrapper'>
      <Navbar icon='fab fa-github' title='Github Finder' />
      <Users />
    </div>
  );
}
