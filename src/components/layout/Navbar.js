import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='flex justify-evenly h-16 w-full bg-black'>
      <div className='flex items-center md:ml-32'>
        <i className={`icon ${icon}`} />
        <Link className='no-underline' to='/'>
          <h1 className='text-xl text-white'>{title}</h1>
        </Link>
      </div>
      <div className='md:flex hidden items-center md:ml-auto mr-32'>
        <ul>
          <li>
            <Link className='text-white text-lg' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
