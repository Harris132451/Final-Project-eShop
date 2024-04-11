function Weather(props) {
  const temperature = props.temperature;
  const weather = props.weather;

  return (
    <>
      <div className="flex mr-6 sm:mr-3">
        <div class="mr-1 text-white text-lg">{temperature}°C</div>
        <div className="h-7 w-7">
          {weather === "normal" && <img src="normal.png" alt="normal" />}
          {weather === "cold" && <img src="cold.png" alt="cold" />}
          {weather === "hot" && <img src="hot.png" alt="hot" />}
        </div>
      </div>
    </>
  );
}

export default Weather;
