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
    <div class="pt-[150px]">
      <h2>Total Items & Prices</h2>
      {items[Account].length > 1 &&
        items[Account].map((p) => {
          return <TotalPriceCount ItemInfo={p} />;
        })}
      {items[Account].length === 1 && (
        <TotalPriceCount ItemInfo={items[Account][0]} />
      )}
      {PriceSum > 0 ? (
        <h5>Total Prices : {PriceSum}</h5>
      ) : (
        <h3>Nothing in Cart !</h3>
      )}
      <Link to="/">
        <button className="bg-gray-500" onClick={PaidDeleteCart}>
          PAY
        </button>
      </Link>
      <Link to="/">
        <button className="bg-blue-500">Leave Cart</button>
      </Link>
    </div>
  );
};

export default withLoader(Checkout);
