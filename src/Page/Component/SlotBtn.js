import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function SlotBtn() {
  const nav = useNavigate();
  return (
    <>
      <div
        data-tooltip-id="SlotBtn"
        className="fixed left-10 top-1/2 h-24 w-24 z-10 cursor-pointer"
      >
        <button
          className="bg-white hover:bg-blue-400 rounded-full"
          onClick={() => nav("/Lottery")}
        >
          <img src="/SlotMachine.png" alt="SlotMachine" />
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
