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
          ? "md:flex xl:flex lg:flex sm:flex xs:flex-row items-center justify-evenly w-full xs:m-0  max-w-screen-xl m-10 space-x-7"
          : " xl:m-auto m-2 ",
        width
      )}
    >
      <h1
        className={classnames(
          " mb-10 text-4xl  font-title",
          flex ? " md:w-1/3 xl:w-1/3 lg:w-1/3 sm:w-1/3 " : ""
        )}
      >
        {title}
      </h1>
      <div className={flex ? "lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 " : ""}>
        <main className="font-semibold text-gray-500 text-l">{body}</main>

        {withButton && (
          <button className="flex items-center justify-between w-1/2 mt-10 text-sm font-semibold uppercase xl:w-1/4 focus:outline-none">
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
