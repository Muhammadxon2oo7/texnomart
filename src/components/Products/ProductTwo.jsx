import React ,{useState,useEffect} from 'react'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react";
import { SlBasket } from "react-icons/sl"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import c from "./Products.module.scss"
import "./Products__btns.css"
//import { useDispatch } from 'react-redux';
import Savatcha from '../Savatcha/Savatcha';
import { Link } from 'react-router-dom';

const ProductTwo = () => {
    //const dispatch = useDispatch()
    const [productData, setProductData] = useState([])
    const [onlyfalse, setfalse] = useState(false)
    useEffect(() => {
        (async () => {
          const RESPONSE = await fetch("https://api.escuelajs.co/api/v1/products")
          const data = await RESPONSE.json();
          setProductData(data)
        })()
      }, [])
  return (
    <div>
    <div className={c.Products__title}>
        <p>
        Янги маҳсулотлар
        </p>
      </div>
      <div className={c.Products__cards__wrapper}>
        <button className="product__swiper__two__left"><BiChevronLeft /></button>
        <button className="product__swiper__two__right"><BiChevronRight /></button>
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          cssMode={true}
          navigation={{
            nextEl: ".product__swiper__two__right",
            prevEl: ".product__swiper__two__left"
          }}

          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"

        >
          {
            productData.map(product =>
              product.category.name === "Electronics" ?
                product.images[0] !== "ggggg" && product.images[0].length > 5 && product.images[0] !== "https://pllaceimg.com/640/480/any" ?
                  <SwiperSlide className={c.swiper} key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    <div className={c.Product__card}>
                      <img src={product.images[0]} alt="" />
                      <p className={c.product__name}>{product.title}</p>
                      <p className={c.product__price}>{product.price} $</p>
                      {console.log(product.images[0])}
                      <button onClick={() => {  
                        // dispatch({
                        //   type: "ADD_TO_CARD",
                        //   product: product
                        // })
                      }} className={c.shop__btn}><SlBasket className={c.shp__btn__icon} /><p>Саватчага</p></button>
                      {onlyfalse && (<Savatcha product={product} />)}
                    </div>
                    </Link>
                  </SwiperSlide> : <></>
                : <></>
            )

          }
        </Swiper>
      </div>
    </div>
  )
}

export default ProductTwo