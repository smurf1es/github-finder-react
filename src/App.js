import React from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

export default class App extends React.Component {
  // const [data, setData] = useState({
  //   users: [],
  //   loading: false,
  // });

  // // ComponentDidMount alike
  // useEffect(() => {
  //   setData({
  //     loading: true,
  //   });

  //   async function fetchData() {
  //     const res = await axios.get('https://api.github.com/users');
  //     setData({ users: res.data, loading: false });
  //   }
  //   fetchData();
  // }, []);

  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='app-wrapper'>
        <Navbar icon='fab fa-github' title='Github Finder' />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}
