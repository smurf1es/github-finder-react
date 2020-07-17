import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img className='w-2 mx-auto block' src={spinner} alt='Loading...' />
  </Fragment>
);

export default Spinner;
