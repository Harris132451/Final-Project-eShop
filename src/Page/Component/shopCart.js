import ProductCount from "./productsCountInCart.js";

const CartBox = function ({ ItemChangeIncart, Items, CartAccount }) {
  return (
    <>
      {Items[CartAccount].length === 0 ? (
        <div class="text-center my-56 sm:my-44 text-xl sm:text-[15px] w-[400px] sm:w-[350px]">
          No Product in Cart !
        </div>
      ) : (
        <div class="overflow-scroll bg-white rounded border-solid border-grey shadow-inner border-[0.5px] mt-2 h-[500px]">
          {Items[CartAccount].length > 1 &&
            Items[CartAccount].map((p) => {
              return (
                <ProductCount
                  ItemQtyChangeIncart={ItemChangeIncart}
                  ItemInfo={p}
                />
              );
            })}
          {Items[CartAccount].length === 1 && (
            <ProductCount
              ItemQtyChangeIncart={ItemChangeIncart}
              ItemInfo={Items[CartAccount][0]}
            />
          )}
        </div>
      )}
    </>
  );
};
export default CartBox;
