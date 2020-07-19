import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img className='w-32 mx-auto block' src={spinner} alt='Loading...' />
  </Fragment>
);

export default Spinner;
