import React, { useState, useEffect } from 'react';
import content from '../../local.json';

const Invoices = () => {
  const [invoces, setInvoces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInvoces(content);
      setLoading(false);
    }, 1000);
  }, []);

<<<<<<< Updated upstream
  const getStatusClasses = (status) => {
    if (status.toLowerCase() === 'paid') return 'bg-green-100 text-green-500';
    if (status.toLowerCase() === 'pending')
      return 'bg-orange-100 text-orange-500';
    if (status.toLowerCase() === 'draft') return 'bg-gray-100 text-gray-500';
    return '';
  };

  const getDotColor = (status) => {
    if (status.toLowerCase() === 'paid') return 'bg-green-500';
    if (status.toLowerCase() === 'pending') return 'bg-orange-500';
    if (status.toLowerCase() === 'draft') return 'bg-gray-500';
    return '';
  };

  return (
    <>
      {loading ? (
        <div className='text-center py-4'>Loading...</div>
      ) : (
        <div className='space-y-4'>
          {invoces.map((invoce, index) => (
            <div
              key={index}
              className='p-4 border rounded-lg shadow-md flex items-center justify-between bg-white'
            >
              <div className='font-bold w-[60px] text-gray-700'>
                #{invoce.id}
              </div>

              <div className='w-[90px] text-gray-500 text-sm'>
                Due {invoce.date} {invoce.month} {invoce.year}
              </div>

              <div className='w-[75px] text-gray-500'>{invoce.name}</div>

              <div className='w-[75px] font-bold text-lg text-gray-700'>
                £{(invoce.quantity * invoce.price).toFixed(2)}
              </div>

              <div
                className={`flex items-center justify-center gap-2 px-3 py-1 rounded-full w-[105px] text-sm font-semibold ${getStatusClasses(
                  invoce.status
                )}`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${getDotColor(
                    invoce.status
                  )}`}
                ></div>
                {invoce.status}
              </div>

              <div className='text-purple-500 font-bold'>›</div>
            </div>
=======
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {invoces.map((invoce, index) => (
            <div key={index}>{invoce.city}</div>
>>>>>>> Stashed changes
          ))}
        </div>
      )}
    </>
  );
};

export default Invoices;
