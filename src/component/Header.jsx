import React, { useState } from 'react';
import upArrow from '../assets/png/uparrow.png';
import plius from '../assets/png/plius.png';

const Header = ({ arrayLength, setFilterStatus }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checkedStatus, setCheckedStatus] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCheckboxChange = (status) => {
    const newStatus = { ...checkedStatus, [status]: !checkedStatus[status] };

    // Ensure only one checkbox is selected at a time
    Object.keys(newStatus).forEach((key) => {
      newStatus[key] = key === status ? !checkedStatus[status] : false;
    });

    setCheckedStatus(newStatus);

    // Set the filter status based on the checkbox selection
    const activeStatus = Object.keys(newStatus).find((key) => newStatus[key]);
    setFilterStatus(activeStatus || null); // If no checkbox is selected, clear the filter
  };

  return (
    <header className='flex justify-between items-center'>
      <div>
        <p className='text-[#0C0E16] text-[36px] font-bold'>Invoices</p>
        <p className='text-[#888EB0]'>
          There are {arrayLength} pending invoices
        </p>
      </div>
      <div className='flex items-center gap-9'>
        <div>
          <p
            className='flex text-[#0C0E16] items-center gap-2 text-[15px] font-bold leading-[15px] cursor-pointer'
            onClick={toggleFilter}
          >
            Filter by status{' '}
            <img src={upArrow} className='w-[8px] h-[4px]' alt='arrow' />
          </p>

          {isFilterOpen && (
            <div className='absolute bg-white w-[192px] h-auto mt-6 shadow-lg rounded-md flex flex-col'>
              {['draft', 'pending', 'paid'].map((status) => (
                <label key={status} className='p-2 text-[#0C0E16]'>
                  <input
                    type='checkbox'
                    className='mr-2'
                    checked={checkedStatus[status]}
                    onChange={() => handleCheckboxChange(status)}
                  />
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </label>
              ))}
            </div>
          )}
        </div>

        <button className='w-[190px] h-[50px] pl-3 bg-[#9277FF] leading-[33px] rounded-[50px] flex items-center gap-5'>
          <div className='w-[40px] h-[40px] bg-white flex items-center justify-center rounded-3xl'>
            <img src={plius} alt='plius' />
          </div>
          <p className='text-white text-[15px] font-bold leading-[15px]'>
            New Invoice
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
