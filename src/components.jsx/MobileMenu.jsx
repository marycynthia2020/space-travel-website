import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router';
import { tabContext } from '../contexts/TabContext';
import { navlinks } from '../data';

const MobileMenu = () => {
    const {setIsMobile} = useContext(tabContext)
   
     const toggleMobileMenu = () => setIsMobile(false)

  return (
    <div className="mobileMenu shadow-xl tracking-[0.15em]" >
      <IoClose className="text-4xl text-white mb-8 self-end" onClick={toggleMobileMenu}/>
      <div className=" flex flex-col gap-8">
        {navlinks.map(link => (
          <NavLink key={link.to} to={link.to} onClick={toggleMobileMenu}>
            {({ isActive }) => (
              <div className="flex  relative mobilenavlink ">
                <p className="flex gap-3">
                  <span>{link.id}</span>
                  {link.name}
                </p>
                <span
                  className={isActive ? "w-[3px] h-full bg-white absolute right-0" : ""}
                ></span>
                <span className="hidden w-[3px] h-full bg-white absolute right-0  opacity-50"></span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu