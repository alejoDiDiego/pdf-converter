import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="w-full min-h-screen bg-gray-900">
    <RouterProvider router={router} />
  </div>
);
