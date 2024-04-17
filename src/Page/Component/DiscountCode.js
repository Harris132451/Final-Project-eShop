import React from "react";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function DiscountCode(props) {
  const [Code, setCode] = useState("");

  function handleInput(el) {
    setCode(el.target.value);
  }

  function openTooltip() {
    <Tooltip
      anchorSelect="invalidCode"
      content="Invalid Discount code"
    ></Tooltip>;
  }

  return (
    <>
      <div className="bg-blue-50 rounded-md my-10 p-3 font-bold flex justify-end content-center flex-wrap md:flex-nowrap text-2xl">
        <input
          onChange={(el) => {
            handleInput(el);
          }}
          className="w-full md:w-3/4 p-3 mx-2 bg-white rounded-md border border-stroke bg-transparent text-2xl text-black outline-none focus:border-primary focus-visible:shadow-none"
          type="text"
          placeholder="Enter Discount Code here"
        ></input>
        <button
          className="invalidCode w-full md:w-1/4 p-3 bg-blue-600 rounded-md text-2xl hover:text-white"
          onClick={
            props.IsCodeUse === "false"
              ? () => props.handleDiscount(Code)
              : null
          }
        >
          {props.IsCodeUse === "invalid" && openTooltip()}
          {props.IsCodeUse === "true" ? "Valid Discount code!" : "ENTER"}
        </button>
      </div>
    </>
  );
}
