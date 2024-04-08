import { Link } from "react-router-dom";
import { useState } from "react";
import Weather from "./Component/Weather.js";
import Inputbox from "./Component/input.js";
import Cart from "./Component/SC.js";

function Header(props) {
  const temperature = props.temperature;
  const weather = props.weather;
  const [OpenCart, setOpenCart] = useState(false);
  const [OpenLogin, setOpenLogin] = useState(true);
  function ButtonLink({ to, BtnName }) {
    return <Link to={to}>{BtnName}</Link>;
  }
  return (
    <>
      <div className="flex">
        <ButtonLink
          to="/"
          BtnName={
            <button>
              <img
                src="https://api.pns.hk/medias/PNS-logo-2X.png?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w4MDE0fGltYWdlL3BuZ3xhREZsTDJnNU5DOHhNRFl4TmprNU9EazROVGMxT0M5UVRsTmZiRzluYjE4eVdDNXdibWN8Nzg4ODYyOWY1NDEwM2VhMjNkMjJiN2M5ODkxMzQzMjVkYWNkMWQ1NWJhMDk5OWIwZTgzMGViMGE2YzljNTllZQ"
                alt="logo"
              />
            </button>
          }
        />
        <Inputbox />
        <Weather temperature={temperature} weather={weather} />
        {props.Account ? (
          <>
            <div>Welcome,{props.Account}</div>
            <ButtonLink
              to="/"
              BtnName={
                <button
                  className="bg-gray-500"
                  onClick={() => {
                    setOpenLogin(!OpenLogin);
                    props.updateAccountName(null);
                  }}
                >
                  Logout
                </button>
              }
            />
          </>
        ) : (
          <ButtonLink
            to="Account"
            BtnName={<button className="bg-gray-500">Login</button>}
          />
        )}
        <button
          onClick={() => {
            setOpenCart(!OpenCart);
          }}
        >
          Shopping cart
        </button>
        {OpenCart && !props.Account && (
          <div style={{ borderStyle: "solid", width: "300px" }}>
            <h5>Please Login First !</h5>
          </div>
        )}
        {OpenCart && props.Account && (
          <div style={{ borderStyle: "solid", width: "300px" }}>
            <Cart
              ItemChangeIncart={props.updateCart}
              CartItems={props.CartItem}
              CartAccount={props.Account}
            />
            <ButtonLink
              to="Checkout"
              BtnName={
                <button
                  className="bg-gray-500"
                  onClick={() => {
                    setOpenCart(!OpenCart);
                  }}
                >
                  Get Total
                </button>
              }
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
