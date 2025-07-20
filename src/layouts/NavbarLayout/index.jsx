import React from 'react'
import Footer from '../../pages/components/Footer';
import { Outlet } from "react-router"
import Navbar from '../../pages/Components/Navbar';




const NavbarLayout = () => {
  return  <>
     <Navbar/>
     <main>
        <Outlet/>
     </main>
     <Footer/>    
    </>
}

export default NavbarLayout
