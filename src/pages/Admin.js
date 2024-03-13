import React from 'react'

import Navbar from '../components/Navbar';
import Create from '../components/Admin/AddNewProduct';
import Footer from '../components/Footer';

 function Admin() {
  return (
    <div>
        <Navbar/>
        <Create/>
        <Footer/>
    </div>
  )
}

export default Admin;
