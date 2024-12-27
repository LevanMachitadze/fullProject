import React, { useState } from "react";
import upArrow from "../assets/png/uparrow.png";
import plius from "../assets/png/plius.png";

const Header = ({ isLight, setFilterStatus }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checkedStatus, setCheckedStatus] = useState({
    draft: false,
    pending: false,
    completed: false,
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCheckboxChange = (status) => {
    setCheckedStatus((prevStatus) => ({
      ...prevStatus,
      [status]: !prevStatus[status],
    }));

    if (checkedStatus[status]) {
      setFilterStatus("");
    } else {
      setFilterStatus(status);
    }
  };

  return (
    <header
      className={`flex justify-between items-center flex-col sm:flex-row text-center ${
        isLight ? "bg-white text-[#0C0E16]" : "bg-[#141625] text-white"
      }`}
    >
      <div className="xl:w-[200px]">
        <p className="text-[36px] font-bold">Invoices</p>
        <p className={`${isLight ? "text-[#888EB0]" : "text-[#DFE3FA]"}`}>
          There are 34 pending invoices
        </p>
      </div>

      <div className="flex items-center gap-9 flex-col sm:flex-row">
        <div>
          <p
            className="flex items-center gap-2 text-[15px] font-bold leading-[15px] cursor-pointer"
            onClick={toggleFilter}
          >
            Filter by status{" "}
            <img src={upArrow} className="w-[8px] h-[4px]" alt="arrow" />
          </p>

          {isFilterOpen && (
            <div
              className={`absolute ${
                isLight ? "bg-white" : "bg-[#373B53]"
              } w-[192px] h-[128px] mt-6 shadow-lg rounded-md flex flex-col`}
            >
              {!checkedStatus.pending && !checkedStatus.paid && (
                <label
                  className={`p-2 items-center justify-start flex ${
                    isLight ? "text-[#0C0E16]" : "text-[#DFE3FA]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={checkedStatus.draft}
                    onChange={() => handleCheckboxChange("draft")}
                  />
                  Draft
                </label>
              )}
              {!checkedStatus.draft && !checkedStatus.paid && (
                <label
                  className={`p-2 items-center justify-start flex ${
                    isLight ? "text-[#0C0E16]" : "text-[#DFE3FA]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mr-2 "
                    checked={checkedStatus.pending}
                    onChange={() => handleCheckboxChange("pending")}
                  />
                  Pending
                </label>
              )}
              {!checkedStatus.draft && !checkedStatus.pending && (
                <label
                  className={`p-2 items-center justify-start  flex ${
                    isLight ? "text-[#0C0E16]" : "text-[#DFE3FA]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={checkedStatus.paid}
                    onChange={() => handleCheckboxChange("paid")}
                  />
                  Completed
                </label>
              )}
            </div>
          )}
        </div>

        <button
          className={`w-[190px] h-[50px] pl-3 rounded-[50px] flex items-center gap-5 ${
            isLight ? "bg-[#9277FF]" : "bg-[#7C5DFA]"
          }`}
        >
          <div
            className={`w-[40px] h-[40px] flex items-center justify-center rounded-3xl ${
              isLight ? "bg-white" : "bg-white"
            }`}
          >
            <img src={plius} alt="plius" />
          </div>
          <p className="text-white text-[15px] font-bold leading-[15px]">
            New Invoice
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
