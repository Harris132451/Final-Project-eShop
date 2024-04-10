import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Page/Header.js";
import Footer from "./Page/Footer.js";
import Home from "./Page/Home.js";
import ProductPage from "./Page/ProductPage.js";
import Checkout from "./Page/Checkout.js";
import Account from "./Page/Account.js";
import CategoriesPage from './Page/Component/categoriesPage.js';
import smallcategories from "./Page/Component/smallCategoriesPage.js";

let savedCart = JSON.parse(localStorage.getItem("Cart"));
let SaveCart = savedCart;

export default function App() {
  const [cart, setCart] = useState({
    Harris: [
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
    ],
    Leo: [
      {
        name: "milk",
        photo:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRlJCcVQhECVkXp_NC1PI1t5z6fLMIFBpoC6tp5iM3mJHETwLfSY-8n8eE6SuyphcZ9rY53jf8Zb_zvDP9_S1oaEJHzQUucVkBN-zfVV5R4taHuEfpkhOHYUMNS0eMxI1mR57d9Y5Q&usqp=CAc",
        qty: 30,
        price: 20,
      },
      {
        name: "orange",
        photo:
          "https://healthmylifestyle.com/wp-content/uploads/2023/01/Fresh-squeezed-orange-juice-featured-500x500.jpg",
        qty: 15,
        price: 10,
      },
    ],
  });
  const [AccountName, setAccountName] = useState(null);
  console.log(AccountName);
  function updateCart(product) {
    let newCart = cart;
    let acn = AccountName;
    if (product === "Paid") {
      newCart[acn] = [];
    } else {
      let PNameArr = [];
      newCart[acn].forEach((c) => {
        PNameArr.push(c.name);
      });
      if (!PNameArr.includes(product.name)) {
        newCart[acn] = [...acn, product];
      }
      for (let i = 0; i < newCart[acn].length; i++) {
        if (
          newCart[acn].length > 0 &&
          newCart[acn][i].name === product.name &&
          product.qty === 0
        ) {
          newCart[acn].splice(i, 1);
        } else if (
          newCart[acn].length > 0 &&
          newCart[acn][i].name === product.name
        ) {
          newCart[acn][i].qty = product.qty;
        }
      }
    }
    localStorage.setItem("Cart", JSON.stringify(newCart));
    SaveCart = newCart;
    setCart(newCart);
  }
  function updateAccountName(Name) {
    setAccountName(Name);
  }
  return (
    <>
      <button
        className={"test"}
        onClick={() => {
          console.log(SaveCart);
        }}
      >
        Test Cart
      </button>
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
          <Route path="/:categoryName" element={<CategoriesPage />} />
          <Route path="/:categoryName/:subcategoryName" element={<SubcategoryPage />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
