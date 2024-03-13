import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import HeroMini from '../components/Home/HeroMini';
import HomeShop from '../components/Home/HomeShop';
import Footer from '../components/Footer';
import Newsletter from '../components/Home/Newsletter';
import HomeBlog from '../components/Home/HomeBlog';

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeroMini/>
        <HomeShop/>
        <HomeBlog/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home;
