import React from "react";

interface Props {
  link: string;
}

export default function Slide({ link, ...props }: Props) {
  return (
    <div className="relative block m-10 overflow-hidden lg:mr-0 xl:mr-0 lg:w-2/3 xl:w-2/3 xl:ml-20 lg:ml-20 md:ml-1 md:w-full h-96 xs:w-full xs:m-0 xs:mb-10">
      <iframe
        className="absolute top-0 bottom-0 left-0 w-full h-full"
        src={link}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
