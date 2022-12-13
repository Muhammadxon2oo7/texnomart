import React, { useEffect, useState } from 'react'
import ProductOne from './ProductOne'
import ProductTwo from './ProductTwo'
import c from "./Products.module.scss"

const Products = () => {

  return (

    <div className={c.Products}>
      <ProductOne/>
      <ProductTwo/>
    </div>

  )

}

export default Products


