import ProductCount from "./PCinCart.js";

const Cart = function ({ ItemChangeIncart, CartItems, CartAccount }) {
  return (
    <div>
      <h3>Shop Cart</h3>
      {CartItems[CartAccount].length > 1 &&
        CartItems[CartAccount].map((p) => {
          return (
            <ProductCount ItemQtyChangeIncart={ItemChangeIncart} ItemInfo={p} />
          );
        })}
      {CartItems[CartAccount].length === 1 && (
        <ProductCount
          ItemQtyChangeIncart={ItemChangeIncart}
          ItemInfo={CartItems[0]}
        />
      )}
    </div>
  );
};
export default Cart;
