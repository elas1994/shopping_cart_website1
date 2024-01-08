import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <a href="/shopping_cart_website1/home">Home</a>
        <br />
        <a href="/shopping_cart_website1/about">About</a>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
