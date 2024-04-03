import "./App.css";
import Inputbox from "./Component/input.js";
import Cart from "./Component/SC.js";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([
    {
      name: "milk",
      photo:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRlJCcVQhECVkXp_NC1PI1t5z6fLMIFBpoC6tp5iM3mJHETwLfSY-8n8eE6SuyphcZ9rY53jf8Zb_zvDP9_S1oaEJHzQUucVkBN-zfVV5R4taHuEfpkhOHYUMNS0eMxI1mR57d9Y5Q&usqp=CAc",
      qty: 2,
      price: 20,
    },
    {
      name: "orange",
      photo:
        "https://healthmylifestyle.com/wp-content/uploads/2023/01/Fresh-squeezed-orange-juice-featured-500x500.jpg",
      qty: 5,
      price: 10,
    },
  ]);
  const [OpenCart, setOpenCart] = useState(false);
  let CartWord;
  OpenCart ? (CartWord = "Cart") : (CartWord = "Cart");
  function updateCart(product) {
    let newCart = [...cart];
    let PNameArr = [];
    cart.forEach((c) => {
      PNameArr.push(c.name);
    });
    if (!PNameArr.includes(product.name)) {
      newCart = [...cart, product];
    }
    for (let i = 0; i < newCart.length; i++) {
      if (
        cart.length > 0 &&
        newCart[i].name === product.name &&
        product.qty === 0
      ) {
        newCart.splice(i, 1);
      } else if (cart.length > 0 && newCart[i].name === product.name) {
        newCart[i].qty = product.qty;
      }
    }
    setCart(newCart);
  }
  console.log(cart);

  return (
    <>
      <Inputbox />
      <button
        onClick={() => {
          setOpenCart(!OpenCart);
        }}
      >
        {CartWord}
      </button>
      {!OpenCart && <Cart ItemChangeIncart={updateCart} CartItems={cart} />}
    </>
  );
}

export default App;
