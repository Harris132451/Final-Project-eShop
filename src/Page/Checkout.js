import { Link } from "react-router-dom";
import TotalPriceCount from "./Component/TPinCart.js";
import withLoader from "./Component/withLoader";

const Checkout = function ({ updateCart, CartItem, Account }) {
  function PaidDeleteCart() {
    updateCart("Paid");
  }
  let PriceSum = 0;
  if (CartItem[Account].length > 1) {
    CartItem[Account].map((p) => {
      console.log(PriceSum);
      PriceSum += p.qty * p.price;
    });
  } else if (CartItem[Account].length === 1) {
    PriceSum += CartItem[Account][0].qty * CartItem[Account][0].price;
  }
  return (
    <div>
      <h2>Total Items & Prices</h2>
      {CartItem[Account].length > 1 &&
        CartItem[Account].map((p) => {
          return <TotalPriceCount ItemInfo={p} />;
        })}
      {CartItem[Account].length === 1 && (
        <TotalPriceCount ItemInfo={CartItem[Account][0]} />
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
