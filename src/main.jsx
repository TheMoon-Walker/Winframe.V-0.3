// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/homePage.jsx";
import ErrorPage from "./components/errorPage.jsx";
// import Vitrine from "./components/vitrine.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root.jsx";
import Vitrine from "./components/vitrine.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
   
    children :[
      {
        path : '/homepage',
        element : <HomePage/>

      },
      {
        path: '/vitrine',
        element : <Vitrine/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
