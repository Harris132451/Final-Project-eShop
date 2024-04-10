import { Link } from "react-router-dom";
import { useState } from "react";
import Weather from "./Component/Weather.js";
import Inputbox from "./Component/input.js";
import Cart from "./Component/SC.js";
import { item } from "./Component/product";
import { FaCaretDown } from "react-icons/fa";
import { categories } from "./Component/categories.js"



function Header(props) {
  const temperature = props.temperature;
  const weather = props.weather;
  const [OpenCart, setOpenCart] = useState(false);
  const [OpenLogin, setOpenLogin] = useState(true);
  function ButtonLink({ to, BtnName }) {
    return <Link to={to}>{BtnName}</Link>;
  }

  const dropdownLinks = categories;

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

      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 flex justify-evenly">
      {dropdownLinks.map(bigcategorie => (
        <li key={bigcategorie.id} className="list-none group relative cursor-pointer">
          <Link to={`/${bigcategorie.Name}`} className="flex items-center gap-[2px] py-2">
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            {bigcategorie.Name}
          </Link>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
            <ul>
              {dropdownLinks
                .filter(item => item.Parent === bigcategorie.id)
                .map(smallCategory => (
                  <li key={smallCategory.id}>
                    <Link to={`/${bigcategorie.Name}/${smallCategory.Name}`}>
                      {smallCategory.Name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </li>
      ))}
    </div>
    </>
  );
}

export default Header;
