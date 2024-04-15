import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Page/Header.js";
import Footer from "./Page/Footer.js";
import Home from "./Page/Home.js";
import ProductPage from "./Page/ProductPage.js";
import Checkout from "./Page/Checkout.js";
import Signin from "./Page/Signin.js";
import Signup from "./Page/Signup.js";
import CategoriesPage from "./Page/Component/categoriesPage.js";
import SmallCategoriesPage from "./Page/Component/smallCategoriesPage.js";
import ScrollButton from "./Page/Component/ScrollBtn.js";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebase.js";

const listRef = collection(db, "PNS");

// Cart firebase data

const docCart = doc(db, "PNS", "Cart");
const savedCart = await getDoc(docCart);
let getCart = savedCart.data();
if (savedCart.exists()) {
  if (Object.keys(getCart).length === 0) {
    let Data = {};
    await setDoc(doc(listRef, "Cart"), {
      Data,
    });
    getCart = { Data: {} };
  }
} else {
  getCart = { Data: {} };
}

// WishList firebase data

const docWishList = doc(db, "PNS", "WishList");
const savedWishList = await getDoc(docWishList);
let getWishList = savedWishList.data();
if (savedWishList.exists()) {
  if (Object.keys(getWishList).length === 0) {
    let Data = {};
    await setDoc(doc(listRef, "WishList"), {
      Data,
    });
    getWishList = { Data: {} };
  }
} else {
  getWishList = { Data: {} };
}

let saveAcc = JSON.parse(localStorage.getItem("Account"));
let SaveAcc = saveAcc;

export default function App() {
  const [cartData, setCartData] = useState(getCart["Data"]);
  const [wishListData, setWishListData] = useState(getWishList["Data"]);
  const [AccountName, setAccountName] = useState(SaveAcc);
  const [IsOpenCart, setIsOpenCart] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  //Weather

  useEffect(() => {
    async function fetchData() {
      const weatherAPI =
        "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en";
      const res = await fetch(weatherAPI);
      const weatherData = await res.json();

      const location = weatherData.temperature.data[1].place;
      const temperature = weatherData.temperature.data[1].value;
      const updateTime = weatherData.updateTime;
      const fomatTime = `${updateTime.slice(0, 10)}, ${updateTime.slice(
        11,
        16
      )}`;

      setTemperature(temperature);
      if (temperature < 15) {
        setWeather("cold");
      } else if (temperature > 35) {
        setWeather("hot");
      } else {
        setWeather("normal");
      }
    }

    fetchData();
  }, []);

  // Cart

  async function updateCart(product) {
    let Data = { ...cartData };
    let acn = AccountName;
    if (product === "Paid") {
      Data[acn] = [];
    } else if (!Data[acn]) {
      Data[acn] = [{ ...product, qty: 1 }];
    } else if (acn) {
      let PNameArr = [];
      Data[acn].forEach((c) => {
        PNameArr.push(c.name);
      });
      if (!PNameArr.includes(product.name)) {
        Data[acn].push({ ...product, qty: 1 });
      } else {
        for (let i = 0; i < Data[acn].length; i++) {
          if (
            Data[acn].length > 0 &&
            Data[acn][i].name === product.name &&
            product.qty === 0
          ) {
            Data[acn].splice(i, 1);
          } else if (
            Data[acn].length > 0 &&
            Data[acn][i].name === product.name
          ) {
            Data[acn][i].qty = product.qty;
          }
        }
      }
    }
    await setDoc(doc(listRef, "Cart"), {
      Data,
    });
    setCartData(Data);
  }

  // Account

  async function updateAccountName(Name) {
    let AccCartData = { ...cartData };
    if (!Object.keys(AccCartData).includes(Name) && Name !== null) {
      AccCartData[Name] = [];
      let Data = AccCartData;
      await setDoc(doc(listRef, "Cart"), {
        Data,
      });
      setCartData(AccCartData);
    }
    let AccWishListData = { ...wishListData };
    if (!Object.keys(AccWishListData).includes(Name) && Name !== null) {
      AccWishListData[Name] = [];
      let Data = AccWishListData;
      await setDoc(doc(listRef, "WishList"), {
        Data,
      });
      setWishListData(AccWishListData);
    }
    localStorage.setItem("Account", JSON.stringify(Name));
    SaveAcc = Name;
    setAccountName(Name);
  }

  function updateIsOpenCart(Order) {
    setIsOpenCart(Order);
  }

  return (
    <>
      <BrowserRouter>
        <Header
          updateCart={updateCart}
          updateAccountName={updateAccountName}
          updateIsOpenCart={updateIsOpenCart}
          items={cartData}
          Account={AccountName}
          OpenCart={IsOpenCart}
          temperature={temperature}
          weather={weather}
        />

        <Routes>
          <Route
            index
            element={
              <Home
                updateCart={updateCart}
                items={cartData}
                updateIsOpenCart={updateIsOpenCart}
                Account={AccountName}
              />
            }
          />
          <Route
            path="Checkout"
            element={
              <Checkout
                updateCart={updateCart}
                items={cartData}
                Account={AccountName}
              />
            }
          />
          <Route
            path="Signin"
            element={<Signin updateAccountName={updateAccountName} />}
          />
          <Route
            path="Signup"
            element={<Signup updateAccountName={updateAccountName} />}
          />
          <Route
            path="/:categoryName"
            element={
              <CategoriesPage
                updateCart={updateCart}
                items={cartData}
                updateIsOpenCart={updateIsOpenCart}
                Account={AccountName}
              />
            }
          />
          <Route
            path="/:categoryName/:smallCategoriesName"
            element={
              <SmallCategoriesPage
                updateCart={updateCart}
                items={cartData}
                updateIsOpenCart={updateIsOpenCart}
                Account={AccountName}
              />
            }
          />
          <Route
            path="/products/:productPage"
            element={
              <ProductPage
                updateCart={updateCart}
                items={cartData}
                updateIsOpenCart={updateIsOpenCart}
                Account={AccountName}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollButton />
    </>
  );
}
