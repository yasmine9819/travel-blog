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
    <div className="m-10 md:m-1 sm:m-1 xs:m-1">
      <Slider />
      <Card
        body={
          "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
        title={"An Amazing Journey Through The Mountains"}
        withButton={true}
        flex={true}
        width="w-1/3 md:w-full xs:mt-10 xs:text-center"
      />
      <div className="items-center w-full mt-10 mb-10 xl:flex lg:flex justify-evenly xl:space-x-7">
        <img
          src={maldivesPic}
          className="h-96 w-200 md:w-full sm:w-full xs:w-full"
        />
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={false}
          flex={false}
          width="w-1/3 md:w-4/5 sm:w-4/5 xs:w-4/5 md:m-auto md:mt-5 sm:m-auto sm:mt-5 xs:m-auto xs:mt-5 xs:text-center"
        />
      </div>
      <div className="flex items-center justify-between w-full mt-20 mb-10 xs:flex-col-reverse space-x-7 xs:space-x-0 ">
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={true}
          flex={false}
          width="w-1/3 md:w-1/2 sm:w-1/2 xs:w-full xs:text-center"
        />
        <div className="justify-between lg:flex xl:flex md:flex-row ">
          <img
            src={korea}
            className="object-contain m-2 lg:mt-20 xl:mt-20 w-96 xs:w-full "
          />
          <img
            src={canada}
            className="object-cover m-2 shadow-2xl h-60 w-60 md:w-96 sm:w-96 xs:w-full"
          />
        </div>
      </div>
      <h1 className="m-auto text-4xl text-center font-title max-w-max ">
        {"Adventure & Action In Travel"}
      </h1>
      <div className="w-full mt-20 mb-10 xl:flex lg:flex md:flex sm:flex place-items-start justify-evenly space-x-7 xs:space-x-0">
        <img src={SierraLeone} className="object-cover h-96 w-96 xs:w-full" />
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={false}
          flex={false}
          width="w-1/2 xs:w-full xs:text-center "
        />
      </div>
      <div className="relative top-0 flex w-full mb-20 xs:flex-col-reverse place-items-start justify-evenly space-x-7 xs:space-x-0">
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida dapibus congue. Integer facilisis finibus lacus, molestie porta lectus placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={false}
          flex={false}
          width="w-1/3 md:w-1/2 sm:w-1/2 xs:w-full xs:text-center"
        />
        <img
          src={valencia}
          className="object-cover h-96 w-200 md:w-1/2 sm:w-1/2 xs:w-full "
        />
      </div>
      <VideoSlider />
      <div className="max-w-screen-lg xl:w-1/3 lg:w-1/3 md:w-3/4 xs:w-full sm:w-3/4 ml-28 xs:ml-2">
        <text className="italic font-title">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer sed fringilla mi, nec efficitur erat.Donec tempor egestas massa quis malesuada. Praesent sit amet porttitor tellus. Curabitur sit amet erat non massa ultricies viverra."
          }
        </text>
      </div>
      <div className="flex xl:m-20 lg:m-20 md:m-5 sm:m-5 xs:m-5 justify-evenly">
        <img
          src={france}
          className="object-cover xl:m-2 lg:m-2 h-96 xs:h-60 xl:w-96 md:w-1/2 sm:w-1/2 xs:w-1/2 lg:w-96 sm:mr-1 md:mr-1 xs:mr-1"
        />
        <img
          src={portugal}
          className="object-cover xs:h-60 lg:mt-40 xl:mt-40 h-96 xl:w-200 lg:w-200 md:w-1/2 sm:w-1/2 xs:w-1/2 sm:ml-1 md:ml-1 xs:ml-1"
        />
      </div>
      <div className="mb-20 lg:w-1/3 xl:w-1/3 md:w-4/5 sm:w-4/5 xs:w-full lg:-mt-48 xl:-mt-48 ml-28 xs:ml-0 ">
        <Card
          body={
            "Integer tempor massa magna, vitae auctor dui posuere sit amet. Curabitur sodales sed diam a varius. Praesent porta libero nec placerat aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          }
          title={"An Amazing Journey Through The Mountains"}
          withButton={true}
          flex={false}
          width="xl:w-full md:w-4/5 sm:w-full xs:w-full sm:m-auto md:m-auto xs:m-auto sm:mt-5 md:mt-5 xs:mt-5 xs:text-center "
        />
      </div>
    </div>
  );
}

export default LandingPage;
