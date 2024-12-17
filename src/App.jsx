import './App.css';
import Header from './component/Header';
import Invoices from './component/Invoices';
import SideBar from './component/sideBar';
import SideAdd from './component/SideAdd';

function App() {
  return (
    <>
      <div className='flex justify-between'>
        <div>{<SideBar />}</div>
        <div>
          <header className='mb-7'>{<Header />}</header>
          <main>{<Invoices />}</main>
        </div>
      </div>
    </>
  );
}

export default App;
