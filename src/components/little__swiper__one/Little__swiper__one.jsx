import React from 'react'
import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
import c from "./Little__swiper__one.module.scss"
import "./Little__swiper__one__btn.css"
const Little__swiper__one = () => {
  return (
    <div className={c.little__Carusel__one}>
    <button className="little__left"><BiChevronLeft/></button>
    <button className="little__right"><BiChevronRight/></button>
    <Swiper
      slidesPerView={8}
      spaceBetween={20}
      navigation={{
        nextEl:".little__right",
        prevEl:".little__left"
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404154940058.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404501355729.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404542676301.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404481916020.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101405315369098.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404183539183.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404450190315.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404461797247.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__one__card}><img src="https://backend.texnomart.uz//images/brands/2022101404240931733.webp" alt="" /></div></SwiperSlide>        
    </Swiper>
  
  </div>
  )
}

export default Little__swiper__one