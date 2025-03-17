import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
// src/main.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import UserManagement from "./pages/UserManagement";
import NotFound from "./pages/NotFound.jsx";

// Simulated login status (later from backend or context)
let isLoggedIn = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: isLoggedIn ? (
          <Navigate to="/users" />
        ) : (
          <Navigate to="/login" />
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/users",
        element: <UserManagement />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
