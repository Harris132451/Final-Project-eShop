import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { item } from "./product.js";

const Inputbox = function () {
  const [Word, setWord] = useState("");
  const [BtnWord, setBtnWord] = useState("");
  const [IsBtnVisible, setIsBtnVisible] = useState(false);
  const [IsSerachBtn, setIsSerachBtn] = useState(false);
  const [ResultName, setResultName] = useState([]);
  const [BtnResultName, setBtnResultName] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function NameButton(n) {
    console.log(n);
  }

  function InputName(name) {
    setWord(name.target.value);
  }
  function InputBtnName(name) {
    setBtnWord(name.target.value);
  }
  useEffect(() => {
    const InputKey = Word.replace(" ", "").toLowerCase();
    const NameArr = [];
    item.map((p) => {
      if (
        p.name.replace(" ", "").toLowerCase().indexOf(InputKey) !== -1 &&
        InputKey !== ""
      ) {
        NameArr.push(p.name);
      }
    });
    setIsBtnVisible(true);
    setResultName(NameArr);
  }, [Word]);

  useEffect(() => {
    const InputKey = BtnWord.replace(" ", "").toLowerCase();
    const NameArr = [];
    item.map((p) => {
      if (
        p.name.replace(" ", "").toLowerCase().indexOf(InputKey) !== -1 &&
        InputKey !== ""
      ) {
        NameArr.push(p.name);
      }
    });
    setBtnResultName(NameArr);
  }, [BtnWord]);

  const inputRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setBtnWord("");
        setBtnResultName([]);
        setWord("");
        setResultName([]);
        setIsBtnVisible(false);
        setIsSerachBtn(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (window.innerWidth >= 1024) {
      setIsSerachBtn(false);
      setBtnWord("");
      setBtnResultName([]);
    } else {
      setWord("");
      setResultName([]);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div ref={inputRef}>
      <div class="flex lg:border-solid">
        <div>
          <div class="pt-5 h-auto w-6 m-2 hidden lg:block">
            <img src="/SerachBtn.png" />
          </div>
        </div>
        <div class="pt-7 block lg:hidden z-50">
          <button
            onClick={() => {
              setIsSerachBtn(!IsSerachBtn);
            }}
          >
            <div class="h-auto w-6 ml-2 ">
              <img src="/SerachBtn.png" />
            </div>
          </button>
          {IsSerachBtn && window.innerWidth < 1024 && (
            <div class="flex flex-col pt-1">
              <input
                onChange={(b) => InputName(b)}
                class="h-8 w-[300px] mx-1 mt-1 p-2 border rounded border-blue-900"
              ></input>
              {ResultName.length > 0 && IsBtnVisible && (
                <div class="bg-white z-50 rounded-md shadow-lg pt-2 ">
                  <div class="flex flex-wrap">
                    <div class="overflow-scroll h-96">
<<<<<<< HEAD
                      {BtnResultName.map((n) => {
                        return (
                          <button
                            key={n}
                            onClick={() => NameButton(n)}
                            class="w-72 m-1 p-2 rounded-md text-blue-900 hover:bg-blue-200"
                          >
                            {n}
                            <div class="text-left">{n}</div>
                          </button>
                        );
                      })}
=======
                      {ResultName.length > 0 && (
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDelayButton"
                        >
                          {ResultName.map((n) => {
                            return (
                              <li>
                                <Link
                                  key={n}
                                  to={`/products/${n}`}
                                  class="block w-72 px-4 py-2 text-blue-900 hover:bg-blue-100 active:bg-blue-200 cursor-pointer rounded-md"
                                >
                                  {n}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
>>>>>>> f70af53e61bcbf70a0b216f06887b4348645ed84
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {window.innerWidth >= 1024 && (
          <div class="flex flex-col pt-6 ">
            <input
              onChange={(b) => InputName(b)}
              class="w-72 border-2 border-blue-700  rounded-full bg-blue-800 text-white px-5 opacity-80 text-lg"
            ></input>
            {ResultName.length > 0 && IsBtnVisible && (
              <div class="bg-white z-50 rounded-md shadow-lg pt-2 ">
                <div class="flex flex-wrap">
                  <div class="overflow-scroll h-96">
                    {ResultName.length > 0 && (
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDelayButton"
                      >
                        {ResultName.map((n) => {
                          return (
                            <li>
                              <Link
                                key={n}
                                to={`/products/${n}`}
                                class="block w-72 px-4 py-2 text-blue-900 hover:bg-blue-100 active:bg-blue-200 cursor-pointer rounded-md"
                              >
                                {n}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputbox;
