import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    // e.target.name comes from the input itself, so that we won't need to use separate onChange method inside a Component
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mt-12 mb-6'>
      <form onSubmit={onSubmit}>
        {/* this refers to text above */}
        <input
          className='inline-block border md:border-2 w-46 md:w-56 h-8 border-solid border-black mb-4 px-2'
          name='text'
          onChange={onChange}
          placeholder='Search Users...'
          type='text'
          value={text}
        />
        <input
          className='block hover:opacity-75 cursor-pointer text-white uppercase mx-auto mb-4 px-4 py-1 bg-red-500'
          type='submit'
          value='Search'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='bg-white rounded-none hover:bg-black hover:text-white w-32 border border-black px-4 py-2 text-black'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
