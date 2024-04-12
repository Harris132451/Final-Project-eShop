import React from 'react';

const Breadcrumb = ({ items, defaultIcon }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <a href={item.href} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                {item.icon ? (
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d={item.icon} />
                  </svg>
                ) : (
                  defaultIcon && (
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d={defaultIcon} />
                    </svg>
                  )
                )}
                {item.text}
              </a>
            ) : (
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.text}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
