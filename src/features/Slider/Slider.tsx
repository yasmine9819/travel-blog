import React, { useState } from "react";
import Slide from "./components/Slide";
import SliderButton from "./components/SliderButton";

interface Image {
  url: string;
  title: string;
}
export default function Slider() {
  const [image, setImage] = useState<Image>({
    url:
      "https://www.conicaltravel.com/wp-content/uploads/2020/03/4.-Myanmar-Conical-Travel-1911x695.jpg",
    title: "Traveling is easier than you think!",
  });

  const [imageNumber, setImageNumber] = useState(1);

  const onImageChange = (image: Image, imageNumber: number) => {
    setImage(image);
    setImageNumber(imageNumber);
  };

  const images: Image[] = [
    {
      url:
        "https://www.conicaltravel.com/wp-content/uploads/2020/03/4.-Myanmar-Conical-Travel-1911x695.jpg",
      title: "Traveling is easier than you think!",
    },
    {
      url:
        "https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg",
      title: "You can go anywhere, anytime !",
    },
    {
      url:
        "https://cdn.kimkim.com/files/a/content_articles/featured_photos/05921e815fc1ad1363605f143b4d31a7ad905031/big-0ab025b0c13d0dda2cacf61ff6d2e4e9.jpg",
      title: "Wanna Know more? Click here!",
    },
  ];

  return (
    <div className="flex flex-col items-center h-full m-8 md:m-1 sm:m-1 xs:m-1">
      <div className="flex w-full overflow-x-hidden bg-white rounded h-96">
        <Slide image={image.url} title={image.title} />
      </div>

      <div className="flex mt-4">
        {images.map((image: Image, key: number) => (
          <SliderButton
            number={key + 1}
            active={imageNumber == key + 1}
            onImageChange={() => onImageChange(image, key + 1)}
          />
        ))}
      </div>
    </div>
  );
}
