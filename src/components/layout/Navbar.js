import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='flex justify-center md:justify-start h-16 w-full bg-black'>
      <div className='flex items-center md:ml-32'>
        <i className={`icon ${icon}`} />
        <a className='no-underline' href='#'>
          <h1 className='text-xl text-white'>{title}</h1>
        </a>
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
