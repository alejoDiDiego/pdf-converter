import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const GuestLayout = () => {
  return (
    <div className="w-full h-full pt-2 max-w-screen-2xl mx-auto">
      <NavBar />
      <div className="mx-10 mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
