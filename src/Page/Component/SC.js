import ProductCount from "./PCinCart.js";

const CartBox = function ({ ItemChangeIncart, Items, CartAccount }) {
  return (
    <>
      {Items[CartAccount]["Cart"].length === 0 ? (
        <div class="text-center my-56 sm:my-44 text-xl sm:text-[15px] w-[400px] sm:w-[350px]">
          No Product in Cart !
        </div>
      ) : (
        <div class="overflow-scroll border-solid border-grey border h-[500px]">
          {Items[CartAccount]["Cart"].length > 1 &&
            Items[CartAccount]["Cart"].map((p) => {
              return (
                <ProductCount
                  ItemQtyChangeIncart={ItemChangeIncart}
                  ItemInfo={p}
                />
              );
            })}
          {Items[CartAccount]["Cart"].length === 1 && (
            <ProductCount
              ItemQtyChangeIncart={ItemChangeIncart}
              ItemInfo={Items[CartAccount]["Cart"][0]}
            />
          )}
        </div>
      )}
    </>
  );
};
export default CartBox;
