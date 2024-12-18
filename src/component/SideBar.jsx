import React, { useState } from "react";
import Moon from "../assets/svg/Moon.svg";
import SidebarLogo from "../assets/svg/SidebarLogo.svg";
import SideBarMen from "../assets/svg/SidebarMen.svg";
import SideBarCircle from "../assets/svg/SidebarCircle.svg";

const SideBar = () => {
  const [isLight, setIsLight] = useState(true);

  const handleLightClick = () => {
    setIsLight(!isLight);
  };

  return (
    <div
      className={`flex flex-col h-screen w-[103px] rounded-r-3xl items-center justify-between ${
        isLight ? "bg-[#373B53]" : "bg-[#1E2139]"
      }`}>
      <div>
        <img src={SidebarLogo} alt='Sidebar Logo' />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div>
          <img
            src={isLight ? Moon : SideBarCircle}
            alt='Moon or Circle'
            className={`mb-[32.1px] cursor-pointer ${
              !isLight ? "w-[20px] h-[20px]" : ""
            }`}
            onClick={handleLightClick}
          />
        </div>
        <div className='w-[103px] h-[2.5px] bg-[#494E6E] mb-[32.1px]' />
        <div>
          <img src={SideBarMen} alt='Sidebar Menu' className='mb-[24px]' />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
