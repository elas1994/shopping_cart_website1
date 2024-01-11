import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./useContext/shop_context";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/shopping_cart_website1/" element={<Shop />} />

          <Route path="/shopping_cart_website1/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
