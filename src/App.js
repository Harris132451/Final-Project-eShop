import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Page/Header.js";
import Footer from "./Page/Footer.js";
import Home from "./Page/Home.js";
import ProductPage from "./Page/ProductPage.js";
import Checkout from "./Page/Checkout.js";
import Account from "./Page/Account.js";

let savedCart = JSON.parse(localStorage.getItem("Cart"));
let SaveCart = savedCart;
let saveAcc = JSON.parse(localStorage.getItem("Account"));
let SaveAcc = saveAcc;
export default function App() {
  const [cart, setCart] = useState(SaveCart);
  const [AccountName, setAccountName] = useState(SaveAcc);
  const [IsOpenCart, setIsOpenCart] = useState(false);
  function updateCart(product) {
    let newCart = { ...cart };
    let acn = AccountName;
    if (product === "Paid") {
      newCart[acn] = [];
    } else if (acn) {
      let PNameArr = [];
      newCart[acn].forEach((c) => {
        PNameArr.push(c.name);
      });
      if (!PNameArr.includes(product.name)) {
        newCart[acn].push({ ...product, qty: 1 });
      } else {
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
    }
    localStorage.setItem("Cart", JSON.stringify(newCart));
    SaveCart = newCart;
    console.log(newCart);
    setCart(newCart);
  }
  function updateAccountName(Name) {
    let newCart = cart;
    if (!Object.keys(newCart).includes(Name) && Name !== null) {
      newCart[Name] = [];
    }
    localStorage.setItem("Cart", JSON.stringify(newCart));
    SaveCart = newCart;
    localStorage.setItem("Account", JSON.stringify(Name));
    SaveAcc = Name;
    setCart(newCart);
    setAccountName(Name);
  }
  function updateIsOpenCart(Order) {
    setIsOpenCart(Order);
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
          updateIsOpenCart={updateIsOpenCart}
          CartItem={cart}
          Account={AccountName}
          OpenCart={IsOpenCart}
        />
        <Routes>
          <Route
            index
            element={
              <Home
                updateCart={updateCart}
                updateIsOpenCart={updateIsOpenCart}
              />
            }
          />
          <Route path="ProductPage" element={<ProductPage />} />
          <Route
            path="Checkout"
            element={
              <Checkout
                updateCart={updateCart}
                CartItem={cart}
                Account={AccountName}
              />
            }
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
