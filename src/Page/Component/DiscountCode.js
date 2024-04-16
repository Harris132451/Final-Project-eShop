import React from "react";
import { useState } from "react";

export default function DiscountCode(props) {
  const [Code, setCode] = useState("");

  function handleInput(el) {
    setCode(el.target.value);
  }

  return (
    <>
      <div className="bg-blue-50 rounded-md my-10 p-3 font-bold flex justify-end content-center text-2xl">
        <input
          onChange={(el) => {
            handleInput(el);
          }}
          className="w-3/4 p-3 mx-2 bg-white rounded-md border border-stroke bg-transparent text-2xl text-black outline-none focus:border-primary focus-visible:shadow-none"
          type="text"
          placeholder="Enter Discount Code here"
        ></input>
        {props.IsCodeUse === "true" ? (
          <button className="w-1/4 p-3 bg-blue-600 rounded-md text-2xl">
            Valid Discount code!
          </button>
        ) : (
          <button
            className="w-1/4 p-3 bg-blue-600 rounded-md text-2xl"
            onClick={() => {
              props.handleDiscount(Code);
            }}
          >
            ENTER
          </button>
        )}
      </div>
    </>
  );
}
