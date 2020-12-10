import React, { useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuChange = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  return (
    <nav className="flex justify-between w-full p-5 pl-20 pr-20 m-auto max-w-7xl">
      <div>
        <a href="#" className="text-2xl font-medium text-gray-500 font-logo">
          TravelBlog
        </a>
      </div>

      <button
        className="w-10 focus:outline-none lg:hidden xl:hidden "
        onClick={handleMenuChange}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Menu open={isMenuOpen} />
      <ul className="flex flex-row md:hidden sm:hidden xs:hidden">
        <li className="pr-10 text-gray-500 uppercase ">
          <a
            href="#"
            className="font-semibold border-b-2 border-white hover:text-gray-700 hover:border-gray-300 "
          >
            Home
          </a>
        </li>
        <li className="pr-10 text-gray-500 uppercase ">
          <a
            href="#"
            className="font-semibold border-b-2 border-white hover:text-gray-700 hover:border-gray-300 "
          >
            Best Places
          </a>
        </li>
        <li className="pr-10 text-gray-500 uppercase ">
          <a
            href="#"
            className="font-semibold border-b-2 border-white hover:text-gray-700 hover:border-gray-300 "
          >
            Destinations
          </a>
        </li>
        <li className="pr-10 text-gray-500 uppercase ">
          <a
            href="#"
            className="font-semibold border-b-2 border-white hover:text-gray-700 hover:border-gray-300 "
          >
            Travel Tips
          </a>
        </li>
        <li className="pr-10 text-gray-500 uppercase ">
          <a
            href="#"
            className="font-semibold border-b-2 border-white hover:text-gray-700 hover:border-gray-300 "
          >
            Travel Resources
          </a>
        </li>
      </ul>
    </nav>
  );
}
