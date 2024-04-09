import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Page/Header.js";
import Footer from "./Page/Footer.js";
import Home from "./Page/Home.js";
import ProductPage from "./Page/ProductPage.js";
import Checkout from "./Page/Checkout.js";
import Account from "./Page/Account.js";
import ScrollButton from "./Page/Component/ScrollBtn.js";

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

  //Weather
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [updateTime, setUpdateTime] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function fetchWeatherData() {
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

      setLocation(location);
      setTemperature(temperature);
      setUpdateTime(fomatTime);

      if (temperature < 15) {
        setWeather("cold");
      } else if (temperature > 35) {
        setWeather("hot");
      } else {
        setWeather("normal");
      }
    }
    fetchWeatherData();
  }, []);

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
          temperature={temperature}
          weather={weather}
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
      <ScrollButton />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
