import React, { useContext } from "react";
import { PRODUCTS } from "../../data/productsData";
import { ShopContext } from "../../useContext/shop_context";
import { CartItem } from "../../components/CartItem";
CartItem;

import { useNavigate } from "react-router-dom";

import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="title">
        <h1>Cart items</h1>
      </div>

      <div className="cart_items">
        {PRODUCTS.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem key={item.id} data={item} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <>
          <p>Subtotal: ${totalAmount}</p>

          <div className="checkout">
            <button onClick={() => navigate("/shopping_cart_website1/")}>
              Continue Shopping
            </button>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <h3>Your Cart is Empty</h3>
      )}
    </div>
  );
};

export default Cart;
