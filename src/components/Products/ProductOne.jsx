import React, { useState, useEffect } from 'react'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { Swiper, SwiperSlide } from "swiper/react";
import { SlBasket } from "react-icons/sl"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import c from "./Products.module.scss"
import "./Products__btns.css"
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from "../../redux/actions/ProductActions"
import Savatcha from '../Savatcha/Savatcha';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductOne = () => {
  const [productData, setProductData] = useState([])
  const [onlyfalse, setfalse] = useState(false)
  const products = useSelector(state => state.allProducts.product)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/categories/4/products/")
      .catch(e => console.log("Error: ", e.message))
    dispatch(setProduct(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const renderList = products.map((product) => {
    const { id, title, images, price, category } = product
    return (


      category.name === "Shoes" ?
        images[0] !== "ggggg" && product.images[0].length > 5 && images[0] !== "https://pllaceimg.com/640/480/any" ?
          <SwiperSlide className={c.swiper} key={id}>
            
              <div className={c.Product__card}>
              <Link to={`/products/${id}`}>
                <img id="cat" src={images[0]} alt="" />
                </Link>
                <p className={c.product__name}>{title}</p>
                <p className={c.product__price}>{price} $</p>
                <button onClick={(e) => {
                  dispatch({
                    type: "ADD_TO_CARD",
                    product: product,
                    id:e.target.id
                  })
                }}
                  className={c.shop__btn} id="button"><SlBasket className={c.shp__btn__icon} /><p>Саватчага</p></button>
                {onlyfalse && (<Savatcha product={product} />)}

              </div>
            
          </SwiperSlide> : <></>
        : <></>


    )
  })
  console.log(products)
  return (
    <>
      <div>
        <div className={c.Products__title}>
          <p>
            Зўр нарх
          </p>
        </div>
        <div className={c.Products__cards__wrapper}>
          <button className="product__swiper__one__left"><BiChevronLeft /></button>
          <button className="product__swiper__one__right"><BiChevronRight /></button>
          <Swiper
            slidesPerView={6}
            spaceBetween={5}
            cssMode={true}
            navigation={{
              nextEl: ".product__swiper__one__right",
              prevEl: ".product__swiper__one__left"
            }}

            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {renderList}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductOne