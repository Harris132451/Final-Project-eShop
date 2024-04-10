import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { item } from "./Component/product"
import { useParams } from 'react-router-dom';



const ProductPage = function () {

  const [amount, setAmount] = useState(1);
  const { productPage } = useParams();
  const product = item.find(item => item.name === productPage);

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
          <div className='flex flex-row justify-between h-24'>
              <img src={} alt="" className='w-24 h-24 rounded-md cursor-pointer'/>
          </div>
      <div className='flex flex-col gap-4 lg:w-2/4'>
          <div>
              <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
              <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
          </div>
          <p className='text-gray-700'>
          Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
          </p>
          <h6 className='text-2xl font-semibold'>$ 199.00</h6>
          <div className='flex flex-row items-center gap-12'>
              <div className='flex flex-row items-center'>
                  <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                  <span className='py-4 px-6 rounded-lg'>{amount}</span>
                  <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
              </div>
              <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
          </div>
      </div>
  </div>
  );
};

export default ProductPage;
