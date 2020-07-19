import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    // e.target.name comes from the input itself, so that we won't need to use separate onChange method inside a Component
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div className='flex flex-col items-center justify-center mt-12 mb-6'>
        <form onSubmit={this.onSubmit}>
          {/* this refers to text above */}
          <input
            className='inline-block border md:border-2 w-46 md:w-56 h-8 border-solid border-black mb-4 px-2'
            name='text'
            onChange={this.onChange}
            placeholder='Search Users...'
            type='text'
            value={this.state.text}
          />
          <input
            className='block hover:opacity-75 cursor-pointer text-white uppercase mx-auto mb-4 px-4 py-1 bg-red-500'
            type='submit'
            value='Search'
          />
        </form>
        {showClear && (
          <button
            className='bg-white rounded-none hover:bg-black hover:text-white w-32 border border-black px-4 py-2 text-black'
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
