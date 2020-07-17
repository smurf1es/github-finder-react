import React from 'react';

import UserItem from './UserItem';

export default class Users extends React.Component {
  render() {
    return (
      <div className='md:grid md:grid-cols-3'>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
