import React from 'react'
import {useState} from 'react';
import { auth } from '../../firebase/config';
import { useHistory} from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {AiOutlineCloseCircle} from "react-icons/ai"
import c from "./Register.module.scss"
const Register = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [possibleError, setPossibleError] = useState("");
  const [iscomplate,setiscomplate]=useState(false)
  const complateclick =()=>{
    console.log("salom")
    setiscomplate(true)
    var x = document.getElementsByClassName("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); },0);
  }
  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          props.regComplate(true)
          complateclick()
         
      })
      
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
         if(errorCode === "auth/email-already-in-use"){
          setPossibleError("bunday email ro`yxatdan o`tgan")
          let emaill=document.querySelector("#email")
          emaill.value ="bu yerga boshqa email kiriting"
          emaill.addEventListener("click",()=>{
            setPossibleError("")
            emaill.value=''
          })
        }if(errorCode === "auth/weak-password"){
          setPossibleError("iltimos parol 6 tadan kam bo`lmasun")
          let parol=document.querySelector("#parol")
          parol.value ="parol 6 tadan kam bo`lmasun"
          parol.addEventListener("click",()=>{
            setPossibleError("")
            parol.value=''
          })
        }if(errorCode === "auth/invalid-email"){
          setPossibleError("email xato ")
          
          let emaill=document.querySelector("#email")
          emaill.value ="bu yerga boshqa email kiriting"
          emaill.addEventListener("click",()=>{
            setPossibleError("")
            emaill.value=''
          })
        }
      
      });
      

 
  }
  
  
  
  
  
  return (
    <div  className={c.register}>
      {possibleError.length >1?
      <div className={c.rectangle}  id="reg">
        <div className={c.notificationtext}>
          <span>{possibleError}</span>
        </div>
      </div> :<></>}
      
      <form className={c.register__form}>
        <fieldset className={c.register__email__fieldset}>
          <legend className={c.email__label}>Email</legend>
          <input  id='email' className={c.register__email}type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
        </fieldset>
        <fieldset className={c.register__email__fieldset}>
          <legend className={c.email__label}>UseName</legend>
          <input className={c.register__email} type="text" onChange={(e)=>{localStorage.setItem("useName",e.target.value)}} />
        </fieldset>
        <fieldset className={c.register__email__fieldset}>
          <legend className={c.email__label}>Password</legend>
          <input id='parol' className={c.register__email}  type="password" value={password} required minLength={8} onChange={(e) => setPassword(e.target.value)}  />
        </fieldset>
        <button className={c.register__btn} type="submit" onClick={onSubmit}>Рўйхатдан ўтиш</button>
      </form>
    </div>
  )
}

export default Register