import React, { createContext, useState } from "react";
import { destinations } from "../data";
import { crewMembers } from "../data";

export const tabContext = createContext();

const TabContext = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("Moon");
  const [destination, setDestination] = useState(destinations[0]);
  const [crew, setCrew] = useState(crewMembers[1]);

  const value = { currentTab, setCurrentTab, destination, setDestination, crew, setCrew };
  return <tabContext.Provider value={value}>{children}</tabContext.Provider>;
};

export default TabContext;
