import React from "react";

interface Props {
  image: string;
  title: string;
}
export default function Slide({ image, title }: Props) {
  return (
    <div className="relative flex items-center justify-center flex-shrink-0 w-full text-4xl font-bold text-white bg-black max-h-96">
      <img src={image} className="absolute inset-0 object-cover w-full h-96 " />
      <h1 className="z-20 text-center">{title}</h1>
    </div>
  );
}
