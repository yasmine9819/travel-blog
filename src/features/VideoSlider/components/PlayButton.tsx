import React from "react";
import classnames from "classnames";

interface Props {
  onVideoLinkChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  title: string;
  active: boolean;
}

export default function PlayButton({
  onVideoLinkChange,
  title,
  active,
}: Props) {
  return (
    <div className="flex items-center mb-10 space-x-6">
      <div
        className={classnames(
          "w-20 h-0.5   ",
          active ? "bg-gray-700" : "bg-gray-500",
          "md:hidden xs:hidden sm:hidden"
        )}
      ></div>
      <text>{title}</text>
      <button className="w-5 focus:outline-none" onClick={onVideoLinkChange}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={active ? "currentColor" : "gray"}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
