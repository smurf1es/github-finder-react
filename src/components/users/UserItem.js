import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='m-12 flex items-center justify-center'>
      <div className='border-2 w-full h-56 flex flex-col items-center justify-center m-6'>
        <img src={avatar_url} className='w-16 h-16 md:mb-2 rounded-full' />
        <h3 className='text-md md:text-xl mb-2 md:mb-4'>{login}</h3>
        <Link
          className='no-underline md:hover:bg-red-300 bg-red-500 text-sm md:text-md uppercase text-white py-1 px-4'
          to={`/user/${login}`}
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
