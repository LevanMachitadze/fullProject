import "./App.css";
import Header from "./component/Header";
import Invoices from "./component/Invoices";
import SideBar from "./component/sideBar";
import SideAdd from "./component/SideAdd";
import EmptyBanner from "./component/EmptyBanner";
import { useState } from "react";
import SideEdit from "./component/SideEdit";

function App() {
  const [isInvoces, setIsInvoces] = useState(false);
  return (
    <>
      <div className='relative w-full'>
        <div className='fixed left-0 top-0'>{<SideBar />}</div>
        <div>{<SideEdit />}</div>
        <div className='m-auto w-[60%]'>
          {/* <header className='mb-7'>{<Header />}</header>
          <main>{isInvoces ? <Invoices /> : <EmptyBanner />}</main> */}
        </div>
      </div>
    </>
  );
}

export default App;
