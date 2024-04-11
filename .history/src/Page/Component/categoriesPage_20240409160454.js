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
      <div class="font-[sans-serif]">
      <div class="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Productlist</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
              {/* picture */}
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-800">
                {/* name */}
              </h3>
              <div class="mt-4 flex items-center flex-wrap gap-2">
                <p class="text-lg text-gray-700">
                  {/* price */}
                </p>
                <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
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


