import React from "react";
import classnames from "classnames";

interface Props {
  open: boolean;
}
export default function Menu({ open }: Props) {
  return (
    <div
      className={classnames(
        !open ? "hidden" : "",
        "absolute z-30 w-56 mt-10 origin-top-right bg-white rounded-md shadow-lg right-5 ring-1 ring-black ring-opacity-5"
      )}
    >
      <div>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Best Places
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Destinations
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Travel Tips
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Travel Resources
        </a>
      </div>
    </div>
  );
}
