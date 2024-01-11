import React, { useContext } from "react";
import { ShopContext } from "../useContext/shop_context";

const Product = (props) => {
  const { id, name, price, product_img } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product" key={id}>
      <img src={product_img} alt="img" />

      <div className="product_description">
        <h3>{name}</h3>
        <p>${price}.00</p>
      </div>

      <button onClick={() => addToCart(id)} className="cart_btn">
        Add To Cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
      </button>
    </div>
  );
};

export default Product;
