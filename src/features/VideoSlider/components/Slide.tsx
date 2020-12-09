import React from "react";

interface Props {
  link: string;
}

export default function Slide({ link, ...props }: Props) {
  return (
    <>
      <div className="relative block w-2/3 m-10 mr-0 overflow-hidden h-96">
        <iframe
          className="absolute top-0 bottom-0 left-0 w-full h-full"
          src={link}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
}
