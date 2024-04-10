import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import { categories } from './categoriesData';
import { Link } from "react-router-dom";
import { item } from "./product";

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const category = categories.find(cat => cat.Name === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }


  return (
    <>
        <div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Productlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              {/* picture */}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">
                {/* name */}
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <p className="text-lg text-gray-700">
                  {/* price */}
                </p>
                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 7h2v2h-2zM7 7h2v2H7zm12.879 5.121l1.414-1.414a1 1 0 0 1 1.414 0l1.586 1.586-1.414 1.414-1.586-1.586a3 3 0 0 0-4.243 4.243l1.586 1.586-1.414 1.414-1.586-1.586a5 5 0 0 1 0-7.072l1.414-1.414a3 3 0 0 0 0 4.243l-1.586 1.586zm-5.657 5.657l1.414-1.414a3 3 0 0 0 4.243 0l1.414 1.414a5 5 0 0 1 0-7.072l-1.414-1.414a3 3 0 0 0-4.243 0l-1.414 1.414a5 5 0 0 1 0 7.072zm-5.657-5.657l1.414 1.414a3 3 0 0 0-4.243 0L2.93 17.172a5 5 0 0 1 0-7.072l1.414-1.414a3 3 0 0 0 4.243 0l1.414 1.414a5 5 0 0 1 0 7.072l-1.414 1.414zm11.314 0l1.414 1.414a5 5 0 0 1 0 7.072l-1.414 1.414a3 3 0 0 0 0-4.243l1.414-1.414a5 5 0 0 1 0-7.072l-1.414-1.414a3 3 0 0 0-4.243 0l-1.414 1.414z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoriesPage


