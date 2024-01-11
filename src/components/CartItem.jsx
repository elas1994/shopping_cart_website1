import React, { useContext } from "react";
import { ShopContext } from "../useContext/shop_context";

export const CartItem = (props) => {
  const { id, name, price, product_img } = props.data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cart_item">
      <img src={product_img} alt="img" />

      <div className="cart_description">
        <h4>{name}</h4>
        <p>${price}</p>

        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(event) =>
              updateCartItemCount(Number(event.target.value), id)
            }
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
