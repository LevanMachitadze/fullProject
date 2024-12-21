import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import content from '../../local.json';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoices = async () => {
      setTimeout(() => {
        setInvoices(content);
        setLoading(false);
      }, 1000);
    };

    fetchInvoices();
  }, []);

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

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleBackButtonClick = () => {
    setSelectedInvoice(null);
  };

  const handleOpenDeleteModal = () => {
    setDeleteAlert(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteAlert(false);
  };

  const handleDeleteInvoice = () => {
    const updatedInvoices = invoices.filter(
      (invoice) => invoice.id !== selectedInvoice.id
    );
    setInvoices(updatedInvoices);
    setSelectedInvoice(null);
    setDeleteAlert(false);
  };

  const handleEditInvoice = (invoice) => {
    navigate(`/sideadd/${invoice.id}`);
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      {loading ? (
        <div className='text-center py-4'>Loading...</div>
      ) : selectedInvoice ? (
        <div>
          <button onClick={handleBackButtonClick} className='mb-4 underline'>
            Go back
          </button>
          <div className='p-6 border rounded-lg shadow-md bg-white mb-16'>
            <div className='flex justify-between items-center mb-6'>
              <div className='flex items-center'>
                <span className='mr-2'>Status</span>
                <div
                  className={`px-4 py-2 rounded-full font-semibold ${getStatusClasses(
                    selectedInvoice.status
                  )}`}
                >
                  {selectedInvoice.status}
                </div>
              </div>
              <div>
                <div className='flex space-x-4'>
                  <button
                    onClick={() => handleEditInvoice(selectedInvoice)}
                    className='px-4 py-2 text-[#7E88C3] bg-gray-100 rounded-full font-bold hover:bg-gray-200'
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleOpenDeleteModal}
                    className='px-4 py-2 text-white bg-red-500 rounded-full font-bold hover:bg-red-600'
                  >
                    Delete
                  </button>
                  <button className='px-4 py-2 text-white bg-purple-500 rounded-full font-bold hover:bg-purple-600'>
                    Mark as Paid
                  </button>
                </div>
              </div>
            </div>

            <div className='p-6 border rounded-lg shadow-md bg-white'>
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='text-2xl font-bold'>#{selectedInvoice.id}</h2>
                  <p>{selectedInvoice.itemName}</p>
                </div>
                <div className='flex flex-col'>
                  <span>{selectedInvoice.fromStreet}</span>
                  <span>{selectedInvoice.fromCity}</span>
                  <span>{selectedInvoice.fromPostCode}</span>
                  <span>{selectedInvoice.fromCountry}</span>
                </div>
              </div>
              <div className='flex items-start justify-between mt-4'>
                <div>
                  <p className='text-gray-500'>Invoice Date</p>
                  <p className='font-bold'>{`${selectedInvoice.date} ${selectedInvoice.month} ${selectedInvoice.year}`}</p>
                </div>
                <div>
                  <p className='text-gray-500'>Bill To</p>
                  <p className='font-bold'>{selectedInvoice.name}</p>
                  <div className='flex flex-col'>
                    <span>{selectedInvoice.street}</span>
                    <span>{selectedInvoice.city}</span>
                    <span>{selectedInvoice.postCode}</span>
                    <span>{selectedInvoice.country}</span>
                  </div>
                </div>
                <div>
                  <p className='text-gray-500'>Sent to</p>
                  <p className='font-bold'>{selectedInvoice.email}</p>
                </div>
              </div>
              <div className='mt-8 bg-gray-50 rounded-lg'>
                <table className='w-full'>
                  <thead>
                    <tr className='text-left text-gray-500 text-sm'>
                      <th className='py-2'>Item Name</th>
                      <th className='py-2'>QTY.</th>
                      <th className='py-2'>Price</th>
                      <th className='py-2'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t'>
                      <td className='py-2'>{selectedInvoice.itemName}</td>
                      <td className='py-2'>{selectedInvoice.quantity}</td>
                      <td className='py-2'>
                        £{selectedInvoice.price.toFixed(2)}
                      </td>
                      <td className='py-2'>
                        £
                        {(
                          selectedInvoice.quantity * selectedInvoice.price
                        ).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='flex justify-between items-center mt-4 bg-[#373B53] text-white w-full h-[80px] rounded-b-[8px] p-4'>
                  <span>Amount Due</span>
                  <span className='ml-2 text-xl font-bold'>
                    £
                    {(selectedInvoice.quantity * selectedInvoice.price).toFixed(
                      2
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='space-y-4'>
          {invoices.map((invoice, index) => (
            <div
              key={index}
              className='p-4 border rounded-lg shadow-md flex items-center justify-between bg-white hover:shadow-lg cursor-pointer'
              onClick={() => handleInvoiceClick(invoice)}
            >
              <div className='font-bold text-gray-700'>#{invoice.id}</div>
              <div className='text-gray-500 text-sm'>
                Due {invoice.date} {invoice.month} {invoice.year}
              </div>
              <div className='font-bold text-lg text-gray-700'>
                £{(invoice.quantity * invoice.price).toFixed(2)}
              </div>
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(
                  invoice.status
                )}`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${getDotColor(
                    invoice.status
                  )}`}
                ></div>
                {invoice.status}
              </div>
              <div className='text-purple-500 font-bold'>›</div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Modal */}
      {deleteAlert && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg z-20 w-[400px]'>
            <h2 className='text-xl font-bold mb-4'>Confirm Deletion</h2>
            <p>Are you sure you want to delete this invoice?</p>
            <div className='mt-6 flex justify-end space-x-4'>
              <button
                onClick={handleCloseDeleteModal}
                className='px-4 py-2 bg-gray-200 rounded-full font-bold hover:bg-gray-300'
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteInvoice}
                className='px-4 py-2 text-white bg-red-500 rounded-full font-bold hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;
