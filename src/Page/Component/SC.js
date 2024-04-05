import ProductCount from "./PCinCart.js";

const Cart = function ({ ItemChangeIncart, CartItems }) {
  return (
    <div>
      <h3>Shop Cart</h3>
      {CartItems.length > 1 &&
        CartItems.map((p) => {
          return (
            <ProductCount ItemQtyChangeIncart={ItemChangeIncart} ItemInfo={p} />
          );
        })}
      {CartItems.length === 1 && (
        <ProductCount
          ItemQtyChangeIncart={ItemChangeIncart}
          ItemInfo={CartItems[0]}
        />
      )}
    </div>
  );
};
export default Cart;
