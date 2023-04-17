import React from 'react';
import notFoundImg from './pngwing.com.png';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <img src={notFoundImg} alt="404 Not Found" style={{ width: '50%' }} />
      <h1>404 - Page not found</h1>
      <p>Sorry, the requested page could not be found.</p>
    </div>
  );
};

export default NotFound;
