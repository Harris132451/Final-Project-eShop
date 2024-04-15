import { useReducer } from "react";
import { ControlNumber } from "./controlNum.js";

const ProductCount = function ({ ItemQtyChangeIncart, ItemInfo }) {
  const createInitialState = () => {
    return {
      count: ItemInfo.qty,
    };
  };
  const [productNumState, dispatch] = useReducer(
    ControlNumber,
    null,
    createInitialState
  );
  const { count } = productNumState;
  console.log(productNumState);
  const handleIncrease = () => {
    dispatch({ type: "increase" });
    ItemInfo.qty += 1;
    ItemQtyChangeIncart(ItemInfo);
  };

  const handleDecrease = () => {
    if (productNumState.count > 0) {
      dispatch({ type: "decrease" });
      ItemInfo.qty -= 1;
      ItemQtyChangeIncart(ItemInfo);
    }
  };

  const handleDelete = () => {
    dispatch({ type: "delete" });
    ItemInfo.qty = 0;
    ItemQtyChangeIncart(ItemInfo);
  };
  let TotalPrice = (count * ItemInfo.price).toFixed(1);
  return (
    <div class="flex flex-col border-t-grey border-t-[1px] mx-2 w-[400px] sm:w-[330px] px-2 pt-3 pb-2 sm:pt-3 text-black">
      <div class="flex flex-col items-center justify-center sm:items-start sm:justify-start">
        <img
          src={"CountPlusBtn.png"}
          class="w-[140px] h-[140px] sm:w-[110px] sm:h-[110px] shadow rounded"
        />
        <h5 class="mt-1 text-[17px] text-center font-normal sm:text-left sm:mt-0.5 sm:text-[15px] sm:font-light">
          {ItemInfo.name}
        </h5>
      </div>
      <div class="flex flex-row">
        <button onClick={handleIncrease} class="w-6 h-6 sm:w-4 sm:h-4 mt-2">
          <img src={CountPlusBtn} />
        </button>
        <div class="mt-1 w-10 text-[20px] text-center sm:mt-0.5 sm:w-8 sm:text-[17px] sm:font-medium">
          {ItemInfo.qty}
        </div>
        <button
          onClick={handleDecrease}
          class="mr-6  w-6 h-6 sm:mr-3 sm:w-4 sm:h-4 mt-2"
        >
          <img src="https://www.svgrepo.com/show/468532/decrease-circle.svg" />
        </button>
        <button onClick={handleDelete} class="mt-[8.5px] w-5 h-5 sm:w-3 sm:h-3">
          <img src="https://www.svgrepo.com/show/499798/delete.svg" />
        </button>
        <h6 class="ml-24 w-36 text-[20px] self-center text-right sm:ml-20 sm:w-24 sm:text-[16px]">
          ${TotalPrice}
        </h6>
      </div>
    </div>
  );
};

export default ProductCount;
