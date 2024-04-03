import Weather from "./Weather.js";

function Header(props) {
  const temperature = props.temperature;
  const weather = props.weather;

  return (
    <>
      <div className="flex">
        <img src="favicon.ico" alt="logo" />
        <Weather temperature={temperature} weather={weather} />
        <button className="bg-gray-500">Login</button>
        <button className="bg-gray-300">Shopping cart</button>
      </div>
    </>
  );
}

export default Header;
