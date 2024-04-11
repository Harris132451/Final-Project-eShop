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
  let TotalPrice = count * ItemInfo.price;
  return (
    <div class="flex flex-col w-56 sm:w-72 p-2 text-black">
      <img src={ItemInfo.picture} class="" width={120} height={120} />
      <h5 class="text-sm">{ItemInfo.name}</h5>
      <div class="flex flex-row">
        <button
          onClick={handleIncrease}
          class="mr-2 rounded-full bg-blue-400 text-blue-900 w-4 h-4 mt-2"
        >
          +
        </button>
        <div class="mt-0.5 mr-2 text-xl">{ItemInfo.qty}</div>
        <button
          onClick={handleDecrease}
          class="mr-3 rounded-full bg-blue-400 text-blue-900  w-4 h-4 mt-2"
        >
          -
        </button>
        <button
          onClick={handleDelete}
          class="mt-2 text-xl rounded-full bg-blue-400 text-blue-900 w-5 h-5"
        >
          x
        </button>
      </div>
      <h6>${TotalPrice}</h6>
    </div>
  );
};

export default ProductCount;
