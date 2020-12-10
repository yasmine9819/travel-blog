import React, { useState } from "react";
import Slide from "./components/Slide";
import PlayButton from "./components/PlayButton";

export default function VideoSlider() {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
  );

  const [videoNumber, setVideoNumber] = useState(1);
  const onVideoLinkChange = (videoLink: string, videoNumber: number) => {
    setVideoLink(videoLink);
    setVideoNumber(videoNumber);
  };
  const videoLinks = [
    "https://www.youtube-nocookie.com/embed/FMrtSHAAPhM",
    "https://www.youtube.com/embed/QcGmpWx4DXQ",
    "https://www.youtube.com/embed/KwQvyYzcOJU",
  ];
  return (
    <div className="items-center xl:flex lg:flex">
      <Slide link={videoLink} />
      <div className="md:justify-center xs:justify-center sm:justify-center md:flex sm:flex xs:flex">
        {videoLinks.map((link: string, key: number) => (
          <PlayButton
            title={`Video ${key + 1}`}
            active={videoNumber == key + 1}
            onVideoLinkChange={() => onVideoLinkChange(link, key + 1)}
          />
        ))}
      </div>
    </div>
  );
}
