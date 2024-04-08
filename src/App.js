import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Page/Header.js";
import Footer from "./Page/Footer.js";
import Home from "./Page/Home.js";
import ProductPage from "./Page/ProductPage.js";
import Checkout from "./Page/Checkout.js";
import Account from "./Page/Account.js";

export default function App() {
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
  const [AccountName, setAccountName] = useState(null);
  console.log(AccountName);
  function updateCart(product) {
    let newCart = [...cart];
    if (product === "Paid") {
      newCart = [];
    } else {
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
    }
    setCart(newCart);
  }
  console.log(cart);
  function updateAccountName(Name) {
    setAccountName(Name);
  }
  return (
    <>
      <BrowserRouter>
        <Header
          updateCart={updateCart}
          updateAccountName={updateAccountName}
          CartItem={cart}
          Account={AccountName}
        />
        <Routes>
          <Route index element={<Home />} />
          <Route path="ProductPage" element={<ProductPage />} />
          <Route
            path="Checkout"
            element={<Checkout updateCart={updateCart} CartItem={cart} />}
          />
          <Route
            path="Account"
            element={<Account updateAccountName={updateAccountName} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
