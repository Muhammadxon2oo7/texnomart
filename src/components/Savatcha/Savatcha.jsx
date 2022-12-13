import React from 'react'
import { CgClose } from "react-icons/cg"
import c from "./Savatcha.module.scss"
import { SlBasket } from "react-icons/sl"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md"
import { selectedProduct } from '../../redux/actions/ProductActions'
const Savatcha = (props) => {
  const dispatch = useDispatch()
  const allAddedProducts = useSelector(state => state.product)
  const allPrise = useSelector(pricee => pricee)
  const GetProducts = allAddedProducts
  console.log(dispatch(selectedProduct()))
  const [showProducts, setShowProducts] = useState(false)
  const handleNoProduct = () => {
    GetProducts.product.length > 0 ?
      setShowProducts(true)
      : setShowProducts(false)
  }
  

  return (
    <div className={c.modal__wrapper} onMouseLeave={handleNoProduct} onMouseEnter={handleNoProduct}>
      <div className={c.modal__bg} onClick={props.modalClose}></div>
      <div className={c.modal__card}>
        <div onClick={props.modalClose} className={c.closeBtn__wrapper}>
          <CgClose />
        </div>
        <div className={c.modal__title__wrapper}>
          <p>
            Ҳозир харид қилиш
          </p>
        </div>

        {
          showProducts ? <div className={c.savatcha__wrapper}>{GetProducts.card.map(cart =>
            <div className={c.savatcha__item}>
              
              <div className={c.savatcha__item_dec__wrapper}>
                <img className={c.savatcha__item__img} src={cart.images[0]} alt="" />
                <p><span className={c.savatcha__item__dec__p__name}>{cart.title}</span> <br /><span className={c.savatcha__item__dec__p__price}>{cart.price} $</span></p>
              </div>
              <div className={c.control__btns}>
                <button className={`${c.learnmore} ${c.item__remove}`} onClick={(index) => {
                   dispatch({
                     type: "DELETE_ITEM", product: props.product
                   })
                 }
                }>
                  <span className={c.circle} aria-hidden="true">
                    <MdRemoveShoppingCart className={c.circle__remove__icon} />
                  </span>
                  <span className={c.buttontext}>remove</span>
                </button>

                <button className={`${c.learnmore} ${c.item__add}`} onClick={(index) => {
                  dispatch({
                    type: "ADD_+1", product: cart
                  })
                }}>
                  <span className={c.circle} aria-hidden="true">
                    <MdAddShoppingCart className={c.circle__add__icon} />
                  </span>
                  <span className={c.buttontext}>Add</span>
                </button>
              </div>

            </div>
          )}
            <div className={c.trapdoor}>
              <div className={`${c.top} ${c.door}`}>
              </div>
              <div className={`${c.bottom} ${c.door}`}>
              </div>
              <p className={c.twitterfollowbutton} data-show-count="false" data-size="large" data-dnt="false">
              {allPrise.pricee.reduce((prev, curr) => prev + curr, 0)} $
              </p>

            </div>
          </div> :
            <div className={c.no__product}>
              <SlBasket className={c.no__product__icon} />
              <p className={c.no__product__text}>
                Саватчада хозирда <br />
                ҳеч нима йўқ
              </p>
              <button onClick={props.modalClose} className={c.go__shopping}>Харид қилиш</button>

            </div>
        }

      </div>
    </div>
  )
}

export default Savatcha



