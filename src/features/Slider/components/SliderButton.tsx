import React from "react";

interface Props {
  number: number;
  onImageChange: () => void;
}
export default function SliderButton(props: Props) {
  return (
    <button
      className="flex items-center justify-center w-8 h-8 mr-1 text-gray-700 bg-white rounded-full ring-gray-400 ring-1 hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-900 focus:text-white"
      onClick={props.onImageChange}
    >
      {props.number}
    </button>
  );
}
