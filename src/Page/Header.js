import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Weather from "./Component/Weather.js";
import Inputbox from "./Component/input.js";
import CartBox from "./Component/shopCart.js";
import { FaCaretDown } from "react-icons/fa";
import { categories } from "./Component/categoriesData.js";

function Header(props) {
  const temperature = props.temperature;
  const weather = props.weather;
  const [OpenLogin, setOpenLogin] = useState(true);

  function ButtonLink({ to, BtnName }) {
    return <Link to={to}>{BtnName}</Link>;
  }

  const boxRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        props.updateIsOpenCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [boxRef]);

  const dropdownLinks = categories;

  return (
    <div class="fixed z-50">
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
                        <div class="text-lg sm:text-base">Logout</div>
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
                      <div class="h-auto w-5 mr-1 hidden sm:block">
                        <img src="/AccBtn.png" />
                      </div>
                      <div class="text-lg sm:text-base">Login</div>
                    </button>
                  }
                />
              </div>
            )}
          </div>
          <div>
            <button class="h-auto w-7 mr-2 pt-0.5 ml-3 sm:w-6 sm:ml-0 lg:mr-4">
              <img src="/WishBtn.png" />
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                props.updateIsOpenCart(!props.OpenCart);
              }}
              class="h-auto w-8 ml-3 mr-4 pt-0.5 sm:w-7 sm:ml-2 sm:mr-2 lg:mr-3"
            >
              <img src="/CartBtn.png" />
            </button>
          </div>
        </div>
        <div class="col-start-3 col-end-4 row-start-2 row-end-3 z-40 mt-6">
          <div class="flex justify-end ">
            {props.OpenCart && !props.Account && (
              <div
                ref={boxRef}
                class="bg-white border-solid border-blue-100 border text-blue-900 rounded-md  px-4 pb-4 pt-2 mt-2 shadow-lg"
              >
                <div class="grid grid-cols-3">
                  <h3 class="col-start-2 col-end-3 text-center text-2xl font-bold pb-3">
                    Shop Cart
                  </h3>
                  <button
                    onClick={() => {
                      props.updateIsOpenCart(!props.OpenCart);
                    }}
                    class="col-start-3 col-end-4 items-center pb-2"
                  >
                    <img
                      src="CloseBtn.png"
                      class="w-[25px] h-[25px] object-end ml-28 sm:w-[17px] sm:h-[17px] sm:ml-24"
                    />
                  </button>
                </div>
                <h5 class="text-center my-56 sm:my-44 text-xl sm:text-[15px] w-[400px] sm:w-[350px]">
                  Please Login First !
                </h5>
              </div>
            )}

            {props.OpenCart && props.Account && (
              <div
                ref={boxRef}
                class="bg-white border-solid border-blue-100 border rounded-md px-4 pb-4 pt-2 mt-2 shadow-lg flex justify-center flex-col text-blue-900"
              >
                <div class="grid grid-cols-3">
                  <h3 class="col-start-2 col-end-3 text-center text-2xl font-bold pb-3">
                    Shop Cart
                  </h3>
                  <button
                    onClick={() => {
                      props.updateIsOpenCart(!props.OpenCart);
                    }}
                    class="col-start-3 col-end-4 items-center pb-2"
                  >
                    <img
                      src="CloseBtn.png"
                      class="w-[25px] h-[25px] object-end ml-[110px] sm:w-[17px] sm:h-[17px] sm:ml-24"
                    />
                  </button>
                </div>
                {props.items[props.Account] && (
                  <>
                    <CartBox
                      ItemChangeIncart={props.updateCart}
                      Items={props.items}
                      CartAccount={props.Account}
                    />
                    {props.items[props.Account].length > 0 && (
                      <ButtonLink
                        to="Checkout"
                        BtnName={
                          <button
                            class="bg-blue-200 mt-4 ml-[120px] w-[110px] h-[35px] font-bold rounded-xl shadow-md hover:bg-blue-300 hover:shadow-none"
                            onClick={() => {
                              props.updateIsOpenCart(!props.OpenCart);
                            }}
                          >
                            Get Total
                          </button>
                        }
                      />
                    )}
                  </>
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
    </div>
  );
}

export default Header;
