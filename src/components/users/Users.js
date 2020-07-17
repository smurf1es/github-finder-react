import React from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

export default function Users({ users, loading }) {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='md:grid md:grid-cols-3'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

Users.propTypes = {
  user: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
