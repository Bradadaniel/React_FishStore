import React from 'react'
import './HomeShop.css'

import ProductCard from '../Admin/ProductCard';

function HomeShop() {
  return (
    <div>
        <section className="conatiner">
            <h1>Legújabb termékek</h1>
            <div className="box">
                <ProductCard/>
            </div>
        </section>
    </div>
  )
}

export default HomeShop;
