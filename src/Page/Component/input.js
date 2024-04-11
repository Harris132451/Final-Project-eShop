import { useEffect, useState } from "react";
import { item } from "./product.js";

function NameButton(n) {
  console.log(n);
}

const Inputbox = function () {
  const [Word, setWord] = useState("");
  const [BtnWord, setBtnWord] = useState("");
  const [IsSerachBtn, setIsSerachBtn] = useState(false);
  const [ResultName, setResultName] = useState([]);
  const [BtnResultName, setBtnResultName] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
    <>
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
                      {BtnResultName.map((n) => {
                        return (
                          <button
                            key={n}
                            onClick={() => NameButton(n)}
                            class="w-72 m-1 p-2 rounded-md text-blue-900 hover:bg-blue-200"
                          >
                            <div class="text-left">{n}</div>
                          </button>
                        );
                      })}
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
              onChange={(b) => InputName(b)}
              class="w-72 border-2 border-blue-700  rounded-full bg-blue-800 text-white px-5 opacity-80 text-lg"
            ></input>
            {ResultName.length > 0 && window.innerWidth >= 1024 && (
              <div class="bg-white z-50 rounded-md shadow-lg pt-2 ">
                <div class="flex flex-wrap  overflow-scroll h-96">
                  {ResultName.map((n) => {
                    return (
                      <button
                        key={n}
                        onClick={() => NameButton(n)}
                        class="w-96 m-1 px-2 py-2 rounded-md text-blue-900 hover:bg-blue-200"
                      >
                        <div class="text-left">{n}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Inputbox;
