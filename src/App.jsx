import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import SideBar from './component/sideBar';
import EmptyBanner from './component/EmptyBanner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './component/Invoices';
import AddInvoice from './component/SideAdd';

const App = () => {
  const [isInvoices, setIsInvoices] = useState(true);

  return (
    <Router>
      <div className='relative w-full'>
        <div className='fixed left-0 top-0'>{<SideBar />}</div>
        <div className='m-auto w-[60%]'>
          <header className='mb-7'>{<Header />}</header>
          <main>
            <Routes>
              <Route path='/' element={<Invoices />} />
              <Route path='/sideedit/:id' element={<AddInvoice />} />
              <Route path='/empty' element={<EmptyBanner />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
