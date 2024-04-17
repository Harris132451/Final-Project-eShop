function Weather(props) {
  const temperature = props.temperature;
  const weather = props.weather;

  return (
    <>
      <div className="flex mr-6 md:mr-4">
        <div class="mr-1 mt-0.5 text-xl text-white md:text-lg md:mt-0">
          {temperature}°C
        </div>
        <div className="h-8 w-8 md:h-7 md:w-7">
          {weather === "normal" && (
            <img
              src="https://www.svgrepo.com/show/503805/sun.svg"
              alt="normal"
            />
          )}
          {weather === "cold" && <img src="cold.png" alt="cold" />}
          {weather === "hot" && <img src="hot.png" alt="hot" />}
        </div>
      </div>
    </>
  );
}

export default Weather;
