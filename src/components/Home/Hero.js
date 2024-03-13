import React from 'react'
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import hero1 from '../hardcodedimg/hero1.jpg';
import hero2 from '../hardcodedimg/hero2.jpg';
import hero3 from '../hardcodedimg/hero3.jpg';
import hero4 from '../hardcodedimg/hero4.jpg';
import hero5 from '../hardcodedimg/hero5.jpg';


import 'swiper/css';

function Hero() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, A11y]}
      //spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
    >
      <SwiperSlide><img src={hero1} alt="img" className='sw-img'/></SwiperSlide>
      <SwiperSlide><img src={hero2} alt="img" className='sw-img'/></SwiperSlide>
      <SwiperSlide><img src={hero3} alt="img" className='sw-img'/></SwiperSlide>
      <SwiperSlide><img src={hero4} alt="img" className='sw-img'/></SwiperSlide>
      <SwiperSlide><img src={hero5} alt="img" className='sw-img'/></SwiperSlide>

    </Swiper>
  )
}
export default Hero;
