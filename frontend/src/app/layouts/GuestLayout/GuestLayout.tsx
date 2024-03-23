import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const GuestLayout = () => {
  return (
    <div className="w-full h-full pt-2 max-w-screen-2xl mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
