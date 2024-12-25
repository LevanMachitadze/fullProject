import React, { useState } from "react";
import Calendar from "../assets/svg/calendar.svg";
import arrow from "../assets/svg/arrow.svg";
import trash from "../assets/svg/trash.svg";

const SideEdit = () => {
  // State for dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(true); // Default is light mode

  // Toggle function for dark/light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`w-[719px] h-screen pl-[159px] pt-[59px] pr-[56px] pb-[32px] overflow-y-auto ${
        isDarkMode ? "bg-[#141625]" : "bg-white"
      }`}>
      <div className='flex flex-col'>
        <div className='mb-[46px]'>
          <h1
            className={`text-[24px] font-bold ${
              isDarkMode ? "text-white" : "text-[#0C0E16]"
            }`}>
            Edit #XM9141
          </h1>
        </div>
        <div>
          <p
            className={`font-bold mb-[24px] ${
              isDarkMode ? "text-[#7C5DFA]" : "text-[#7C5DFA]"
            }`}>
            Bill From
          </p>
          <p
            className={`font-medium mb-[9px] ${
              isDarkMode ? "text-[#7E88C3]" : "text-[#7E88C3]"
            }`}>
            Street Address
          </p>
          <input
            type='text'
            placeholder='19 Union Terrace'
            className={`w-[504px] h-[48px] border ${
              isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
            } bg-${
              isDarkMode ? "#252945" : "white"
            } text-white rounded mb-[25px]`}
            style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
          />
          <div className='flex flex-row mb-[49px]'>
            <div>
              <p
                className={`text-[#7E88C3] font-medium mb-[9px] ${
                  isDarkMode ? "text-[#7E88C3]" : "text-[#7E88C3]"
                }`}>
                City
              </p>
              <input
                type='text'
                placeholder='London'
                className={`w-[152px] h-[48px] border ${
                  isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                } bg-${
                  isDarkMode ? "#252945" : "white"
                } text-white rounded mb-[25px]`}
                style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
              />
            </div>
            <div>
              <p
                className={`text-[#7E88C3] ml-[24px] font-medium mb-[9px] ${
                  isDarkMode ? "text-[#7E88C3]" : "text-[#7E88C3]"
                }`}>
                Post Code
              </p>
              <input
                type='text'
                placeholder='E1 3EZ'
                className={`w-[152px] h-[48px] ml-[24px] border ${
                  isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                } bg-${
                  isDarkMode ? "#252945" : "white"
                } text-white rounded mb-[25px]`}
                style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
              />
            </div>
            <div>
              <p
                className={`text-[#7E88C3] ml-[24px] font-medium mb-[9px] ${
                  isDarkMode ? "text-[#7E88C3]" : "text-[#7E88C3]"
                }`}>
                Country
              </p>
              <input
                type='text'
                placeholder='United Kingdom'
                className={`w-[152px] ml-[24px] h-[48px] border ${
                  isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                } bg-${
                  isDarkMode ? "#252945" : "white"
                } text-white rounded mb-[25px]`}
                style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
              />
            </div>
          </div>
          <p className='text-[#7C5DFA] font-bold mb-[24px]'>Bill To</p>
          <p className='text-[#7E88C3] font-medium mb-[9px]'>Clients Name</p>
          <input
            type='text'
            placeholder='Alex Grim'
            className={`w-[504px] h-[48px] border ${
              isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
            } bg-${
              isDarkMode ? "#252945" : "white"
            } text-white rounded mb-[25px]`}
            style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
          />
          <p className='text-[#7E88C3] font-medium mb-[9px]'>Clients Email</p>
          <input
            type='text'
            placeholder='Alexgrim@gmail.com'
            className={`w-[504px] h-[48px] border ${
              isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
            } bg-${
              isDarkMode ? "#252945" : "white"
            } text-white rounded mb-[25px]`}
            style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
          />
          <p className='text-[#7E88C3] font-medium mb-[9px]'>Street Address</p>
          <input
            type='text'
            placeholder='84 Church Way'
            className={`w-[504px] h-[48px] border ${
              isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
            } bg-${
              isDarkMode ? "#252945" : "white"
            } text-white rounded mb-[25px]`}
            style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
          />
          <div className='flex flex-row mb-[49px]'>
            <div>
              <p className='text-[#7E88C3] font-medium mb-[9px]'>City</p>
              <input
                type='text'
                placeholder='Bradford'
                className={`w-[152px] h-[48px] border ${
                  isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                } bg-${
                  isDarkMode ? "#252945" : "white"
                } text-white rounded mb-[25px]`}
                style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
              />
            </div>
            <div>
              <p className='text-[#7E88C3] ml-[24px] font-medium mb-[9px]'>
                Post Code
              </p>
              <input
                type='text'
                placeholder='BD1 9PB'
                className={`w-[152px] h-[48px] ml-[24px] border ${
                  isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                } bg-${
                  isDarkMode ? "#252945" : "white"
                } text-white rounded mb-[25px]`}
                style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
              />
            </div>
            <div>
              <p className='text-[#7E88C3] ml-[24px] font-medium mb-[9px]'>
                Country
              </p>
              <input
                type='text'
                placeholder='United Kingdom'
                className={`w-[152px] ml-[24px] h-[48px] border ${
                  isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                } bg-${
                  isDarkMode ? "#252945" : "white"
                } text-white rounded mb-[25px]`}
                style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
              />
            </div>
          </div>
          <div className='mt-[49px] flex flex-col'>
            <div className='flex flex-row'>
              <div>
                <p className='text-[#7E88C3] font-medium mb-[9px]'>
                  Invoice Date
                </p>
                <div className='flex flex-row items-center'>
                  <input
                    type='text'
                    className={`w-[240px] h-[48px] mr-[-25px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[25px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                    placeholder='21 Aug 2021'
                  />
                  <img src={Calendar} alt='' className='pb-5 ' />
                </div>
              </div>
              <div>
                <p className='text-[#7E88C3] font-medium mb-[9px] ml-[24px]'>
                  Payment Terms
                </p>
                <div className='flex flex-row items-center'>
                  <input
                    type='text'
                    className={`w-[240px] h-[48px] mr-[-25px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[25px] ml-[24px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                    placeholder='Net 30 Days'
                  />
                  <img src={arrow} alt='' className='pb-5 ' />
                </div>
              </div>
            </div>
            <div>
              <p
                className={`text-[#7E88C3] font-medium mb-[9px] ${
                  isDarkMode ? "text-[#7E88C3]" : "text-[#7E88C3]"
                }`}>
                Project Description
              </p>
              <input
                type='text'
                className={`w-[504px] h-[48px] border ${
                  isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                } bg-${
                  isDarkMode ? "#252945" : "white"
                } text-white rounded mb-[35px]`}
                style={{ backgroundColor: isDarkMode ? "#252945" : "white" }}
                placeholder='Net 30 Days'
              />
            </div>
            <h2
              className={`text-[#777F98] font-medium mb-[14px] text-[18px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}>
              Item List
            </h2>
            <div>
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <p className='text-[#7E88C3] font-medium mb-[14px]'>
                    Item name
                  </p>
                  <input
                    type='text'
                    className={`w-[214px] h-[48px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[18px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                  />
                  <input
                    type='text'
                    className={`w-[214px] h-[48px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[35px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                  />
                </div>
                <div className='flex flex-col ml-[16px]'>
                  <p className='text-[#7E88C3] font-medium mb-[14px]'>Qty.</p>
                  <input
                    type='text'
                    className={`w-[46px] h-[48px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[18px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                  />
                  <input
                    type='text'
                    className={`w-[46px] h-[48px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[35px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                  />
                </div>
                <div className='flex flex-col ml-[16px]'>
                  <p className='text-[#7E88C3] font-medium mb-[14px]'>Price</p>
                  <input
                    type='text'
                    className={`w-[100px] h-[48px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[18px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                  />
                  <input
                    type='text'
                    className={`w-[100px] h-[48px] border ${
                      isDarkMode ? "border-[#DFE3FA]" : "border-[#DFE3FA]"
                    } bg-${
                      isDarkMode ? "#252945" : "white"
                    } text-white rounded mb-[35px]`}
                    style={{
                      backgroundColor: isDarkMode ? "#252945" : "white",
                    }}
                  />
                </div>
                <div className='flex flex-col ml-[16px]'>
                  <p className='text-[#7E88C3] font-medium mb-[24px]'>Total</p>
                  <p
                    className={`text-[#888EB0] font-medium mb-[44px] ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}>
                    156.00
                  </p>
                  <p
                    className={`text-[#888EB0] font-medium mb-[18px] ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}>
                    400.00
                  </p>
                </div>
                <div className='flex flex-col ml-[20px] mt-14'>
                  <img src={trash} alt='' className='mb-[54px] ' />
                  <img src={trash} alt='' className='' />
                </div>
              </div>
              <div>
                <button
                  className={`w-[504px] h-[48px] text-[#7E88C3] font-bold ${
                    isDarkMode ? "bg-[#252945]" : "bg-white"
                  }`}>
                  + Add New Item
                </button>
              </div>
              <div className='flex flex-row justify-end mt-[39px]'>
                <button
                  className={`w-[96px] h-[48px] ${
                    isDarkMode ? "bg-[#252945]" : "bg-[#F9FAFE]"
                  } font-bold text-[#7E88C3] rounded-3xl mr-[8px]`}>
                  Cancel
                </button>
                <button
                  className={`w-[138px] h-[48px] ${
                    isDarkMode ? "bg-[#7C5DFA]" : "bg-[#7C5DFA]"
                  } font-bold text-white rounded-3xl`}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideEdit;
