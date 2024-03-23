import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="w-[99%] h-14 mx-auto rounded-lg border border-white flex items-center px-6 text-white justify-between relative">
      <Link to="">
        <h2 className="font-bold text-xl">PDF CONVERTER</h2>
      </Link>
      <button
        className="bg-gray-100/20 px-2 p-1 rounded flex items-center gap-2 active:bg-gray-100/30 transition-all"
        onClick={handleClick}
      >
        Tools
        <img
          src="play.png"
          className={`w-2 text-white transition-all ${isOpen && "rotate-90"}`}
        />
      </button>
      <Menu isOpen={isOpen} />
    </div>
  );
};

export default NavBar;

{
  /* <a href="https://www.flaticon.com/free-icons/play" title="play icons">Play icons created by Roundicons - Flaticon</a> */
}
