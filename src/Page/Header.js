import { Link } from "react-router-dom";
import { useState } from "react";
import Weather from "./Component/Weather.js";
import Inputbox from "./Component/input.js";
import Cart from "./Component/SC.js";
import { item } from "./Component/product";
import { FaCaretDown } from "react-icons/fa";
import { categories } from "./Component/categoriesData.js";

function Header(props) {
  const temperature = props.temperature;
  const weather = props.weather;
  const [OpenLogin, setOpenLogin] = useState(true);
  function ButtonLink({ to, BtnName }) {
    return <Link to={to}>{BtnName}</Link>;
  }

  const dropdownLinks = categories;

  return (
    <>
      <div class=" bg-blue-600 grid grid-cols-3 grid-rows-2 mx-auto h-24 p-2 lg:px-3 border-box">
        <div class=" col-start-1 col-end-2 flex flex-row">
          <ButtonLink
            to="/"
            BtnName={
              <button class="w-28 pt-4 sm:w-40 sm:pt-1 lg:w-44 lg:pt-0">
                <img
                  src="https://api.pns.hk/medias/PNS-logo-2X.png?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w4MDE0fGltYWdlL3BuZ3xhREZsTDJnNU5DOHhNRFl4TmprNU9EazROVGMxT0M5UVRsTmZiRzluYjE4eVdDNXdibWN8Nzg4ODYyOWY1NDEwM2VhMjNkMjJiN2M5ODkxMzQzMjVkYWNkMWQ1NWJhMDk5OWIwZTgzMGViMGE2YzljNTllZQ"
                  alt="logo"
                />
              </button>
            }
          />
          <Inputbox />
        </div>
        <div class="col-start-3 col-end-4 row-start-1 row-end-2 flex pt-6 flex-row justify-end">
          <Weather temperature={temperature} weather={weather} />
          <div class="mr-0 flex text-1xl text-white flex-row sm:mr-3 lg:mr-5">
            {props.Account ? (
              <>
                <div class="hidden sm:block">
                  <div class="text-lg w-20 px-0 mr-0 flex sm:mr-20 lg:mr-28">
                    <div class="text-lg">Welcome,</div>
                    <div class="font-bold">{props.Account}</div>
                  </div>
                </div>
                <div class="pt-0.5">
                  <ButtonLink
                    to="/"
                    BtnName={
                      <button
                        onClick={() => {
                          setOpenLogin(!OpenLogin);
                          props.updateAccountName(null);
                        }}
                        class="flex text-1xl text-white flex-row mr-2 sm:mr-0"
                      >
                        <div class="h-auto w-5 mr-1 hidden sm:block">
                          <img src="/AccBtn.png" />
                        </div>
                        <div>Logout</div>
                      </button>
                    }
                  />
                </div>
              </>
            ) : (
              <div class="pt-0.5">
                <ButtonLink
                  to="Signin"
                  BtnName={
                    <button class="flex text-1xl text-white flex-row mr-2 sm:mr-0">
                      <div class="h-auto w-9 pl-2 pr-2 hidden sm:block">
                        <img src="/AccBtn.png" />
                      </div>
                      <div>Login</div>
                    </button>
                  }
                />
              </div>
            )}
          </div>
          <div>
            <button class="h-auto w-6 mr-2 pt-0.5 ml-3 sm:ml-0 lg:mr-4">
              <img src="/WishBtn.png" />
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                props.updateIsOpenCart(!props.OpenCart);
              }}
              class="h-auto w-6 ml-3 mr-4 pt-0.5 sm:ml-2 sm:mr-2 lg:mr-3"
            >
              <img src="/CartBtn.png" />
            </button>
          </div>
        </div>
        <div class="col-start-3 col-end-4 row-start-2 row-end-3 z-40 mt-6">
          <div class="flex justify-end ">
            {props.OpenCart && !props.Account && (
              <div class="bg-white rounded-md  p-4 shadow-lg">
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
              <div class="bg-white rounded-md px-4 pb-4 pt-2 shadow-lg w-64 sm:w-80  flex justify-center flex-col text-blue-900">
                <button
                  onClick={() => {
                    props.updateIsOpenCart(!props.OpenCart);
                  }}
                >
                  X
                </button>
                <h3 class="text-center text-2xl font-bold">Shop Cart</h3>
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
        </div>
      </div>

      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-20 flex justify-evenly">
        {dropdownLinks
          .filter((item) => item.Parent === item.id)
          .map((bigcategorie) => (
            <li
              key={bigcategorie.id}
              className="list-none group relative cursor-pointer"
            >
              <Link
                to={`/${bigcategorie.Name}`}
                className="flex items-center gap-[2px] py-2"
              >
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
                {bigcategorie.Name}
              </Link>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {dropdownLinks
                    .filter(
                      (item) =>
                        item.Parent === bigcategorie.id &&
                        item.Parent !== item.id
                    )
                    .map((smallCategory) => (
                      <li key={smallCategory.id}>
                        <Link
                          to={`/${bigcategorie.Name}/${smallCategory.Name}`}
                        >
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
