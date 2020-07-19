import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    // e.target.name comes from the input itself, so that we won't need to use separate onChange method inside a Component
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div className='flex justify-center mt-12 mb-6'>
        <form onSubmit={this.onSubmit}>
          {/* this refers to text above */}
          <input
            className='block border-2 w-56 h-8 border-solid border-black mb-4 px-2'
            name='text'
            onChange={this.onChange}
            placeholder='Search Users...'
            type='text'
            value={this.state.text}
          />
          <input
            className='block hover:opacity-75 cursor-pointer text-white uppercase mx-auto px-4 py-1 bg-red-500'
            type='submit'
            value='Search'
          />
        </form>
      </div>
    );
  }
}

export default Search;
