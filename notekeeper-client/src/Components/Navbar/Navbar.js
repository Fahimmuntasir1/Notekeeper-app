import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center py-3 justify-center shadow-md sticky top-0 bg-white">
      <img
        className="w-12"
        src="https://i.ibb.co/8cjSpdm/Notekeeper-icon.png"
        alt="logo"
      />
      <h2 className="text-3xl font-bold text-sky-500 ">Notekeeper</h2>
    </header>
  );
};

export default Navbar;
