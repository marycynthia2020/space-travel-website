import React, { useContext } from "react";
import line from "/line.png";
import logo from "/shared/logo.svg";
import { NavLink } from "react-router";
import hamburger from "/shared/icon-hamburger.svg";
import { tabContext } from "../contexts/TabContext";

const Navbar = () => {
  const {setIsMobile} = useContext(tabContext)
const toggleMobileMenu = () => setIsMobile(true)

  const navlinks = [
    { name: "HOME", to: "/", id: "00" },
    {
      name: "DESTINATION",
      to: "/destination",
      id: "01",
    },
    {
      name: "CREW",
      to: "/crew",
      id: "02",
    },
    {
      name: "TECHNOLOGY",
      to: "/technology",
      id: "03",
    },
  ];
  return (
    <nav className="w-[90vw] md:w-full md:pl-10 xl:pl-14 mx-auto flex items-center justify-between text-white py-5 md:pt-0 xl:py-5 ">
      <div className="md:w-[10%]">
        <img src={logo} alt="logo" width={48} height={48} />
      </div>
      <div className="hidden xl:block w-[40%] -mr-20">
        <img src={line} alt="line" />
      </div>
      <div className="hidden md:flex items-center justify-between py-9 bg-[#181a25] md:pl-28 md:pr-10 xl:pr-14 md:w-[90%] xl:w-[50%] tracking-[0.15em]">
        {navlinks.map(link => (
          <NavLink key={link.to} to={link.to}>
            {({ isActive }) => (
              <div className="flex flex-col relative navlink ">
                <p className="flex gap-3">
                  <span>{link.id}</span>
                  {link.name}
                </p>
                <span
                  className={isActive ? "h-[3px] bg-white absolute inset-x-0 -bottom-8" : ""}
                ></span>
                <span className="hidden h-[3px] bg-white absolute inset-x-0 -bottom-8 opacity-50"></span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
      <img src={hamburger} alt="" className="md:hidden" onClick={toggleMobileMenu}/>
    </nav>
  );
};

export default Navbar;
