// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/homePage.jsx";
import Vitrine from "./components/vitrine.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
