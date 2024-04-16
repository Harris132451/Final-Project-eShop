import ProductCount from "./productsCount.js";

const Box = function ({
  ItemChangeIncart,
  Items,
  ItemChangeInwishlist,
  WishItems,
  CartAccount,
  OpenCart,
}) {
  return (
    <>
      {OpenCart && (
        <div>
          {Items[CartAccount].length === 0 ? (
            <div class="text-center my-56 sm:my-44 text-xl sm:text-[15px] w-[400px] sm:w-[350px]">
              No Product in Cart !
            </div>
          ) : (
            <div class="overflow-scroll bg-white rounded border-solid border-grey shadow-inner border-[0.5px] mt-2 h-[500px] sm:h-[380px]">
              {Items[CartAccount].length > 1 &&
                Items[CartAccount].map((p) => {
                  return (
                    <ProductCount
                      ItemQtyChangeIncart={ItemChangeIncart}
                      ItemInfo={p}
                      isOpenCart={OpenCart}
                    />
                  );
                })}
              {Items[CartAccount].length === 1 && (
                <ProductCount
                  ItemQtyChangeIncart={ItemChangeIncart}
                  ItemInfo={Items[CartAccount][0]}
                  isOpenCart={OpenCart}
                />
              )}
            </div>
          )}
        </div>
      )}
      {!OpenCart && (
        <div>
          {WishItems[CartAccount].length === 0 ? (
            <div class="text-center my-56 sm:my-44 text-xl sm:text-[15px] w-[400px] sm:w-[350px]">
              No Product in Wish List !
            </div>
          ) : (
            <div class="overflow-scroll bg-white rounded border-solid border-grey shadow-inner border-[0.5px] mt-2 h-[520px] sm:h-[420px]">
              {WishItems[CartAccount].length > 1 &&
                WishItems[CartAccount].map((p) => {
                  return (
                    <ProductCount
                      ItemQtyChangeIncart={ItemChangeIncart}
                      ItemChangeInwishlist={ItemChangeInwishlist}
                      ItemInfo={p}
                      isOpenCart={OpenCart}
                    />
                  );
                })}
              {WishItems[CartAccount].length === 1 && (
                <ProductCount
                  ItemQtyChangeIncart={ItemChangeIncart}
                  ItemChangeInwishlist={ItemChangeInwishlist}
                  ItemInfo={WishItems[CartAccount][0]}
                  isOpenCart={OpenCart}
                />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Box;
