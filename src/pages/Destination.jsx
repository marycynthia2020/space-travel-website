import React, { useContext } from "react";
import Navbar from "../components.jsx/Navbar";;
import Tabs from "../components.jsx/Tabs";
import { tabContext } from "../contexts/TabContext";

const Destination = () => {
  const {destination} = useContext(tabContext)
  return (
    <div className="min-h-screen bg-destinationMobile md:bg-destinationTablet xl:bg-destinationDesktop bg-no-repeat bg-center bg-cover xl:pb-4">
      <Navbar />
      <p className="md:text-xl xl:text-[28px] flex justify-center gap-3 tracking-[0.2em] mt-8 md:mt-4 xl:mt-4 md:justify-start md:w-[80%] mx-auto ">
        <span>01</span>PICK YOUR DESTINATION
      </p>
      <div className="mt-10 xl:mt-20 w-[80%] md:w-[68%] xl:w-4/5 mx-auto flex flex-col items-center xl:flex-row justify-between ">
        <div className="w-40 h-40 md:w-72 md:h-72 xl:w-[450px] xl:h-[450px] mb-10">
          <img src={destination.images.png} alt="" className="w-full h-full md:hidden" />
           <img src={destination.images.webp} alt="" className="hidden md:block w-full h-full" />
        </div>
        <div className="xl:w-[40%] xl:flex flex-col items-start ">
          <Tabs />
        <h1 className="text-[56px] md:text-[80px] xl:text-8xl font-bellefair text-center xl:text-left xl:mb-10 uppercase">
          {destination.name}
        </h1>
        <p className="text-[15px] md:text-[16px] text-center xl:text-left tracking-widest leading-loose pb-5 xl:pb-10 border-b ">
          {destination.description}
        </p>
        <div className="flex flex-col md:flex-row items-center md:justify-between xl:gap-8 xl:w-full">
            <p className="flex flex-col gap-1 pt-5 xl:pt-10 text-[28px] text-center uppercase"><span className="text-sm">AVG. DISTANCE</span>{destination.distance}</p>
            <p className="flex flex-col gap-1 pt-5 xl:pt-10 text-[28px] text-center uppercase"><span className="text-sm">EST. TRAVEL TIME</span>{destination.travel}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
