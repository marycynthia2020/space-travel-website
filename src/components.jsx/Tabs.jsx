import React, { useContext, useState } from "react";
import { destinations } from "../data";
import { tabContext } from "../contexts/TabContext";

const Tabs = () => {
  const { currentTab, setCurrentTab, setDestination } = useContext(tabContext);

  const changeTab = tab => {
    destinations.map(destination => {
      if (destination.name === tab) {
        setCurrentTab(destination.name);
        setDestination(destination);
      }
    });
  };
  const tabs = [
    {
      name: "MOON",
      tab: "Moon",
    },
    {
      name: "MARS",
      tab: "Mars",
    },
    {
      name: "EUROPA",
      tab: "Europa",
    },
    {
      name: "TITAN",
      tab: "Titan",
    },
  ];
  return (
    <div className="w-4/5 md:w-fit mx-auto flex items-center justify-between md:gap-8  mb-5 xl:mb-12 xl:mx-0 ">
      {tabs.map(tab => (
        <div key={tab.name} className="relative tab">
          <button onClick={() => changeTab(tab.tab)}>{tab.name}</button>
          <span
            className={
              currentTab === tab.tab
                ? "h-[3px] bg-white absolute inset-x-0 -bottom-2"
                : ""
            }
          ></span>
          <span className="hidden  h-[3px] bg-white absolute inset-x-0 -bottom-2 opacity-50"></span>
        </div>
      ))}


















      
      {/* <div className="relative">
        <button onClick={() => changeTab("Moon")}>MOON</button>
        <span className={currentTab === "Moon"? "h-[3px] bg-white absolute inset-x-0 -bottom-2" : ""}></span>
         <span className="hidden h-[3px] bg-white absolute inset-x-0 -bottom-2"></span>
      </div>
     <div className="relative">
       <button onClick={() => changeTab("Mars")}>MARS</button>
        <span className={currentTab === "Mars"? "h-[3px] bg-white absolute inset-x-0 -bottom-2" : ""}></span>
     </div>
     <div className="relative">
       <button onClick={() => changeTab("Europa")}>EUROPA</button>
       <span className={currentTab === "Europa"? "h-[3px] bg-white absolute inset-x-0 -bottom-2" : ""}></span>
     </div>
     <div className="relative">
      <button onClick={() => changeTab("Titan")}>TITAN</button>
      <span className={currentTab === "Titan"? "h-[3px] bg-white absolute inset-x-0 -bottom-2" : ""}></span>
     </div> */}
    </div>
  );
};

export default Tabs;
