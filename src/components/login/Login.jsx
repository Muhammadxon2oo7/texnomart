import React from 'react'
import c from "./Login.module.scss"
import { CgClose } from "react-icons/cg"
import Kirish from './Kirish'
import Register from './Register'
import { useState } from 'react'

const Login = (props) => {
    const [isLoginWay,setIsLoginWay]=useState(false)
    const [isRegWay,setIsRegWay]=useState(false)
    const handleLoginClick =()=>{
        setIsLoginWay(true)
        setIsRegWay(false)
    }
    const handleRegClick = ()=>{
        setIsRegWay(true)
        setIsLoginWay(false)
    }
  return (
    <div className={c.Login__wrapper} >
      <div className={c.Login__bg} onClick={props.loginClose}></div>
      <div className={c.Login__card}>
        <div onClick={props.loginClose} className={c.closeBtn__wrapper}>
          <CgClose />
        </div>
        <div className={c.Choose__way}>
            <input type="radio" name='1' className={c.Login__way} id="log"/>
                <label className={c.log} onClick={handleLoginClick} for="log">Кириш</label>
            <input type="radio" name='1' id='reg'  className={c.register__way}/>
                <label  className={c.reg} for="reg" onClick={handleRegClick}>Рўйхатдан ўтиш</label>

            {isLoginWay && <Kirish logComplate={props.loginClose} />}
            {isRegWay && <Register isLoginWayy={isLoginWay} regComplate={handleLoginClick} />}
        </div>
        {/* <Kirish/>
        <Register/> */}
      </div>
    </div>
  )
}

export default Login