import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { item } from "./Component/product";
import withLoader from "./Component/withLoader";
import Breadcrumb from "./Component/Breadcrumb";
import deliver from "./deliver-food-svgrepo-com.svg";
import gift from "./gift-svgrepo-com.svg";
import ProductPromotion from "./Component/productPromotion";

const ProductPage = (props) => {
  const [amount, setAmount] = useState(1);
  const { productPage } = useParams();
  const decodedProductPage = decodeURIComponent(productPage);
  const product = item.find((i) => i.name === decodedProductPage);

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
    <section className="text-gray-700 overflow-hidden bg-white font-[sans-serif]">
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
            <div className="flex mb-4">
              <Link className="text-gray-600 ml-3">4 Reviews</Link>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Unit</span>
                <span className="mr-4">{product.unit}</span>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
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
                  } else if (window.innerWidth >= 1024) {
                    props.updateIsOpenCart(true);
                  }
                }}
              >
                Add to cart
              </button>
            </div>
            <div className="flex items-center justify-between mt-6 pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex items-center space-x-2">
                <img src={deliver} alt="deliver" className="w-5 h-5" />
                <span>Home Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={gift} alt="gift" className="w-7 h-7" />
                <span>Click & Collect</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 space-y-10">
        <div className="flex flex-col items-center justify-center px-10 py-10 mx-auto bg-gray-200 shadow-lg max-w-4xl truncate inline-block rounded-xl">
          <h2 className="text-xl font-semibold py-5">Promotion</h2>
          <ProductPromotion />
        </div>
        <div className="text-lg font-semibold">Description</div>
        <div className="text-lg font-semibold">Reviews</div>
      </div>
    </section>
  );
};

export default withLoader(ProductPage);
