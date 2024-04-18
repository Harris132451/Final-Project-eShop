import React, { useState, useEffect } from "react";
import Loader from "./Loading/Loader";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <div>{isLoading ? <Loader /> : <WrappedComponent {...props} />}</div>
    );
  };
};

export default withLoader;
