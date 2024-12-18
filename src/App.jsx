import "./App.css";
import Header from "./component/Header";
import Invoices from "./component/Invoices";
import SideBar from "./component/sideBar";
import SideAdd from "./component/SideAdd";

function App() {
  return (
    <>
      <div className="relative w-full">
        <div className="fixed left-0 top-0">{<SideBar />}</div>
        <div className="m-auto w-[60%]">
          <header className="mb-7">{<Header />}</header>
          <main>{<Invoices />}</main>
        </div>
      </div>
    </>
  );
}

export default App;
