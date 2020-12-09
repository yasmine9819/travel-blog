import React from "react";
import Slider from "../../features/Slider";
import VideoSlider from "../../features/VideoSlider";
import Card from "../../features/Card";
import maldivesPic from "../../resources/images/maldivesPic.jpg";
import canada from "../../resources/images/Aberta-Canada.jpg";
import korea from "../../resources/images/korea.jpeg";
import SierraLeone from "../../resources/images/SierraLeone.jpg";
import valencia from "../../resources/images/valencia.jpg";
import france from "../../resources/images/tower.jpg";
import portugal from "../../resources/images/portugal.jpg";

function LandingPage() {
  return (
    <>
      <Slider />
      <Card
        body={
          "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
        title={"An Amazing Journey Through The Mountains"}
        withButton={true}
        flex={true}
        width="w-1/3"
      />
      <div className="flex items-center w-full mt-10 mb-10 justify-evenly space-x-7">
        <img src={maldivesPic} className="h-96 w-200" />
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={false}
          flex={false}
          width="w-1/3"
        />
      </div>
      <div className="flex items-center justify-between w-full mt-20 mb-10 space-x-10 ">
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={true}
          flex={false}
          width="w-1/3"
        />
        <div className="flex justify-between w-1/2">
          <img src={korea} className="object-contain mt-20 h-96 w-96" />
          <img src={canada} className="object-cover shadow-2xl h-60 w-60" />
        </div>
      </div>
      <h1 className="m-auto text-4xl font-title max-w-max ">
        {"Adventure & Action In Travel"}
      </h1>
      <div className="flex w-full mt-20 mb-10 place-items-start justify-evenly space-x-7">
        <img src={SierraLeone} className="object-cover h-96 w-96" />
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={false}
          flex={false}
          width="w-1/2"
        />
      </div>
      <div className="relative top-0 flex w-full mb-20 place-items-start justify-evenly space-x-7">
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={false}
          flex={false}
          width="w-1/2"
        />
        <img src={valencia} className="object-cover h-96 w-200 " />
      </div>
      <VideoSlider />
      <div className="w-1/3 max-w-screen-lg ml-20">
        <text className="italic font-title">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer sed fringilla mi, nec efficitur erat.Donec tempor egestas massa quis malesuada. Praesent sit amet porttitor tellus. Curabitur sit amet erat non massa ultricies viverra."
          }
        </text>
      </div>
      <div className="flex m-20 justify-evenly">
        <img src={france} className="object-cover h-96 w-96" />
        <img src={portugal} className="object-cover mt-40 h-96 w-200 " />
      </div>
      <div className="w-1/3 mb-20 -mt-48 ml-28 ">
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={true}
          flex={false}
          width="w-full"
        />
      </div>
    </>
  );
}

export default LandingPage;
