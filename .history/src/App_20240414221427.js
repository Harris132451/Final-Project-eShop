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

const listRef = collection(db, "List")

export default function App() {
  const [data, setData] = useState({});
  const [AccountName, setAccountName] = useState(null);
  const [IsOpenCart, setIsOpenCart] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "List", "PNS");
      const getList = await getDoc(docRef);
      const saveAcc = JSON.parse(localStorage.getItem("Account"));

      if (getList.exists()) {
        console.log(getList.data().newData);
        setData(getList.data().newData);
      } else {
        console.log("No such document!");
      }

      setAccountName(saveAcc);

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

  async function updateCart(product) {
    try {
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
  
      await setDoc(doc(listRef, "PNS"), { newData });
      setData(newData);
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  }
  
  async function updateAccountName(Name) {
    try {
      let newData = { ...data };
      if (!Object.keys(newData).includes(Name) && Name !== null) {
        newData[Name] = { Cart: [], WishList: [] };
        await setDoc(doc(listRef, "PNS"), { newData });
      }
      setData(newData);
      setAccountName(Name);
    } catch (error) {
      console.error("Error updating account name:", error);
    }
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
          items={data}
          Account={AccountName}
          OpenCart={IsOpenCart}
          temperature={temperature}
          weather={weather}
        />
        <Routes>
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

        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollButton />
    </>
  );
}
