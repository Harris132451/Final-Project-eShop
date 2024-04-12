import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader">
          <div className="loader-wheel"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;