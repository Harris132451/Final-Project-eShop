import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { item } from "./Component/product";
import withLoader from "./Component/withLoader";
import Breadcrumb from "./Component/Breadcrumb";
import ProductPromotion from "./Component/productPromotion";
import ProductDetail from "./Component/Description";
import { DesData } from "./Component/DescriptionOfProduct";
import Reviews from "./Component/Reviews";
import "./ProductPage.css";

const ProductPage = (props) => {
  const [amount, setAmount] = useState(1);
  const { productPage } = useParams();
  const decodedProductPage = decodeURIComponent(productPage);
  const product = item.find((i) => i.name === decodedProductPage);
  const [descriptions, setDescriptions] = useState(DesData);
  const [activeTab, setActiveTab] = useState("promotion");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: product.bigcategories, href: `/${product.bigcategories}` },
    {
      text: product.smallcategories,
      href: `/product/${product.smallcategories}`,
    },
    { text: product.name },
  ];

  return (
    <div>
      <section className="text-gray-700 overflow-hidden bg-white font-[sans-serif] ">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-4xl font-extrabold text-gray-800 mb-12">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product.picture}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.bigcategories}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Star path */}
                    <path d="M12 2L9.15 8.36L2 9.27L7.24 14.14L6.18 21.01L12 17.77L17.82 21.01L16.76 14.14L22 9.27L14.85 8.36L12 2Z" />
                  </svg>
                ))}
<<<<<<< HEAD
                <span className="text-gray-600 ml-3">
                   259 Reviews
=======
                <span className="text-gray-600 ml-3">5 Reviews</span>
              </div>
              <p className="leading-relaxed">{product.warn}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Unit</span>
                  <span className="mr-4">{product.unit}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 pb-5 border-b-2 border-gray-200 mb-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
>>>>>>> a3272dc34d53becd5fd6f0ae1c4dd311c45dfdd0
                </span>
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      let newData = { ...props.wishItems };
                      let acn = props.Account;
                      if (!newData[acn] && acn) {
                        newData[acn] = [{ ...product }];
                        props.updateWishList(newData[acn][0]);
                      } else if (acn) {
                        let PNameArr = [];
                        newData[acn].forEach((c) => {
                          PNameArr.push(c.name);
                        });
                        if (!PNameArr.includes(product.name)) {
                          props.updateWishList(product);
                        }
                      }
                      if (!acn) {
                        props.updateIsOpenCart(true);
                      } else if (window.innerWidth >= 768) {
                        props.updateIsOpenWishList(true);
                      }
                    }}
                    className="mr-4 bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      className={`fill-current ${
                        props.wishItems[props.Account]?.includes(product)
                          ? "text-red-500"
                          : "text-gray-800"
                      } inline-block`}
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none rounded hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition duration-300 ease-in-out"
                    onClick={() => {
                      let newData = { ...props.items };
                      let acn = props.Account;
                      if (!newData[acn] && acn) {
                        newData[acn] = [{ ...product, qty: 1 }];
                        props.updateCart(newData[acn][0]);
                      } else if (acn) {
                        let PNameArr = [];
                        newData[acn].forEach((c) => {
                          PNameArr.push(c.name);
                        });
                        if (PNameArr.includes(product.name)) {
                          for (let i = 0; i < newData[acn].length; i++) {
                            if (newData[acn][i].name === product.name) {
                              newData[acn][i].qty += 1;
                              props.updateCart(newData[acn][i]);
                            }
                          }
                        } else {
                          props.updateCart(product);
                        }
                      }
                      if (!acn) {
                        props.updateIsOpenCart(true);
                      } else if (window.innerWidth >= 768) {
                        props.updateIsOpenCart(true);
                      }
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://www.svgrepo.com/show/491795/delivery-truck-ui-2.svg"
                    alt="deliver"
                    className="w-5 h-5"
                  />
                  <span>Home Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://www.svgrepo.com/show/505386/gift.svg"
                    alt="gift"
                    className="w-7 h-7"
                  />
                  <button onClick={console.log(`Welcome`)}>
                    Click & Collect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li
                className={`me-2 ${
                  activeTab === "promotion" ? "active-tab" : ""
                }`}
                role="presentation"
              >
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="promotion-tab"
                  data-tabs-target="#promotion"
                  type="button"
                  role="tab"
                  aria-controls="promotion"
                  aria-selected={activeTab === "promotion"}
                  onClick={() => handleTabClick("promotion")}
                >
                  Promotion
                </button>
              </li>
              <li
                className={`me-2 ${
                  activeTab === "description" ? "active-tab" : ""
                }`}
                role="presentation"
              >
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="description-tab"
                  data-tabs-target="#description"
                  type="button"
                  role="tab"
                  aria-controls="description"
                  aria-selected={activeTab === "description"}
                  onClick={() => handleTabClick("description")}
                >
                  Description
                </button>
              </li>
              <li
                className={`me-2 ${
                  activeTab === "reviews" ? "active-tab" : ""
                }`}
                role="presentation"
              >
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="reviews-tab"
                  data-tabs-target="#reviews"
                  type="button"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected={activeTab === "reviews"}
                  onClick={() => handleTabClick("reviews")}
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div
              className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                activeTab === "promotion" ? "" : "hidden"
              }`}
              id="promotion"
              role="tabpanel"
              aria-labelledby="promotion-tab"
            >
              <ProductPromotion />
            </div>
            <div
              className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                activeTab === "description" ? "" : "hidden"
              }`}
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <ProductDetail
                descriptions={descriptions}
                productId={product.id}
              />
            </div>
            <div
              className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                activeTab === "reviews" ? "" : "hidden"
              }`}
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              {[...Array(5)].map((_, index) => (
                <div key={index} className="my-5">
                  <Reviews />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withLoader(ProductPage);
