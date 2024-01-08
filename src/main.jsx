import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const router123 = createBrowserRouter([
  {
    path: "/shopping_cart_website1/",
    element: <App />,
    children: [
      {
        path: "/shopping_cart_website1/home",
        element: <Home />,
      },
      {
        path: "/shopping_cart_website1/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router123} />
  </React.StrictMode>
);
