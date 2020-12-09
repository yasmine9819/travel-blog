import React from "react";

interface Props {
  slideId: string;
  number: string;
}
export default function SliderButton(props: Props) {
  return (
    <a
      className="flex items-center justify-center w-8 h-8 mr-1 text-gray-700 bg-white rounded-full ring-gray-400 ring-1 hover:bg-gray-900 hover:text-white"
      href={props.slideId}
    >
      {props.number}
    </a>
  );
}
