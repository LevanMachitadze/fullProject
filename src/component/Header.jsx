import React, { useState } from 'react';
import upArrow from '../assets/png/uparrow.png';
import plius from '../assets/png/plius.png';

const Header = ({ arrayLength }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
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
            className='flex text-[#0C0E16] items-center gap-2 text-[15px] font-bold leading-[15px]'
            onClick={toggleFilter}
          >
            Filter by status{' '}
            <img src={upArrow} className='w-[8px] h-[4px]' alt='arrow' />
          </p>

          {isFilterOpen && (
            <div className='absolute bg-white w-[192px] h-[128px] mt-6 shadow-lg rounded-md flex flex-col'>
              {!checkedStatus.pending && !checkedStatus.completed && (
                <label className='p-2 text-[#0C0E16]'>
                  <input
                    type='checkbox'
                    className='mr-2'
                    checked={checkedStatus.draft}
                    onChange={() => handleCheckboxChange('draft')}
                  />
                  Draft
                </label>
              )}
              {!checkedStatus.draft && !checkedStatus.completed && (
                <label className='p-2 text-[#0C0E16]'>
                  <input
                    type='checkbox'
                    className='mr-2'
                    checked={checkedStatus.pending}
                    onChange={() => handleCheckboxChange('pending')}
                  />
                  Pending
                </label>
              )}
              {!checkedStatus.draft && !checkedStatus.pending && (
                <label className='p-2 text-[#0C0E16]'>
                  <input
                    type='checkbox'
                    className='mr-2'
                    checked={checkedStatus.completed}
                    onChange={() => handleCheckboxChange('completed')}
                  />
                  Completed
                </label>
              )}
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
