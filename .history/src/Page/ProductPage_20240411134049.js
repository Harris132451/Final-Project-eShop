import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { item } from "./Component/product";
import { useParams } from 'react-router-dom';



const ProductPage = function () {

  const [amount, setAmount] = useState(1);
  const { productPage } = useParams();
  const decodedProductPage = decodeURIComponent(productPage);
  const product = item.find(i => i.name === decodedProductPage);

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {/* ratings */}
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              
            </div>
            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button className="flex ml-auto text-white-500 bg-blue border-0 py-2 px-6 focus:outline-none rounded hover:bg-white-500 hover:text-blue hover:scale-110">Add to cart</button>
              
            </div>
            <div>
              <span>123</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
