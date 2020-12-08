import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full p-5 pl-20 pr-20 ">
      <div>
        <a href="#" className="text-2xl font-medium text-gray-500 font-logo">
          TravelBlog
        </a>
      </div>
      <ul className="flex flex-row">
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
