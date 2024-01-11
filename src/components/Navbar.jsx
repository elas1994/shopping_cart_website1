import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, List, ShoppingBagOpen, X } from "@phosphor-icons/react";
import "./components_css/Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="logo_div">AllStore</div>

      <div onClick={() => setMobileMenu(!mobileMenu)} className="mobile_menu">
        {mobileMenu ? <X size={32} /> : <List size={32} />}
      </div>

      <div className={mobileMenu ? "links active" : "links"}>
        <Link
          onClick={() => setMobileMenu(!mobileMenu)}
          className="link"
          to="/shopping_cart_website1/"
        >
          <ShoppingBagOpen size={32} />
          Shop
        </Link>
        <Link
          onClick={() => setMobileMenu(!mobileMenu)}
          className="link"
          to="/shopping_cart_website1/cart"
        >
          <ShoppingCart size={32} />
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
