import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import { categories } from './categoriesData';
import { Link } from "react-router-dom";
import { item } from "./product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
            <Link className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              {/* picture */}
            </Link>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">
                {/* name */}
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <p className="text-lg text-gray-700">
                  {/* price */}
                </p>
                <div className=" w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
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


