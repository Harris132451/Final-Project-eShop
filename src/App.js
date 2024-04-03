import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Component/Header.js";
import Promotion from "./Component/Promotion.js";
import Footer from "./Component/Footer.js";
//---------------------------------------------

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

  //---------------------------------------------
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
  //---------------------------------------------

  return (
    <>
      <Header
        temperature={temperature}
        weather={weather}
        updateCart={updateCart}
        CartItem={cart}
      />
      <Promotion
        location={location}
        temperature={temperature}
        updateTime={updateTime}
      />
      <Footer />
    </>
  );
}

export default App;
