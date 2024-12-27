import React from "react";
import Moon from "../assets/svg/Moon.svg";
import SidebarLogo from "../assets/svg/SidebarLogo.svg";
import SideBarMen from "../assets/svg/SidebarMen.svg";
import SideBarCircle from "../assets/svg/SidebarCircle.svg";

const SideBar = ({ isLight, setIsLight }) => {
  const handleLightClick = () => {
    setIsLight(!isLight);
  };

  return (
    <div
      className={`flex xl:flex-col xl:h-screen xl:w-[103px] xl:rounded-r-3xl items-center justify-between h-[80px] ${
        isLight ? "bg-[#373B53]" : "bg-[#1E2139]"
      }`}
    >
      <div>
        <img
          src={SidebarLogo}
          className="xl:w-[103px] xl:h-[103px] w-[80px] h-[80px]"
          alt="Sidebar Logo"
        />
      </div>
      <div className="flex xl:flex-col xl:gap-0 gap-10  justify-center items-center mr-10 xl:mr-0 ">
        <div className="">
          <img
            src={isLight ? Moon : SideBarCircle}
            alt="Moon or Circle"
            className={`xl:mb-[32.1px] cursor-pointer ${
              !isLight ? "w-[20px] h-[20px]" : ""
            }`}
            onClick={handleLightClick}
          />
        </div>
        <div className="xl:w-[103px] w-[2.5px] h-[80px]  xl:h-[2.5px] bg-[#494E6E] xl:mb-[32.1px]" />
        <div>
          <img src={SideBarMen} alt="Sidebar Menu" className="xl:mb-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
