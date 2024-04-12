import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from './categoriesData';
import { Link } from "react-router-dom";
import { item } from "./product"
import withLoader from "./withLoader"
import Breadcrumb from "./Breadcrumb";



const SmallCategoriesPage = (props) => {
    const { smallCategoriesName } = useParams();
    const smallcategories = categories.find(cat => cat.Name === smallCategoriesName);

    if (!smallcategories) {
        return <div>Category not found</div>;
      }

      const parentCategory = categories.find(cat => cat.id === smallcategories.Parent);
    const parentCategoryName = parentCategory ? parentCategory.Name : "Unknown Parent Category";

      const breadcrumbItems = [
        { text: 'Home', href: '/' },
        { text: parentCategoryName, href: `/${parentCategoryName}` },
        { text: smallcategories.Name }
      ];

  return (
    <>
    <div class="font-[sans-serif]">
      <div class="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
        <div className="text-4xl font-extrabold text-gray-800 mb-12">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          {smallcategories.Name} product list
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {item.filter((item) => item.smallcategories === smallcategories.Name).map((filteredItem) => (
            <div key={filteredItem.id} class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative flex flex-col justify-between">
              <Link to={`/products/${filteredItem.name}`} class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src={filteredItem.picture}
                  alt={filteredItem.name}
                  className="w-full h-full rounded-xl object-cover"
                />
              </Link>
              <div class="text-center mt-4">
                <h3 class="text-lg font-bold text-gray-800">
                  {filteredItem.name}
                </h3>
                <h4 class="text-xl text-gray-700 font-bold mt-2">
                  {filteredItem.price}
                </h4>
                <button type="button" class="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
                onClick={() => {
                  props.updateCart(filteredItem);
                  props.updateIsOpenCart(true);
                }}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  )
}

export default withLoader(SmallCategoriesPage)
