import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

function Layout (){
  return (
    <div >
    <Navbar/>
     <Outlet className="outlet"/>
     <Footer/>
    </div>
  )
}

export default Layout