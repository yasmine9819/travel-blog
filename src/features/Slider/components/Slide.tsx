import React from "react";

interface Props {
  slideId: string;
  image: string;
  title: string;
}
export default function Slide({ image, title, slideId }: Props) {
  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0 w-full h-full text-4xl font-bold text-white bg-black"
      id={slideId}
    >
      <img
        src={image}
        className="absolute inset-0 object-cover w-full h-full "
      />
      <h1 className="z-20 text-center">{title}</h1>
    </div>
  );
}
