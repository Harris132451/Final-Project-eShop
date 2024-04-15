import { Link } from "react-router-dom";
import TotalPriceCount from "./Component/totalPricesInCart.js";
import withLoader from "./Component/withLoader";

const Checkout = function ({ updateCart, items, Account }) {
  function PaidDeleteCart() {
    updateCart("Paid");
  }
  let PriceSum = 0;
  if (items[Account].length > 1) {
    items[Account].map((p) => {
      console.log(PriceSum);
      PriceSum += p.qty * p.price;
    });
  } else if (items[Account].length === 1) {
    PriceSum += items[Account][0].qty * items[Account][0].price;
  }
  return (
    <div className="pt-[20px] mx-auto lg:max-w-6xl max-w-xl md:max-w-full space-y-4">
      <h2 className="bg-gray-300 rounded-md p-3 font-bold h-20 content-center text-4xl ">
        My Cart
      </h2>
      {items[Account].length > 1 &&
        items[Account].map((p) => {
          return <TotalPriceCount ItemInfo={p} />;
        })}
      {items[Account].length === 1 && (
        <TotalPriceCount ItemInfo={items[Account][0]} />
      )}
      {PriceSum > 0 ? (
        <h5 className="bg-gray-300 rounded-md p-3 font-bold h-20 content-center text-2xl text-center md:text-right">
          Total Prices : {PriceSum}
        </h5>
      ) : (
        <h3 className="bg-gray-300 rounded-md p-3 font-bold h-20 content-center text-2xl text-center md:text-right">
          Nothing in Cart !
        </h3>
      )}
      <div className="bg-gray-300 rounded-md p-3 font-bold h-40 content-center">
        <Link to="/">
          <button
            className="bg-red-400 rounded-md w-full my-2 p-3 text-2xl"
            onClick={PaidDeleteCart}
          >
            CHECKOUT
          </button>
        </Link>
        <Link to="/">
          <button className="bg-gray-100 rounded-md w-full my-2 p-2 text-xl">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default withLoader(Checkout);
