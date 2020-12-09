import React from "react";
import classnames from "classnames";
interface Props {
  title?: string;
  body: string;
  flex: boolean;
  withButton: boolean;
  width?: string;
}

export default function Card({ title, body, flex, withButton, width }: Props) {
  return (
    <div
      className={classnames(
        flex
          ? "flex items-center justify-evenly w-full max-w-screen-xl m-10 space-x-7"
          : " m-auto",
        width
      )}
    >
      <h1
        className={classnames(
          " mb-10 text-4xl font-title",
          flex ? "w-1/3" : ""
        )}
      >
        {title}
      </h1>
      <div className={flex ? "w-1/3" : ""}>
        <main className="font-semibold text-gray-500 text-l">{body}</main>

        {withButton && (
          <button className="flex items-center justify-between w-1/4 mt-10 text-sm font-semibold uppercase focus:outline-none">
            {"Read more"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
