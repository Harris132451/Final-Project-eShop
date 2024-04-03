import { useState } from "react";
import Weather from "./Component/Weather.js";
import Inputbox from "./Component/input.js";
import Cart from "./Component/SC.js";
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  const temperature = props.temperature;
  const weather = props.weather;
  const [OpenCart, setOpenCart] = useState(false);
  let CartWord;
  OpenCart ? (CartWord = "Shopping cart") : (CartWord = "Shopping cart");
  return (
    <>
      <div className="flex">
        <Link to="Product">
          <img src="favicon.ico" alt="logo" />
        </Link>
        <Inputbox />
        <Weather temperature={temperature} weather={weather} />
        <button className="bg-gray-500">Login</button>
        <button
          onClick={() => {
            setOpenCart(!OpenCart);
          }}
        >
          {CartWord}
        </button>
        {!OpenCart && (
          <Cart
            ItemChangeIncart={props.updateCart}
            CartItems={props.CartItem}
          />
        )}
      </div>
    </>
  );
}

export default Header;
