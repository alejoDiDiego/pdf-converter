import React from "react";

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`w-36 overflow-hidden border ${
        isOpen ? "h-44  border-white" : "h-0 border-transparent"
      } transition-all duration-300 rounded absolute right-5 top-16`}
    ></div>
  );
};

export default Menu;
