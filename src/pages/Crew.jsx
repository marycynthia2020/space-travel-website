import React, { useContext, useState } from "react";
import Navbar from "../components.jsx/Navbar";
import CrewTabs from "../components.jsx/CrewTabs";
import { tabContext } from "../contexts/TabContext";

const Crew = () => {
  const {crew} = useContext(tabContext)
  return (
    <div className="min-h-screen bg-crewMobile md:bg-crewTablet xl:bg-crewDesktop bg-no-repeat bg-center bg-cover pb-4 ">
      <Navbar />
       <p className="md:text-xl xl:text-[28px] flex justify-center gap-3 tracking-[0.2em] md:justify-start md:w-[90%] xl:w-4/5 mx-auto mb-16 xl:mb-32 mt-8 md:mt-4 xl:mt-4">
            <span>02</span>MEET YOUR CREW
        </p>
      <div className="w-[90%]  md:w-4/5 mx-auto flex flex-col items-center xl:flex-row">
        <div className="flex flex-col items-center xl:w-1/2 ">
         
          <p className="text-lg md:text-2xl xl:text-[32px]  md:mb-6 xl:self-start">{crew.role}</p>
          <h2 className="text-2xl md:text-[40px] xl:text-[56px] mb-4 md:mb-6 xl:self-start">{crew.name}</h2>
          <p className="text-[15px] md:text-[16px] mb-20 xl:mb-32 text-center xl:self-start xl:text-left tracking-widest leading-loose md:w-3/4 xl:w-[90%]">
            {crew.bio}
          </p>
         <CrewTabs />
        </div>
        <div className="xl:w-1/2 ">
          <img src={crew.images.png} alt="" className="w-full md:hidden" />
           <img src={crew.images.webp} alt="" className=" hidden md:block w-full" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
