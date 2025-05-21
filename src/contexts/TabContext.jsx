import React, { createContext, useState } from "react";
import { destinations, tech, crewMembers } from "../data";

export const tabContext = createContext();

const TabContext = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("Moon");
  const [destination, setDestination] = useState(destinations[0]);
  const [technology, setTechnology] = useState(tech[0])
  const [crew, setCrew] = useState(crewMembers[0]);
  const [isMobile, setIsMobile] = useState(false)

  const value = { currentTab, setCurrentTab, destination, setDestination, crew, setCrew, technology, setTechnology, isMobile, setIsMobile };
  return <tabContext.Provider value={value}>{children}</tabContext.Provider>;
};

export default TabContext;
