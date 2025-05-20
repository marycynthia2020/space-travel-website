import React from "react";
import Navbar from "../components.jsx/Navbar";
import space from "/technology/image-launch-vehicle-portrait.jpg";

const Technology = () => {
  return (
    <div className="min-h-screen bg-technologyMobile md:bg-technologyTablet xl:bg-technologyDesktop bg-no-repeat bg-center bg-cover ">
      <Navbar />
      <p className="md:text-xl xl:text-[28px] flex justify-center gap-3 tracking-[0.2em] md:justify-start md:w-[90%] xl:w-[100%] xl:pl-28 mx-auto mb-16 xl:mb-32 mt-8 md:mt-4 xl:mt-4">
        <span>03</span>SPACE LAUNCH 101
      </p>

      <div className="w-[100%] xl:pl-28 xl:flex flex-row-reverse xl:gap-4 items-center">
        <div className="w-full h-[258px] xl:h-auto mb-8 ">
          <img src={space} alt="space" className="w-full h-full aspect-square" />
        </div>
        <div className="w-[90%] mx-auto flex flex-col xl:flex-row xl:gap-8   ">
          <div className="flex gap-4 mb-8 xl:flex-col xl:self-start ">
            <button className="w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 flex justify-center items-center border rounded-full">
              1
            </button>
            <button className="w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 flex justify-center items-center border rounded-full">
              2
            </button>
            <button className="w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20  flex justify-center items-center border rounded-full">
              3
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-2xl xl:text-[32px] mb-2 md:mb-4 xl:mb-8 xl:self-start">
              THE TERMINOLOGY...
            </p>
            <h2 className="text-2xl md:text-[40px] xl:text-[56px] mb-4 md:mb-6 xl:mb-10 xl:self-start">
              LAUCNH VEHICLE
            </h2>
            <p className="text-[15px] md:text-[16px] mb-20 xl:mb-32 text-center xl:self-start xl:text-left tracking-wider leading-loose md:w-3/4 xl:w-full">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
