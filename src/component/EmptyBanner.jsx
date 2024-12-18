import React from 'react';
import empty from '../assets/png/empty-banner.png';

const EmptyBanner = () => {
  return (
    <>
      <div className='w-[40%] flex flex-col justify-between items-center'>
        <div>
          <img src={empty} alt='empty content' />
        </div>
        <div>
          <h3>There is nothing here</h3>
          <p>
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </div>
      </div>
    </>
  );
};

export default EmptyBanner;
