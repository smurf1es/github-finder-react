import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='h-screen my-64'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='text-2xl font-bold'>404 Not Found</h1>
        <p className='text-md font-normal mb-6'>
          The page you are looking for does not exist.
        </p>
        <Link className='text-white bg-red-500 w-20 h-8' to='/'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
