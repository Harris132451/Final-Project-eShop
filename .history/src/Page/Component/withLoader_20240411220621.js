import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // 模拟加载过程
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      // 在组件卸载时清除定时器
      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <div>
        {isLoading ? <Loader /> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withLoader;
