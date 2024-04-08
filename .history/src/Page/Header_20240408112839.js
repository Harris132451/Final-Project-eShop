import { Link } from "react-router-dom";
import { useState } from "react";
import Weather from "./Component/Weather.js";
import Inputbox from "./Component/input.js";
import Cart from "./Component/SC.js";
import { item } from "./Component/product";
import { FaCaretDown } from "react-icons/fa";

function Header(props) {
  const temperature = props.temperature;
  const weather = props.weather;
  const [OpenCart, setOpenCart] = useState(false);
  function ButtonLink({ to, BtnName }) {
    return <Link to={to}>{BtnName}</Link>;
  }

  const dropdownNames = new Set(item.map(data => data.bigcategories));
  const dropdownLinks = [...dropdownNames];
  // eslint-disable-next-line no-undef
  const uniqueSmallCategories = new Set(item.filter(item => item.bigcategories === bigcategorie).map(filteredItem => filteredItem.smallcategories));
  const uniqueSmallCategoriesArray = Array.from(uniqueSmallCategories);

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
        <ButtonLink
          to="Account"
          BtnName={<button className="bg-gray-500">Login</button>}
        />
        <button
          onClick={() => {
            setOpenCart(!OpenCart);
          }}
        >
          Shopping cart
        </button>
        {!OpenCart && (
          <div style={{ borderStyle: "solid", width: "300px" }}>
            <Cart
              ItemChangeIncart={props.updateCart}
              CartItems={props.CartItem}
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

      <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 flex justify-evenly">
        {dropdownLinks.map(bigcategorie => (
          <li key={bigcategorie} className="list-none group relative cursor-pointer">
            <Link to={`/${bigcategorie}`} className="flex items-center gap-[2px] py-2">
              {bigcategorie}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {uniqueSmallCategoriesArray.map(smallCategory => (
                    <li key={smallCategory}>
                      <Link to={`/${bigcategorie}/${smallCategory}`}>
                        {smallCategory}
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
