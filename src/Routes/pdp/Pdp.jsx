import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { removeSelectedProduct, selectedProduct } from '../../redux/actions/ProductActions'
import c from "./Pdp.module.scss"


const Pdp = () => {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()
  let { Id } = useParams()
  const Fetch = async () => {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${Id}`)
      .catch(e => console.log("Error: ", e.message))
    dispatch(selectedProduct(response.data))
  }
  console.log(Id)
  useEffect(() => {
    if (Id && Id !== "") {
      Fetch()
    }
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [Id])
  return (
    <>
      <Header />
      <div>
        {Object.keys(product).length === 0 ? (
       
            <div class="progress">
              <div class="indeterminate"></div>
            </div>
       
        ) :
          (<div className={c.Pdp}>
            <div className={c.container}>
              <div className={c.pdp__title}>
                <p>
                  {product.title}
                </p>
              </div>
              <div className={c.product__content}>
                <div className={c.pdp__img__wrapper}>
                  <img src={product.images[0]} className={c.pdp__image} alt="" />
                </div>
                <div className={c.price__card}>
                  <p>{product.description}</p>
                  <p>Price :{product.price}</p>
                  <button className={c.add_to_Card_pdp}>Саватчага</button>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </>
  )
}

export default Pdp

