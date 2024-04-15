import ReactDOM from "react-dom/client";
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

const listRef = collection(db, "List");
const docRef = doc(db, "List", "PNS");
const getList = await getDoc(docRef);

if (getList.exists()) {
  console.log(getList.data().newData);
} else {
  console.log("No such document!");
}

let saveAcc = JSON.parse(localStorage.getItem("Account"));
let SaveAcc = saveAcc;

export default function App() {
  const [data, setData] = useState(getList.data().newData);
  const [AccountName, setAccountName] = useState(SaveAcc);
  const [IsOpenCart, setIsOpenCart] = useState(false);

  async function updateCart(product) {
    let newData = { ...data };
    let acn = AccountName;
    if (product === "Paid") {
      newData[acn]["Cart"] = [];
    } else if (acn) {
      let PNameArr = [];
      newData[acn]["Cart"].forEach((c) => {
        PNameArr.push(c.name);
      });
      if (!PNameArr.includes(product.name)) {
        newData[acn]["Cart"].push({ ...product, qty: 1 });
      } else {
        for (let i = 0; i < newData[acn]["Cart"].length; i++) {
          if (
            newData[acn]["Cart"].length > 0 &&
            newData[acn]["Cart"][i].name === product.name &&
            product.qty === 0
          ) {
            newData[acn]["Cart"].splice(i, 1);
          } else if (
            newData[acn]["Cart"].length > 0 &&
            newData[acn]["Cart"][i].name === product.name
          ) {
            newData[acn]["Cart"][i].qty = product.qty;
          }
        }
      }
    }
    await setDoc(doc(listRef, "PNS"), {
      newData,
    });
    setData(newData);
  }

  async function updateAccountName(Name) {
    let newData = { ...data };
    if (!Object.keys(newData).includes(Name) && Name !== null) {
      newData[Name] = { Cart: [], WishList: [] };
      await setDoc(doc(listRef, "PNS"), {
        newData,
      });
    }
    setData(newData);
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
      <BrowserRouter>
        <Header
          updateCart={updateCart}
          updateAccountName={updateAccountName}
          updateIsOpenCart={updateIsOpenCart}
          items={data}
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
                items={data}
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
                items={data}
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
                updateIsOpenCart={updateIsOpenCart}
              />
            }
          />
          <Route
            path="/:categoryName/:smallCategoriesName"
            element={
              <SmallCategoriesPage
                updateCart={updateCart}
                updateIsOpenCart={updateIsOpenCart}
              />
            }
          />
          <Route
            path="/products/:productPage"
            element={
              <ProductPage
                updateCart={updateCart}
                updateIsOpenCart={updateIsOpenCart}
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
