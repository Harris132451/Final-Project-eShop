import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import { categories } from './categoriesData';
import { Link } from "react-router-dom";
import { item } from "./product"

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const category = categories.find(cat => cat.Name === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }

  const filteredProducts = item.filter(product => product.bigcategories === category.Name);
  
  return (
    <>
    <div class="font-[sans-serif]">
      <div class="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
  
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            {category.Name} product list
          </h2>
       
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              {/* picture */}
            </div>
            <div class="text-center mt-4">
              <h3 class="text-lg font-bold text-gray-800">
                {/* Name */}
              </h3>
              <h4 class="text-xl text-gray-700 font-bold mt-4">
                {/* price */}
              </h4>
              <button type="button" class="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full">
                {/* Add to cart */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoriesPage


