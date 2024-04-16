import { useEffect, useState, useRef } from "react";
import { item } from "./product.js";
import { Link } from "react-router-dom";

const Inputbox = function () {
  const [Word, setWord] = useState("");
  const [BtnWord, setBtnWord] = useState("");
  const [IsBtnVisible, setIsBtnVisible] = useState(false);
  const [IsSerachBtn, setIsSerachBtn] = useState(false);
  const [ResultName, setResultName] = useState([]);
  const [BtnResultName, setBtnResultName] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function NameButton(n) {
    console.log(n)
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
            <div class="flex flex-col pt-2 ">
              <div class="bg-white rounded-md shadow-lg">
                <div class="flex flex-wrap">
                  <input
                    onChange={(b) => InputBtnName(b)}
                    class="h-8 w-72 m-1 p-2 border rounded-md border-blue-900"
                  ></input>
                  {BtnResultName.length > 0 && (
                    <div class="overflow-scroll h-96">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                      {BtnResultName.map((n) => {
                        return (
                          <li>
                            <Link
                              key={n}
                              to={`/products/${n}`}
                              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              {n}
                            </Link>
                        </li>

                        );
                      })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {window.innerWidth >= 1024 && (
          <div class="flex flex-col pt-6 ">
                <input
                    onChange={(b) => InputBtnName(b)}
                    class="h-8 w-72 m-1 p-2 border rounded-md border-blue-900"
                  ></input>
                  {BtnResultName.length > 0 && (
                    <div class="overflow-scroll h-96">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                      {BtnResultName.map((n) => {
                        return (
                          <li>
                            <Link
                              key={n}
                              to={`/products/${n}`}
                              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              {n}
                            </Link>
                        </li>

                        );
                      })}
                      </ul>
                    </div>
                  )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inputbox;
