import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

export default function Imageslider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <div className='box'>
        <SwiperSlide><img src="https://www.shutterstock.com/image-vector/sale-poster-design-smart-phone-600w-265172093.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.shutterstock.com/image-vector/phone-hand-digital-technology-concept-600w-2144587601.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.shutterstock.com/image-illustration/shopping-online-store-on-website-600w-1735579058.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.shutterstock.com/image-vector/big-sale-banner-template-design-600w-1226331625.jpg" alt="" /></SwiperSlide>
        </div>
        
      </Swiper>
    </>
  );
}