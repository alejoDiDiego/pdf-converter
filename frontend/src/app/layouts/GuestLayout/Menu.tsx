import React from "react";

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  const links = [
    { name: "IMAGE to PDF", url: "/image-to-pdf" },
    { name: "WORD to PDF", url: "/word-to-pdf" },
    { name: "EXCEL to PDF", url: "/excel-to-pdf" },
    { name: "PPT to PDF", url: "/ppt-to-pdf" },
    { name: "PDF to IMAGE", url: "/pdf-to-image" },
    { name: "PDF to WORD", url: "/pdf-to-word" },
    { name: "PDF to EXCEL", url: "/pdf-to-excel" },
    { name: "PDF to PPT", url: "/pdf-to-ppt" },
  ];
  return (
    <div
      className={`w-36 overflow-hidden border ${
        isOpen
          ? "opacity-100 visible border-white scale-100"
          : "opacity-0 invisible scale-50"
      } transition-all duration-300 rounded absolute right-5 top-16 flex flex-col gap-2`}
    >
      {links.map((link) => (
        <a
          href={link.url}
          className="block px-2 py-1 text-white hover:bg-white hover:text-black text-center"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Menu;
