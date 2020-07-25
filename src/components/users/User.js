import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

import Repos from '../repos/Repos';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  if (githubContext.loading) return <Spinner />;

  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center'>
      <div className='flex flex-col max-h-screen justify-center mt-5 md:mt-12 items-center'>
        <Link
          to='/'
          className='no-underline max-w-md md:max-w-lg md:hover:bg-red-300 bg-red-500 text-sm md:text-md uppercase text-white py-1 px-4'
        >
          Back to Search
        </Link>
        Hireable: {''}
        {hireable ? (
          <i className='fas fa-check text-green-500' />
        ) : (
          <i className='fas fa-times-circle text-red-500' />
        )}
        <div className='flex flex-col items-center mt-6 md:mt-12'>
          <div className='items-center justify-center mb-2 text-center'>
            <img
              alt=''
              className='rounded-full shadow-lg w-40 mb-6'
              src={avatar_url}
            />
            <h1 className='font-semibold capitalize'>{name}</h1>
            {location ? (
              <p className='text-black'>Location: {location}</p>
            ) : (
              <p className='text-black'>Location: Unavailable</p>
            )}
          </div>

          <div className='flex flex-col mb-6 md:mb-12 items-center'>
            {bio && (
              <div className='text-center mb-6 text-white w-64 shadow-xl bg-black bg-opacity-50'>
                <h3 className='bg-red-500'>Bio</h3> <p>{bio}</p>
              </div>
            )}
            <ul className='text-center'>
              <li>
                {login && (
                  <div>
                    <p className='font-bold'>Username: </p> {login}
                  </div>
                )}
              </li>
              <li>
                {company && (
                  <div>
                    <p className='font-bold'>Company: </p> {company}
                  </div>
                )}
              </li>
              <li>
                {blog && (
                  <div>
                    <p className='font-bold'>Website: </p> {blog}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col text-center justify-center items-center text-xs'>
        <div className='bg-black relative w-32 mb-2 py-1 text-white'>
          <span
            style={{ height: '1.625rem' }}
            className='bg-green-500 w-2 h- left-0 top-0 absolute'
          ></span>
          Followers: {followers}
        </div>
        <div className='bg-black relative w-32 mb-2 py-1 text-white'>
          <span
            style={{ height: '1.625rem' }}
            className='bg-green-500 w-2 h- left-0 top-0 absolute'
          ></span>
          Following: {following}
        </div>
        <div className='mt-2 md:mt-4 md:mb-0'>
          <a
            href={html_url}
            className='bg-white text-black hover:bg-black hover:text-white px-4 py-1 md:px-6 md:py-2 border-2 border-black'
          >
            Visit Github Profile
          </a>
        </div>
        <div className='mt-4 mb-4 md:mb-0 md:mt-12'>
          <Repos repos={githubContext.repos} />
        </div>
      </div>
    </div>
  );
};

export default User;
