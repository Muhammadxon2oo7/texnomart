import React , {useEffect} from 'react'
import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import c from './Banner.module.scss'
import './Btns.css'

const Banner = () => {

  

  return (
    <div className={c.Banner}>
      
    <div className={c.Banner__container}>
      <button className="swiper__left__btn"><BiChevronLeft/></button>
      <button className="swiper__right__btn"><BiChevronRight/></button>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl:".swiper__right__btn",
          prevEl:".swiper__left__btn"
        }}
        pagination={{
          clickable: true,
          //dotEl:"dots"
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
        loopFillGroupWithBlank={true}
        
      >
      
        <SwiperSlide><img className={c.Banner__caontainer__imgs} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/6648171920kr.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.Banner__caontainer__imgs} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/8794121920kr.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.Banner__caontainer__imgs} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/5247261920kr.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.Banner__caontainer__imgs} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2617201920kr.webp" alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}


export default Banner



