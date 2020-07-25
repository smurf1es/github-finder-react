import React, { useContext } from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

export default function Users() {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div className='md:grid md:grid-cols-3'>
        {githubContext.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
