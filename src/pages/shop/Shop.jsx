import React, { useEffect } from "react";
import { PRODUCTS } from "../../data/productsData";
import Product from "../../components/Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop_title">
        <h1>AllStore</h1>
      </div>

      <div className="products_array">
        {PRODUCTS.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
