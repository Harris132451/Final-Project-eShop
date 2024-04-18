import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function SlotBtn(props) {
  const nav = useNavigate();
  return (
    <>
      <div
        data-tooltip-id="SlotBtn"
        className="fixed left-10 top-1/2 h-32 w-32 z-10 cursor-pointer"
      >
        <button
          onClick={
            () => (props.Signin === "true" ? nav("/Lottery") : nav("/Signin")) //True is string or boolem?
          }
        >
          <img
            className="h-28 w-28"
            src="/SlotMachine2.png"
            alt="SlotMachine"
          />
        </button>
      </div>
      <Tooltip
        id="SlotBtn"
        content="Get a free item!"
        noArrow="true"
        place="top"
      ></Tooltip>
    </>
  );
}
