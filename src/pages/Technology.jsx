import React, { useContext } from "react";
import Navbar from "../components.jsx/Navbar";
import { tabContext } from "../contexts/TabContext";

import TechTab from "../components.jsx/TechTab";

const Technology = () => {
  const {technology} = useContext(tabContext)

  return (
    <div className="min-h-screen bg-technologyMobile md:bg-technologyTablet xl:bg-technologyDesktop bg-no-repeat bg-center bg-cover ">
      <Navbar />
      <p className="md:text-xl xl:text-[28px] flex justify-center gap-3 tracking-[0.2em] md:justify-start md:w-[90%] xl:w-[100%] xl:pl-28 mx-auto mb-16 xl:mb-32 mt-8 md:mt-4 xl:mt-4">
        <span>03</span>SPACE LAUNCH 101
      </p>

      <div className="w-[100%] xl:pl-28 xl:flex flex-row-reverse xl:gap-4 items-center">
        <div className="w-full h-[258px] xl:h-[550px] mb-8 ">
          <img src={technology.images.portrait} alt="space" className="w-full h-full  aspect-square md:aspect-auto xl:aspect-square md:hidden xl:block" />
            <img src={technology.images.landscape} alt="space" className="hidden w-full h-full  aspect-square md:aspect-auto xl:aspect-square md:block xl:hidden" />
        </div>
        <div className="w-[90%] mx-auto flex flex-col xl:flex-row xl:gap-8   ">
          <TechTab />
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-2xl xl:text-[32px] mb-2 md:mb-4 xl:mb-8 xl:self-start font-bellefair">
              THE TERMINOLOGY...
            </p>
            <h2 className="text-2xl md:text-[40px] xl:text-[56px] mb-4 md:mb-6 xl:mb-10 xl:self-start font-bellefair">
              {technology.name}
            </h2>
            <p className=" font-barlow text-[15px] md:text-[16px] mb-20 xl:mb-32 text-center xl:self-start xl:text-left tracking-wider leading-loose md:w-3/4 xl:w-full">
              {technology.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
