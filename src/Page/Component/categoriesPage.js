import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { categories } from "./categoriesData";
import { Link } from "react-router-dom";
import { item } from "./product";
import withLoader from "./withLoader";
import Breadcrumb from "./Breadcrumb";

const CategoriesPage = (props) => {
  const { categoryName } = useParams();
  const category = categories.find((cat) => cat.Name === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }

  const breadcrumbItems = [
    {
      text: "Home",
      href: "/",
      icon: "M10 18l-9.25-6L2 9V3h16v6l1.25 3-2.75 1.75L10 18z",
    },
    { text: category.Name, icon: "M4 14l6-6 6 6" },
  ];

  return (
    <>
      <div class="font-[sans-serif]">
        <div class="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
          <div className="text-4xl font-extrabold text-gray-800 mb-12">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            {category.Name} product list
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {item
              .filter((item) => item.bigcategories === category.Name)
              .map((filteredItem) => (
                <div
                  key={filteredItem.id}
                  class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative flex flex-col justify-between"
                >
                  <button
                    onClick={() => {
                      let newData = { ...props.wishItems };
                      let acn = props.Account;
                      if (!newData[acn] && acn) {
                        newData[acn] = [{ ...filteredItem }];
                        props.updateWishList(newData[acn][0]);
                      } else if (acn) {
                        let PNameArr = [];
                        newData[acn].forEach((c) => {
                          PNameArr.push(c.name);
                        });
                        if (!PNameArr.includes(filteredItem.name)) {
                          props.updateWishList(filteredItem);
                        }
                      }
                      if (!acn) {
                        props.updateIsOpenWishList(true);
                      } else if (window.innerWidth >= 1024) {
                        props.updateIsOpenWishList(true);
                      }
                    }}
                    class="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3 transition-colors hover:text-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      class="fill-current text-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <Link
                    to={`/products/${filteredItem.name}`}
                    class="max-lg:w-11/12 w-3/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8"
                  >
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
                    <button
                      type="button"
                      class="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
                      onClick={() => {
                        let newData = { ...props.items };
                        let acn = props.Account;
                        if (!newData[acn] && acn) {
                          newData[acn] = [{ ...filteredItem, qty: 1 }];
                          props.updateCart(newData[acn][0]);
                        } else if (acn) {
                          let PNameArr = [];
                          newData[acn].forEach((c) => {
                            PNameArr.push(c.name);
                          });
                          if (PNameArr.includes(filteredItem.name)) {
                            for (let i = 0; i < newData[acn].length; i++) {
                              if (newData[acn][i].name === filteredItem.name) {
                                newData[acn][i].qty += 1;
                                props.updateCart(newData[acn][i]);
                              }
                            }
                          } else {
                            props.updateCart(filteredItem);
                          }
                        }
                        if (!acn) {
                          props.updateIsOpenCart(true);
                        } else if (window.innerWidth >= 1024) {
                          props.updateIsOpenCart(true);
                        }
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default withLoader(CategoriesPage);
