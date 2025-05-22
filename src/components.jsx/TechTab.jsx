import React, { useContext } from "react";
import { tabContext } from "../contexts/TabContext";
import { tech } from "../data";

const TechTab = () => {
  const { technology, setTechnology } = useContext(tabContext);

  const handleTechTab = id => {
    tech.map(technology => {
      if (technology.id === id) {
        setTechnology(technology);
      }
    });
  };

  return (
    
    <div className="flex gap-4 mb-8 xl:flex-col self-center xl:self-start ">
      <button
        className={
          technology.id === 1
            ? "w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 flex justify-center items-center border rounded-full bg-white text-black hover:bg-white hover:text-black"
            : "w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 flex justify-center items-center border rounded-full hover:bg-white  hover:text-black"
        }
        onClick={() => handleTechTab(1)}
      >
        1
      </button>
      <button
        className={
          technology.id === 2
            ? "w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 flex justify-center items-center border rounded-full bg-white text-black hover:bg-white  hover:text-black"
            : "w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 flex justify-center items-center border rounded-full hover:bg-white  hover:text-black"
        }
        onClick={() => handleTechTab(2)}
      >
        2
      </button>
      <button
        className={
          technology.id === 3
            ? "w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20  flex justify-center items-center border rounded-full bg-white text-black hover:bg-white  hover:text-black"
            : "w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20  flex justify-center items-center border rounded-full hover:bg-white  hover:text-black"
        }
        onClick={() => handleTechTab(3)}
      >
        3
      </button>
    </div>
  );
};

export default TechTab;
