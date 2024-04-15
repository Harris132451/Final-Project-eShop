function Weather(props) {
  const temperature = props.temperature;
  const weather = props.weather;

  return (
    <>
      <div className="flex mr-6 sm:mr-3">
        <div class="mr-1 mt-0.5 text-xl text-white sm:text-lg sm:mt-0">
          {temperature}°C
        </div>
        <div className="h-8 w-8 sm:h-7 sm:w-7">
          {weather === "normal" && <img src="normal.png" alt="normal" />}
          {weather === "cold" && <img src="cold.png" alt="cold" />}
          {weather === "hot" && <img src="https://www.svgrepo.com/show/503805/sun.svg" alt="hot" />}
        </div>
      </div>
    </>
  );
}

export default Weather;
