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
                    <path d="M18 7h2v2h-2zM4 7h2v2H4zm13.292 4.542l1.414-1.414a1 1 0 0 1 1.414 0l.85.849 1.414-1.415-1.768-1.767a4 4 0 0 1 0-5.657l-1.414 1.414a2 2 0 0 0 0 2.829l1.768 1.768-1.414 1.414-1.768-1.768a2 2 0 0 0-2.829 0L9.172 8.757l-1.415 1.414 1.768 1.768a2 2 0 0 0 0 2.829L9.9 16.243l-1.414 1.414-1.415-1.414a4 4 0 0 1-5.657 0l1.414-1.414a2 2 0 0 0 2.829 0L9.9 13.1l1.414-1.414-1.768-1.768a2 2 0 0 0 0-2.829L9.172 7.757l1.415-1.414 1.768 1.768a2 2 0 0 0 2.829 0L15.1 4.243l1.414-1.414-1.414-1.414a4 4 0 0 1 0-5.657l-1.414 1.414a2 2 0 0 0 0 2.829L13.243 1.1l1.414 1.414 1.768-1.768a2 2 0 0 0 0-2.829L15.1 0.243l-1.414 1.414L11.918 1.1a4 4 0 0 1 0 5.657l1.414-1.414a2 2 0 0 0 2.829 0L16.243 4.1l1.414 1.414-1.768 1.768a2 2 0 0 0 0 2.829L16.1 8.243l1.414 1.414z" fill="currentColor" />
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


