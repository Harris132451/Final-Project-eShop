import ProductCount from "./PCinCart.js";

const Cart = function ({ ItemChangeIncart, CartItems, CartAccount }) {
  return (
    <>
      {CartItems[CartAccount].length === 0 ? (
        <div class="text-center my-44 pr-14 sm:pr-0 text-xl w-72">
          No Product in Cart !
        </div>
      ) : (
        <div class="overflow-scroll border-solid border-grey border h-[500px]">
          {CartItems[CartAccount].length > 1 &&
            CartItems[CartAccount].map((p) => {
              return (
                <ProductCount
                  ItemQtyChangeIncart={ItemChangeIncart}
                  ItemInfo={p}
                />
              );
            })}
          {CartItems[CartAccount].length === 1 && (
            <ProductCount
              ItemQtyChangeIncart={ItemChangeIncart}
              ItemInfo={CartItems[CartAccount][0]}
            />
          )}
        </div>
      )}
    </>
  );
};
export default Cart;
