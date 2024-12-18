import React from "react";

const SideEdit = () => {
  return (
    <div className='w-[719px] h-screen  pl-[159px] pt-[59px] pr-[56px] pb-[32px]'>
      <div className='flex flex-col '>
        <div className='mb-[46px]'>
          <h1 className='text-[#0C0E16] text-[24px] font-bold  '>
            Edit #XM9141
          </h1>
        </div>
        <div>
          <p className='text-[#7C5DFA] font-bold mb-[24px]'>Bill From</p>
          <p className='text-[#7E88C3] font-medium mb-[9px]'>Street Adress</p>
          <input
            type='text'
            placeholder='19 Union Terrance'
            className='w-[504px] h-[48px] border border-[#DFE3FA] rounded mb-[25px]'
          />
          <div className='flex flex-row mb-[49px]'>
            <div>
              <p className='text-[#7E88C3] font-medium mb-[9px]'>City</p>
              <input
                type='text'
                placeholder='London'
                className='w-[152px] h-[48px]  border border-[#DFE3FA] rounded mb-[25px]'
              />
            </div>
            <div>
              <p className='text-[#7E88C3] ml-[24px] font-medium mb-[9px]'>
                Post Code
              </p>
              <input
                type='text'
                placeholder='E1 3EZ'
                className='w-[152px] h-[48px] ml-[24px] border border-[#DFE3FA] rounded mb-[25px]'
              />
            </div>
            <div>
              <p className='text-[#7E88C3] ml-[24px] font-medium mb-[9px]'>
                Country
              </p>
              <input
                type='text'
                placeholder='United Kingdom'
                className='w-[152px] ml-[24px] h-[48px] border border-[#DFE3FA] rounded mb-[25px]'
              />
            </div>
          </div>
          <p className='text-[#7C5DFA] font-bold mb-[24px]'>Bill To</p>
          <p className='text-[#7E88C3] font-medium mb-[9px]'>Clients Name</p>
          <input
            type='text'
            placeholder='Alex Grim'
            className='w-[504px] h-[48px] border border-[#DFE3FA] rounded mb-[25px]'
          />
          <p className='text-[#7E88C3] font-medium mb-[9px]'>Clients Email</p>
          <input
            type='text'
            placeholder='Alexgrim@gmail.com'
            className='w-[504px] h-[48px] border border-[#DFE3FA] rounded mb-[25px]'
          />
          <p className='text-[#7E88C3] font-medium mb-[9px]'>Street Adress</p>
          <input
            type='text'
            placeholder='84 Church way'
            className='w-[504px] h-[48px] border border-[#DFE3FA] rounded mb-[25px]'
          />
          <div className='flex flex-row mb-[49px]'>
            <div>
              <p className='text-[#7E88C3] font-medium mb-[9px]'>City</p>
              <input
                type='text'
                placeholder='BradFord'
                className='w-[152px] h-[48px]  border border-[#DFE3FA] rounded mb-[25px]'
              />
            </div>
            <div>
              <p className='text-[#7E88C3] ml-[24px] font-medium mb-[9px]'>
                Post Code
              </p>
              <input
                type='text'
                placeholder='BD1 9PB'
                className='w-[152px] h-[48px] ml-[24px] border border-[#DFE3FA] rounded mb-[25px]'
              />
            </div>
            <div>
              <p className='text-[#7E88C3] ml-[24px] font-medium mb-[9px]'>
                Country
              </p>
              <input
                type='text'
                placeholder='United Kingdom'
                className='w-[152px] ml-[24px] h-[48px] border border-[#DFE3FA] rounded mb-[25px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideEdit;
