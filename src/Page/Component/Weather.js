function Weather(props) {
  const temperature = props.temperature;
  const weather = props.weather;

  return (
    <>
      <div className="bg-gray-400 flex">
        {temperature}°C
        <div className="h-8 w-8">
          {weather === "normal" && <img src="normal.png" alt="normal" />}
          {weather === "cold" && <img src="cold.png" alt="cold" />}
          {weather === "hot" && <img src="hot.png" alt="hot" />}
        </div>
      </div>
    </>
  );
}

export default Weather;
