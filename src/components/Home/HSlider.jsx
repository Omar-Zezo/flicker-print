
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Slide1, Slide2, Slide3 } from '@/images/imgs';

export default function HSlider() {

  const slideImages = [
    {img: Slide1},
    {img: Slide2},
    {img: Slide3},
    {img: Slide1},
    {img: Slide3},
    {img: Slide2},
  ]

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-slider"
      >
        {
          slideImages.map((img, index)=>(
            <SwiperSlide>
              <div 
              style={{
                background: `url('${img.img}')`,
                objectFit: "cover"
              }}
              className='size-full rounded-[30px]'>
                <div className='content-slide size-full rounded-[30px] gradient'>
                  <div className='w-full flex items-center justify-between'>
                  <h3 className='relative overflow-hidden text-ellipsis text-nowrap'>T-SHIRT</h3>
                  <div className='count'>
                  <p>800+</p>
                  <small className='text-base'>Item</small>
                  </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

