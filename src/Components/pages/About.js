import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p>
        This is a full stack React app for keeping contacts online. Made by{' '}
        <a href='https://www.linkedin.com/in/ranjan-kumar-m-818367158/'>
          Ranjan Kumar Mandal
        </a>
      </p>
      <p className='bg-dark p'>
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
