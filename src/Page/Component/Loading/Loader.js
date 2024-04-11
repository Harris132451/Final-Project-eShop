import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
      <div className="h-64 flex items-center justify-center mx-auto">
        <div className="loader">
          <div className="loader-wheel"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;