import React from 'react'
import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
import c from "./Little__swiper__two.module.scss"
import "./Little__swiper__two__btn.css"
const Little__swiper__two = () => {
  return (
    <div className={c.little__Carusel__two}>
      <div className={c.little__Carusel__title}>
        <p>
        Оммабоп категориялар
        </p>
      </div>
    <button className="little__swiper__two__left"><BiChevronLeft/></button>
    <button className="little__swiper__two__right"><BiChevronRight/></button>
    <Swiper
      slidesPerView={6}
      spaceBetween={20}
      navigation={{
        nextEl:".little__swiper__two__right",
        prevEl:".little__swiper__two__left"
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide><div className={c.little__Carusel__two__card}><img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg" alt="" /><p>Чангютгичлар</p></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__two__card}><img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg" alt="" /><p>Планшетлар</p></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__two__card}><img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg" alt="" /><p>Музлатгичлар</p></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__two__card}><img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg" alt="" /><p>Ҳаво совутгичлар</p></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__two__card}><img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg" alt="" /><p>Телевизорлар</p></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__two__card}><img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg" alt="" /><p>Фенлар</p></div></SwiperSlide>
      <SwiperSlide><div className={c.little__Carusel__two__card}><img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg" alt="" /><p>Кир ювиш машиналари</p></div></SwiperSlide>       
    </Swiper>
  
  </div>
  )
}

export default Little__swiper__two