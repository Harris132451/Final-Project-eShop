import { useReducer } from "react";
import { ControlNumber } from "./controlNum.js";

const createInitialState = () => {
  return {
    count: 0,
  };
};

const Cart = function () {
  const [productNumState, dispatch] = useReducer(
    ControlNumber,
    null,
    createInitialState
  );
  const { count } = productNumState;
  console.log(productNumState);
  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };

  const handleDecrease = () => {
    if (productNumState.count > 0) {
      dispatch({ type: "decrease" });
    }
  };
  return (
    <div style={{ borderStyle: "solid", width: "300px" }}>
      <img
        src="https://i5.walmartimages.com/asr/b5bc06f5-7208-4e64-ba92-7be43b474d16.5cbc4d93cd2d649a66a73b9e7250dc05.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        width={200}
        height={200}
      />
      {count}
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};
export default Cart;
