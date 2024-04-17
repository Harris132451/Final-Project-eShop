import { useReducer, useState } from "react";
import { ControlNumber } from "./controlNum.js";

const ProductCount = function ({
  ItemQtyChangeIncart,
  ItemChangeInwishlist,
  ItemInfo,
  isOpenCart,
}) {
  const [isProductInCart, setIsProductInCart] = useState(false);

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

  const handleIncrease = () => {
    dispatch({ type: "increase" });
    ItemInfo.qty += 1;
    ItemQtyChangeIncart(ItemInfo);
  };

  const handleDecrease = () => {
    if (productNumState.count > 1) {
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

  const deleteWishList = () => {
    ItemChangeInwishlist(ItemInfo, "Delete");
  };

  const WishListToCart = () => {
    ItemInfo.qty = 1;
    ItemQtyChangeIncart(ItemInfo);
    ItemChangeInwishlist(ItemInfo, "ActiveCart");
    setIsProductInCart("true");
  };

  let TotalPrice = (count * ItemInfo.price).toFixed(1);
  return (
    <div class="flex flex-col border-t-grey border-t-[1px] mx-2 w-[370px] md:w-[320px] px-2 pt-3 pb-2 md:pt-3 text-black">
      <div class="flex flex-col items-center justify-center md:items-start md:justify-start">
        <img
          src={ItemInfo.picture}
          class="w-[140px] h-[140px] md:w-[110px] md:h-[110px] shadow rounded"
        />
        <h5 class="mt-1 text-[17px] text-center font-normal md:text-left md:mt-0.5 md:text-[15px] md:font-light">
          {ItemInfo.name}
        </h5>
      </div>
      {isOpenCart && (
        <div class="flex flex-row">
          <button onClick={handleIncrease} class="w-6 h-6 md:w-4 md:h-4 mt-2">
            <img src="https://www.svgrepo.com/show/469059/increase-circle.svg" />
          </button>
          <div class="mt-1 w-10 text-[20px] text-center md:mt-0.5 md:w-8 md:text-[17px] md:font-medium">
            {ItemInfo.qty}
          </div>
          <button
            onClick={handleDecrease}
            class="mr-6  w-6 h-6 md:mr-3 md:w-4 md:h-4 mt-2"
          >
            <img src="https://www.svgrepo.com/show/468532/decrease-circle.svg" />
          </button>
          <button
            onClick={handleDelete}
            class="mt-[8.5px] w-5 h-5 md:w-3 md:h-3"
          >
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png" />
          </button>
          <h6 class="ml-24 w-36 text-[20px] self-center text-right md:ml-20 md:w-24 md:text-[16px]">
            ${TotalPrice}
          </h6>
        </div>
      )}
      {!isOpenCart && (
        <div class="flex justify-end mt-1 md:justify-start">
          <button
            onClick={deleteWishList}
            class="mt-[6.5px] w-7 h-7 md:w-4 md:h-4"
          >
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png" />
          </button>
          <div>
            {!isProductInCart ? (
              <button
                onClick={WishListToCart}
                class="bg-blue-200 mt-1 ml-5 mr-2 p-1 rounded-lg text-[20px] md:ml-2 md:mr-0 md:mt-1 md:text-[12px] hover:bg-blue-300 active:bg-blue-400"
              >
                Add to Cart
              </button>
            ) : (
              <div class="bg-blue-300 mt-1 ml-5 mr-2 p-1 rounded-lg text-[20px] md:ml-2 md:mr-0 md:mt-1 md:text-[12px] ">
                Added in Cart
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCount;
