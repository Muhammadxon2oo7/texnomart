import React,{useState} from 'react'
import c from "./Kirish.module.scss"
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase/config';
const Kirish = (props) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const [possibleError, setPossibleError] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const use__name =localStorage.getItem("useName")
            localStorage.setItem("userName",use__name)
            props.logComplate()
            console.log(user);
            
        })
        .catch((error) => {
          var errorCode = error.code;
          console.log(errorCode) // todo notfound email auth/user-not-found
          var errorMessage = error.message;
          if(errorCode === "auth/user-not-found"){
            setPossibleError("bunday email ro`yxatdan o`tmagan")
            let emaill=document.querySelector("#email")
            emaill.value ="parol 6 tadan kam bo`lmasun"
            emaill.addEventListener("click",()=>{
              setPossibleError("")
              emaill.value=''
            })
          }
           if(errorCode === "auth/wrong-password"){
            setPossibleError("notog`ri parol kiritdingiz")
            let parol=document.querySelector("#parol")
            
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
    <div className={c.kirish}>
    {possibleError.length >1?
      <div className={c.rectangle}  id="reg">
        <div className={c.notificationtext}>
          <span>{possibleError}</span>
        </div>
      </div> :<></>}
      <form action="" className={c.kirish__form} >
        <fieldset className={c.kirish__email__fieldset}>
          <legend className={c.email__label}>Email</legend>
          <input id='email' className={c.login__email} type="email" required onChange={(e)=>setEmail(e.target.value)} />
        </fieldset>
        <fieldset className={c.kirish__email__fieldset}>
          <legend className={c.email__label}>Password</legend>
          <input id='parol' className={c.login__email} type="password" required  onChange={(e)=>setPassword(e.target.value)} />
        </fieldset>
        <button onClick={onLogin} className={c.login__btn}>Kirish</button>
      </form>
    </div>
  )
}

export default Kirish