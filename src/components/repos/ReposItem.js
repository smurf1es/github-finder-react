import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({ repo }) => {
  return (
    <div className='border border-red-500 w-64 h-6 mb-2'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
