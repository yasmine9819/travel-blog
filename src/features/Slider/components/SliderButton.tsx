import React from "react";
import classnames from "classnames";

interface Props {
  number: number;
  onImageChange: () => void;
  active: boolean;
}
export default function SliderButton(props: Props) {
  return (
    <button
      className={classnames(
        props.active ? " bg-gray-900 text-white" : "text-gray-700 bg-white",
        "flex items-center justify-center w-8 h-8 mr-1  rounded-full ring-gray-400 ring-1 hover:bg-gray-900 hover:text-white focus:outline-none "
      )}
      onClick={props.onImageChange}
    >
      {props.number}
    </button>
  );
}
