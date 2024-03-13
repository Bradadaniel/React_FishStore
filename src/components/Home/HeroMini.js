import React from 'react'
import './HeroMini.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import bc1 from '../hardcodedimg/bc1.jpg';
import bc2 from '../hardcodedimg/bc2.jpg';
import bc3 from '../hardcodedimg/bc3.jpg';
import bc4 from '../hardcodedimg/bc4.jpg';
import bc5 from '../hardcodedimg/bc5.jpg';

import 'swiper/css';
import HeroMiniData from './HeroMiniData';


function HeroMini() {
  return (
    <div className="HeroMini" data-aos="fade-up">
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    loop
    breakpoints={{
        978: {
          slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 2,
          },
      }}

  >
    <SwiperSlide>
    <HeroMiniData 
        img={bc1}
        title='Ponty Horgászat'
        text='Új kollekció'
    />
    </SwiperSlide>
    <SwiperSlide>
    <HeroMiniData 
        img={bc2}
        title='Ragadozó Horgászat'
        text='Új kollekció'
    />
    </SwiperSlide>
    <SwiperSlide>
    <HeroMiniData 
        img={bc3}
        title='Pergető Horgászat'
        text='Új kollekció'
    />
    </SwiperSlide>
    <SwiperSlide>
    <HeroMiniData 
        img={bc4}
        title='Úszós Horgászat'
        text='Új kollekció'
    />
    </SwiperSlide>
    <SwiperSlide>
    <HeroMiniData 
        img={bc5}
        title='Horgász Ruházat'
        text='Új kollekció'
    />
    </SwiperSlide>

  </Swiper>
  </div>
  )
}

export default HeroMini;