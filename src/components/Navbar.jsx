import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div className="">
        <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1  className="text-2xl font-bold">Cravora Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          className="p-3 text-sm border outline-none bg-white border-gray-300 rounded-lg w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
