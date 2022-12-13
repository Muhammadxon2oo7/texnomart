import React from 'react'
import Littleswiperone from '../little__swiper__one/Little__swiper__one'
import Littleswipertwo from '../little__swiper__two/Little__swiper__two'
import Products from '../Products/Products'
import c from "./Main.module.scss"
const Main = () => {
  return (
    <div className={c.Main}>
    <Littleswiperone/>
    <Littleswipertwo/>
    <Products/>
    </div>
  )
}

export default Main