import { useEffect, useState } from "react";
import { item } from "./product.js";

function NameButton(n) {
  console.log(n);
}

const Inputbox = function () {
  const [Word, setWord] = useState("");
  const [ResultName, setResultName] = useState([]);
  function InputName(name) {
    setWord(name.target.value);
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
  console.log(ResultName);
  return (
    <>
      <input onChange={(b) => InputName(b)} class="hidden sm:block"></input>
      <div>
        {ResultName.length > 0 &&
          ResultName.map((n) => {
            return (
              <button
                key={n}
                onClick={() => NameButton(n)}
                class="hidden sm:block"
              >
                {n}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default Inputbox;
