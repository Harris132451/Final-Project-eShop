import React, { useEffect, useState } from "react";
import PromotionSlider from "./Component/Slider";
import withLoader from "./Component/withLoader";
import { Link } from "react-router-dom";
import { item } from "./Component/product";

const Home = function (props) {
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [updateTime, setUpdateTime] = useState("");
  const [weather, setWeather] = useState("");
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    async function fetchWeatherData() {
      const weatherAPI =
        "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en";
      const res = await fetch(weatherAPI);
      const weatherData = await res.json();

      const location = weatherData.temperature.data[1].place;
      const temperature = weatherData.temperature.data[1].value;
      const updateTime = weatherData.updateTime;
      const fomatTime = `${updateTime.slice(0, 10)}, ${updateTime.slice(11, 16)}`;

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

  useEffect(() => {
    const category = getRecommendedCategory();
    const filteredItems = item.filter((item) => item.bigcategories === category);
    const randomItems = filteredItems.sort(() => Math.random() - 0.5).slice(0, 6);
    setRandomItems(randomItems);
  }, [weather]); // Update randomItems when weather changes

  const getRecommendedCategory = () => {
    if (weather === "normal") {
      return "Drink";
    } else if (weather === "cold") {
      return "Snack";
    } else {
      return "Chilled";
    }
  };

  const getRecommendedTitle = () => {
    if (weather === "normal") {
      return <h3 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16  dark:text-gray-400">Your location is {location}, today's temperature is {temperature}°C, and today's weather is {weather}. It's suitable to have something to drink at home...</h3>;
    } else if (weather === "cold") {
      return <h3 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16  dark:text-gray-400">Your location is {location}, today's temperature is {temperature}°C, and today's weather is {weather}, suitable for eating snacks at home...</h3>;
    } else {
      return <h3 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16  dark:text-gray-400">Your location is {location}, today's temperature is {temperature}°C, and today's weather is {weather}, which is suitable for stocking up on food at home...</h3>;
    }
  };

  const renderRecommendedProducts = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
        {randomItems.map((filteredItem) => (
          <div key={filteredItem.id} className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative flex flex-col justify-between">
            <Link to={`/products/${filteredItem.name}`} className="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img
                src={filteredItem.picture}
                alt={filteredItem.name}
                className="w-full h-full rounded-xl object-cover"
              />
            </Link>
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-gray-800">
                {filteredItem.name}
              </h3>
              <h4 className="text-xl text-gray-700 font-bold mt-2">
                ${filteredItem.price}
              </h4>
              <button type="button" className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
                >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <PromotionSlider />
      {/* Weather component */}
      <div className="animate-bounce p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full mt-8 bg-blue-100 text-white rounded-lg shadow-md flex items-center justify-center">
        {getRecommendedTitle()}
      </div>  
      {/* Render recommended products */}
      {renderRecommendedProducts()}
    </>
  );
};

export default withLoader(Home);
