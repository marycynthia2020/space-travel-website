import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-y-8 xl:flex-row xl:items-center mt-8 md:mt-14 xl:mt-64">
      <div className="flex flex-col items-center xl:items-start md:w-[512px] mx-auto">
        <p className="md:text-3xl tracking-widest">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="text-[80px] md:text-[144px] font-bellefair ">SPACE</h1>
        <p className="text-[15px] md:text-[16px] mb-32 md:mb-6 text-center xl:text-left leading-loose font-barlow ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="mx-auto relative w-[264px] h-[264px]  md:w-[392px] md:h-[392px] flex border">
        <div className="w-full h-full bg-white rounded-full  hidden opacity-50"></div>
        <button className="w-[144px] h-[144px]  md:w-[272px] md:h-[272px] rounded-full box bg-white text-black text-lg md:text-3xl tracking-wider place-self-center absolute left-14" onClick={()=> navigate("/destination")}>EXPLORE</button>
      </div>
    </div>
  );
};

export default Hero;
