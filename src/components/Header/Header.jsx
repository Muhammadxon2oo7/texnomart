import React, { useState,useEffect } from 'react'
import c from "./Header.module.scss"
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl"
import { GiEarthAfricaEurope, GiScales } from "react-icons/gi"
import { RiArrowDropDownLine } from "react-icons/ri"
import logo from "../../Assets/img/texnomart-logo.svg"
import { BsSearch, BsMic, BsBoxSeam, BsHeart } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { SlBasket } from "react-icons/sl"
import Category from "../../Assets/img/category.svg"
import uuid4 from "uuid4";
import Categorymenujson from '../../json/Category__menu.json'
import Categorymenuopenjson from "../../json/Category__menu__open__lists.json"
import {AiFillThunderbolt} from "react-icons/ai"
import {HiFire} from "react-icons/hi"
import Banner from '../banner/Banner'
import Savatcha from '../Savatcha/Savatcha'
import Login from '../login/Login'
import {  signOut } from "firebase/auth";
import {auth} from '../../firebase/config';
import "./header.css"
const Header = () => {
  var uuid = require('uuid');
  const [isHovering, setIsHovering] = useState(false);
  const [isModal,setIsModal]=useState(false)
  const [isLoginModal,setIsLoginModal]=useState(false)
  const [isuseLogout,setIsuserLogout]=useState(false)
  const handleLogout = ()=>{
    setIsuserLogout(true)
  }
  const handleLogoutDisable =()=>{
    setIsuserLogout(false)
  }
  const handleLoginOpen =()=>{
    setIsLoginModal(true)
  }
  const handleLoginClose =()=>{
    setIsLoginModal(false)
  }
  const handleModalOpen =()=>{
    setIsModal(true)
  }
   const handModalClose = ()=>{
    setIsModal(false)
  }
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleClick = event => {
    let valset = event.currentTarget.id
    localStorage.setItem("location", valset)
  };

  const [isCatalog, setIsCatalog] = useState(false);
  const handleCatologClick = () => {
    setIsCatalog(true);
  };

  const handleCatologdisable = () => {
    setIsCatalog(false);
  };
  const [isCategoryOpen,setIsCategoryOpen] = useState(false)
  const handleCategoryOpenClick = (e) => {
    localStorage.setItem("category__open",e.target.textContent)  
    setIsCategoryOpen(true);
  };

  const handleCategoryOpendisable = () => {
    setIsCategoryOpen(false);
  };

  const handleLogoutt = () => {               
    signOut(auth).then(() => {
      localStorage.removeItem("userName")
      handleLogoutDisable()
    // Sign-out successful.
        console.log("Signed out successfully")

    }).catch((error) => {
    // An error happened.
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       const isSticky = (e) => {
            const header = document.querySelector('#header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 220 ? header.classList.add('is-sticky'): header.classList.remove('is-sticky') ;
        };


  return (
    <>
    <header className={c.header} >
      <div className={c.top__header}>
        <div className={c.top__header__container}>
          <ul className={c.top__header__lists__wrapper}>
            <li className={`${c.top__header__list} ${c.firs__list}`} onClick={handleMouseOver} onFocusCapture={handleMouseOut}>
              <Link className={c.top__header__lis__link} to="/"><SlLocationPin className={c.top__header__location__icon} />{localStorage.getItem("location") ? localStorage.getItem("location") : "Тошкент"}</Link>
              {isHovering && (
                <div className={c.top__header__click__show__card}>
                  <ul>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Тошкент' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Тошкент</Link></li>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Тошкент...' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Тошкент вилояти</Link></li>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Бухоро' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Бухоро вилояти</Link></li>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Андижон' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Андижон вилояти</Link></li>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Фарғона' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Фарғона вилояти</Link></li>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Наманган' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Наманган вилояти</Link></li>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Самарқанд' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Самарқанд вилояти</Link></li>
                    <li className={c.top__header__click__showBtn__list} ><Link to='/' id='Қорақалпоғистон' className={c.top__header__click__Btnshow__link} onMouseEnter={handleClick}>Республика Қорақалпоғистон</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li className={c.top__header__list}><Link className={c.top__header__lis__link} to="/">Бизнинг дўконларимиз</Link></li>
            <li className={c.top__header__list}><Link className={`${c.top__header__lis__link} ${c.list__btn}`} to="/">B2B савдоси</Link></li>
            <li className={c.top__header__list}><Link className={c.top__header__lis__link} to="/">Муддатли тўловга сотиб олиш</Link></li>
            <li className={c.top__header__list}><Link className={c.top__header__lis__link} to="/">Тўлов усуллари</Link></li>
            <li className={c.top__header__list}><Link className={c.top__header__lis__link} to="/">Маҳсулотлар учун кафолат</Link></li>
          </ul>
          <div className={c.top__header__call__center__wrapper}>
            <p className={c.top__header__call__center}>
              Aлоқа маркази :   <span> +99888 680 09 06</span>
            </p>
            <div className={c.top__header__language}>
              <p><GiEarthAfricaEurope className={c.top__header__language__icon} />UZ  <RiArrowDropDownLine className={c.top__header__language__icon__drop} /></p>
            </div>
          </div>
        </div>
      </div>
      <div className={c.bottom__header} id="header-section">
        <div className={c.bottom__header__container}>
          <div className={c.bottom__header__logo__wrapper}>
            <Link className={c.bottom__header__logo__link} to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <form className={c.bottom__header__form}>
            <div className={c.bottom__header__form__search__input__wrapper}>
              <input type="search" name="" id="" className={c.bottom__header__form__search__input} />
              <BsMic className={c.bottom__header__micraphone__icon} />
            </div>
            <div className={c.bottom__header__search__icon__wrapper}>
              <p className={c.bottom__header__search__icon}>
                <BsSearch />
              </p>
            </div>
          </form>
          <div className={c.bottom__header__right}>
            <Link className={c.bottom__header__right__link} to='/'><BsBoxSeam className={c.bottom__header__right__icons} /> <p>Буюртма ҳолати</p></Link>
            <Link className={c.bottom__header__right__link} to='/' onMouseLeave={handleLogoutDisable}  onClick={localStorage.getItem("userName")?handleLogout:handleLoginOpen}><FaRegUser className={c.bottom__header__right__icons}  /><p className={c.useName_p}>{localStorage.getItem("userName")?localStorage.getItem("userName") :"Кириш"} 
            {isuseLogout &&(
            <div className={c.log__out__wrapper}>
              <p className={c.logout__p} onMouseLeave={handleLogoutDisable} onClick={handleLogoutt}>Log Out</p>
            </div>
          )}
            </p></Link>
            <Link className={c.bottom__header__right__link} to='/'><GiScales className={c.bottom__header__right__icons} /><p>Таққослаш</p></Link>
            <Link className={c.bottom__header__right__link} to='/'><BsHeart className={c.bottom__header__right__icons} /><p>Севимлилар</p></Link>
            <Link className={c.bottom__header__right__link} onClick={handleModalOpen} to='/'><SlBasket className={c.bottom__header__right__icons} /><p>Саватча</p></Link>
          </div>
          
        </div>
      </div>
      <div className={c.bottom__header__items}>
        <div className={c.bottom__header__items__container}>
          <div className={c.bottom__header__items__Category} onClick={isCatalog? handleCatologdisable : handleCatologClick} >
            <img src={Category} alt="" />
            <p>Каталог</p>
          </div>
          {isCatalog && (
            <div className={c.bottom__header__items__Category__card__wrapper}>
              <div className={c.category__menu__wrapper} >
              {
              Categorymenujson.map(categoryMenu =>
                <div id={categoryMenu.id} className={c.categorymenu__list__wrapper}  onMouseUp={handleCategoryOpendisable}>
                  <img className={c.categoryMenu__list__left__icon} src={categoryMenu.img} alt="" /> 
                  <li onMouseEnter={handleCategoryOpenClick} onMouseLeave={handleCategoryOpendisable} key={uuid}> {categoryMenu.title}</li> 
                  <img className={c.categoryMenu__list__right__icon} src={categoryMenu.imgRight} alt="" />
                </div>
              )}
              </div>
              {isCategoryOpen &&(
              <div className={c.bottom__header__category__right__wrapper}>
                <p className={c.category__open__title}>
                  {localStorage.getItem("category__open")}
                </p>
                <ul className={c.categoy__open__wrapper__ul}>
                  {
                    Categorymenuopenjson.map(categoryopenlist =>
                      categoryopenlist.one.map(categoryopenOne =>
                        categoryopenOne.one.map(categoryOpenOneList=>
                          <li key={uuid} className={c.category__open__lists}>
                            {categoryOpenOneList.title}
                          </li> 
                        )
                      )
                    )
                  }
                </ul>
                <ul className={c.categoy__open__wrapper__ul}>
                  {
                    Categorymenuopenjson.map(categoryopenlist =>
                      categoryopenlist.one.map(categoryopenOne =>
                        categoryopenOne.two.map(categoryOpenOneList=>
                          <li key={uuid} className={c.category__open__lists}>
                            {categoryOpenOneList.title}
                          </li> 
                        )
                      )
                    )
                  }
                </ul>
                <ul className={c.categoy__open__wrapper__ul}>
                  {
                    Categorymenuopenjson.map(categoryopenlist =>
                      categoryopenlist.one.map(categoryopenOne =>
                        categoryopenOne.three.map(categoryOpenOneList=>
                          <li key={uuid} className={c.category__open__lists}>
                            {categoryOpenOneList.title}
                          </li> 
                        )
                      )
                    )
                  }
                </ul>
                <ul className={c.categoy__open__wrapper__ul}>
                  {
                    Categorymenuopenjson.map(categoryopenlist =>
                      categoryopenlist.one.map(categoryopenOne =>
                        categoryopenOne.five.map(categoryOpenOneList=>
                          <li key={uuid} className={c.category__open__lists}>
                            {categoryOpenOneList.title}
                          </li> 
                        )
                      )
                    )
                  }
                </ul>
              </div>
              )
              }
              
            </div>
          )}
          <div className={c.bottom__header__items__item__two}>
              <AiFillThunderbolt className={c.bottom__header__items__item__two__icon}/> <p>САРИҚ ҲАФТА</p>
          </div>
          <div className={c.bottom__header__items__item__three}>
            <HiFire className={c.bottom__header__items__item__three__icon} /> <p>AКЦИЯЛАР</p>
          </div>
          <div className={c.bottom__header__items__item__three}>
            <p>
            СМАРТФОНЛАР
            </p>
          </div>
          <div className={c.bottom__header__items__item__three}>
            <p>
            МУЗЛАТГИЧЛАР
            </p>
          </div>
          <div className={c.bottom__header__items__item__three}>
            <p>
            ЧАНГЮТКИЧЛАР
            </p>
          </div>
          <div className={c.bottom__header__items__item__three}>
            <p>
            ХАВО СОВУТГИЧЛАР
            </p>
          </div>
          <div className={c.bottom__header__items__item__three}>
            <p>
            ТЕЛЕВИЗОРЛАР
            </p>
          </div>
          <div className={`${c.bottom__header__items__item__three} ${c.last}`}>
            <p>
            БАРЧА КАТЕГОРИЯЛАР
            </p>
          </div>
        </div>
      </div>
    </header>
   
    {isModal && <Savatcha modalClose={handModalClose} />}
    {isLoginModal && <Login loginClose={handleLoginClose} />}
    </>
  )
}

export default Header