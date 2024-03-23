import { RouteObject, createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import App from "../../App";
import ImageToPdf from "../views/ImageToPdf";

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
        path: "image-to-pdf",
        element: <ImageToPdf />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
