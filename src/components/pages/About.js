import React from 'react';

const About = (props) => {
  return (
    <div className='text-md md:text-xl my-64'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold'>About this app</h1>
        <p>App to search Github Users</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default About;
