import { RouteObject, createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import App from "../../App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "test",
        element: <h1>testtest</h1>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
