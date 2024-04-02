import { useState } from "react";
import Cart from "./SC.js";

const CartBtn = function () {
  const [OpenCart, setOpenCart] = useState(false);
  let CartWord;
  OpenCart ? (CartWord = "Cart") : (CartWord = "Cart");
  return (
    <>
      <button
        onClick={() => {
          setOpenCart(!OpenCart);
        }}
      >
        {CartWord}
      </button>
      {!OpenCart && <Cart />}
    </>
  );
};

export default CartBtn;
