// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/homePage.jsx";
import ErrorPage from "./components/errorPage.jsx";
// import Vitrine from "./components/vitrine.jsx";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement :< ErrorPage />
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
