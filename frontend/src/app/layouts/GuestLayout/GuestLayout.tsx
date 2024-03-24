import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const GuestLayout = () => {
  return (
    <div className="w-full h-full pt-2">
      <NavBar />
      <div className="mt-10 max-w-screen-2xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
