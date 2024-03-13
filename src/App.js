import React, {useEffect} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ProductDetails from './components/Admin/ProductDetails';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;