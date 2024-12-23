import React from "react";
import { FaEvernote } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex justify-center mt-10">
      <nav className="flex justify-between max-w-[45rem] border w-[45rem] px-5 py-2 rounded-lg  shadow-md items-center">
        <h3 className="text-xl font-bold ">
          <FaEvernote size={30} />
        </h3>
        <h3 className="text-xl font-bold">No Note</h3>
        <span>
          <MdOutlineLightMode size={25} />
        </span>
      </nav>
    </div>
  );
}
