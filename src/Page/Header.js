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
  const [OpenLogin, setOpenLogin] = useState(true);
  function ButtonLink({ to, BtnName }) {
    return <Link to={to}>{BtnName}</Link>;
  }

  const dropdownNames = new Set(item.map((data) => data.bigcategories));
  const dropdownLinks = [...dropdownNames];

  const uniqueSmallCategoriesMap = {};
  dropdownLinks.forEach((bigcategorie) => {
    const smallCategoriesSet = new Set(
      item
        .filter((item) => item.bigcategories === bigcategorie)
        .map((filteredItem) => filteredItem.smallcategories)
    );
    uniqueSmallCategoriesMap[bigcategorie] = Array.from(smallCategoriesSet);
  });

  return (
    <>
      <div class=" bg-blue-600 mx-auto flex max-h-24 items-center p-2 lg:px-4">
        <div class="h-auto w-48 pt-2 m-4">
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
        </div>
        <div class="h-auto w-6 m-2">
          <img src="/SerachBtn.png" />
        </div>
        <Inputbox />
        <Weather temperature={temperature} weather={weather} />
        {props.Account ? (
          <>
            <div>Welcome,{props.Account}</div>
            <ButtonLink
              to="/"
              BtnName={
                <button
                  class="flex text-1xl text-white flex-row items-center"
                  onClick={() => {
                    setOpenLogin(!OpenLogin);
                    props.updateAccountName(null);
                  }}
                >
                  <div class="h-auto w-4 m-2">
                    <img src="/AccBtn.png" />
                  </div>
                  Logout
                </button>
              }
            />
          </>
        ) : (
          <>
            <div>Welcome,Harris</div>
            <ButtonLink
              to="Account"
              BtnName={
                <button class="flex text-1xl text-white flex-row items-center">
                  <div class="h-auto w-12 pl-2 pr-2">
                    <img src="/AccBtn.png" />
                  </div>
                  Login
                </button>
              }
            />
          </>
        )}
        <button
          onClick={() => {
            props.updateIsOpenCart(!props.OpenCart);
          }}
        >
          <img src="/CartBtn.png" />
        </button>
        {props.OpenCart && !props.Account && (
          <div style={{ borderStyle: "solid", width: "300px" }}>
            <h3>Shop Cart</h3>
            <button
              onClick={() => {
                props.updateIsOpenCart(!props.OpenCart);
              }}
            >
              X
            </button>
            <h5>Please Login First !</h5>
          </div>
        )}
        {props.OpenCart && props.Account && (
          <div style={{ borderStyle: "solid", width: "300px" }}>
            <h3>Shop Cart</h3>
            <button
              onClick={() => {
                props.updateIsOpenCart(!props.OpenCart);
              }}
            >
              X
            </button>
            <Cart
              ItemChangeIncart={props.updateCart}
              CartItems={props.CartItem}
              CartAccount={props.Account}
            />
            {props.CartItem[props.Account].length > 0 ? (
              <ButtonLink
                to="Checkout"
                BtnName={
                  <button
                    className="bg-gray-500"
                    onClick={() => {
                      props.updateIsOpenCart(!props.OpenCart);
                    }}
                  >
                    Get Total
                  </button>
                }
              />
            ) : (
              <button className="bg-gray-500">Get Total</button>
            )}
          </div>
        )}
      </div>

      <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 flex justify-evenly">
        {dropdownLinks.map((bigcategorie) => (
          <li
            key={bigcategorie}
            className="list-none group relative cursor-pointer"
          >
            <Link
              to={`/${bigcategorie}`}
              className="flex items-center gap-[2px] py-2"
            >
              {bigcategorie}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {uniqueSmallCategoriesMap[bigcategorie].map(
                  (smallCategory, index) => (
                    <li key={index}>
                      <Link to={`/${bigcategorie}/${smallCategory}`}>
                        {smallCategory}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Header;
