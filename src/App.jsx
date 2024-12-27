import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import SideBar from './component/sideBar';
import EmptyBanner from './component/EmptyBanner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './component/Invoices';
import AddInvoice from './component/SideAdd';

const App = () => {
  const [isLight, setIsLight] = useState(true);
  const [filterStatus, setFilterStatus] = useState('');
  const [arrayLength, setArrayLength] = useState(0);

  return (
    <Router>
      <div
        className={`relative w-full ${
          isLight ? 'bg-white text-[#0C0E16]' : 'bg-[#141625] text-white'
        }`}
      >
        <div className='xl:fixed xl:left-0 w-full xl:w-4 xl:max-w-[1280px] xl:top-0 fixed left-0 top-0'>
          <SideBar isLight={isLight} setIsLight={setIsLight} />
        </div>
        <div className='m-auto w-[60%] mt-[80px] xl:mt-0'>
          <header className='mb-7'>
            <Header
              isLight={isLight}
              setFilterStatus={setFilterStatus}
              arrayLength={arrayLength}
            />
          </header>
          <main>
            <Routes>
              <Route
                path='/'
                element={
                  <Invoices
                    isLight={isLight}
                    filterStatus={filterStatus}
                    setArrayLength={setArrayLength}
                  />
                }
              />
              <Route
                path='/sideadd/:id'
                element={<AddInvoice isLight={isLight} />}
              />
              <Route
                path='/empty'
                element={<EmptyBanner isLight={isLight} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
