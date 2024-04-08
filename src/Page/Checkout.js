import { Link } from "react-router-dom";
import TotalPriceCount from "./Component/TPinCart.js";
const Checkout = function ({ updateCart, CartItem }) {
  function PaidDeleteCart() {
    updateCart("Paid");
  }
  return (
    <div>
      <h2>Total Items & Prices</h2>
      {CartItem.length > 1 &&
        CartItem.map((p) => {
          return <TotalPriceCount ItemInfo={p} />;
        })}
      {CartItem.length === 1 && <TotalPriceCount ItemInfo={CartItem[0]} />}
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

export default Checkout;
