import React from "react";
import Slide from "./components/Slide";
import SliderButton from "./components/SliderButton";

export default function Slider() {
  return (
    <>
      <div className="flex flex-col items-center h-full m-8">
        <div className="flex w-full overflow-x-hidden bg-white rounded h-80">
          <Slide
            slideId="slide-1"
            image="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
            title="Traveling is easier than you think!"
          />
          <Slide
            slideId="slide-2"
            image="https://www.conicaltravel.com/wp-content/uploads/2020/03/4.-Myanmar-Conical-Travel-1911x695.jpg"
            title="You can go anywhere, anytime !"
          />
          <Slide
            slideId="slide-3"
            image="https://cdn.kimkim.com/files/a/content_articles/featured_photos/05921e815fc1ad1363605f143b4d31a7ad905031/big-0ab025b0c13d0dda2cacf61ff6d2e4e9.jpg"
            title="Wanna Know more? Click here!"
          />
        </div>

        <div className="flex mt-4">
          <SliderButton number="1" slideId="#slide-1" />
          <SliderButton number="2" slideId="#slide-2" />
          <SliderButton number="3" slideId="#slide-3" />
        </div>
      </div>
    </>
  );
}
