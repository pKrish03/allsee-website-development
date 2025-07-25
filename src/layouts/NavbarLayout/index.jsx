import React from 'react'
import Footer from '../../pages/components/Footer';
import { Outlet } from "react-router"
import Navbar from '../../pages/components/Navbar';




const NavbarLayout = () => {
  return  <>
     <Navbar/>
     <main className="main-content">
        <Outlet/>
     </main>
     <Footer/>    
    </>
}

export default NavbarLayout
