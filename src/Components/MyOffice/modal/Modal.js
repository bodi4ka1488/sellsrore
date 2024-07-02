import React, { useEffect, useState } from 'react';
import "./Modal.css"
import style from "../styles.module.css"
import { useDispatch } from 'react-redux';
import { setMainName, setMainSurname, setMainEmail, setIsLogin, setMainPassword } from '../../reducers/authDataReducer';
import {setImageUrl} from '../../reducers/imageUploadReducer'
// import { GoogleLogin } from '@react-oauth/google';

import {useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';
// import jwt_decode from "jwt-decode";
const Modal = ({ active, setActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя неможет быть пустым");
  const [surnameError, setSurnameError] = useState("Фамилия не может быть пустая");

  const dispatch = useDispatch()
  const [inputType, setinputType] = useState("password");
  const [eyeVal, setEyeVal] = useState(false);
  const [eye, setEye] = useState("https://cdn-icons-png.flaticon.com/512/7615/7615155.png")

  const onBlurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;

      case 'password':
        setPasswordDirty(true);
        break;

      case 'name':
        setNameDirty(true);
        break;

      case 'surname':
        setSurnameDirty(true);
        break;
    };
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл');
    } else {
      setEmailError('');
    };
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 12) {
      setPasswordError('Пароль должен быть длиннее 4 и меньше 12');
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      };
    } else {
      setPasswordError('')
    };
  };

  const surnameHandler = (e) => {
    setSurname(e.target.value);
    if (e.target.value.length < 0) {
      setNameError('Фамилия не может быть пустая');
      if (!e.target.value) {
        setSurnameError('Фамилия не может быть пустая')
      };
    } else {
      setSurnameError('')
    };
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 0) {
      setNameError('Имя неможет быть пустым');
      if (!e.target.value) {
        setNameError('Имя неможет быть пустым')
      };
    } else {
      setNameError('')
    };
  };
  const preventHandler = (e) => {
    e.preventDefault()
  }
  function setUserData(name1, surname1, password1, islogin) {
    dispatch(setMainName(name1));
    dispatch(setMainSurname(surname1));
    dispatch(setIsLogin(islogin));
    dispatch(setMainPassword(password1));
  }
  // const login = useGoogleLogin({
  //   onSuccess: async response => {
  //     try{
  //       const data = await axios.get("http://www.googleapis.com/oauth/v3/userinfo",{
  //       headers: {
  //         "Authorezation": `Bearer ${response.access_token}`
  //       }
  //     })
  //     console.log(data)
  //     } catch(err){
  //       console.log(err)
  //     }
     
  //   }

  // });

  const login = useGoogleLogin({
    onSuccess: async respose => {
        try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${respose.access_token}`
                }
            })
            
              console.log(res.data)
            // setEmail(res.data.email)
            // setName(res.data.given_name)
            // setSurname(res.data.family_name)
            dispatch(setMainName(res.data.given_name));
            dispatch(setMainSurname(res.data.family_name));
            dispatch(setMainEmail(res.data.email));
            dispatch(setIsLogin(true));
            dispatch(setImageUrl(res.data.picture))
            setActive(false)
        } catch (err) {
            console.log(err)
        }
    }
});
 const setVisiblePassword = () =>{
  setEyeVal(!eyeVal)
  eyeVal ?setEye("https://cdn-icons-png.flaticon.com/512/7615/7615155.png") :  setEye("https://cdn-icons-png.flaticon.com/512/159/159604.png");
  eyeVal ?setinputType("password") :  setinputType("text");
 }

  useEffect(() => {
    if (emailError || passwordError || nameError || surnameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    };
  }, [emailError, passwordError, nameError, surnameError]);
  return (
    <div className={active ? "modal active" : "modal"} >
      <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
        <form onClick={(e) => preventHandler(e)} >
          <h1 className={style.test}>Регистрация</h1>
          {(emailDirty && emailError) && <div className={style.error}>{emailError}</div>}
          <input value={email} onChange={(e) => emailHandler(e)} onBlur={(e) => onBlurHandler(e)} className="modal-input" name='email' type="text" placeholder='Введите свой email' />

          {(passwordDirty && passwordError) && <div className={style.error}>{passwordError}</div>}
          <div className='register-password'>
            <input type={inputType} id="password-input" value={password} onChange={(e) => passwordHandler(e)} onBlur={(e) => onBlurHandler(e)} className="modal-input" name='password' placeholder='Введите свой пароль' />
            <img src={eye} onClick={() =>  setVisiblePassword()} height='45px' width='45px' alt='EyeImage'  className="password-control"></img>
          </div>
          
    
          {(nameDirty && nameError) && <div className={style.error}>{nameError}</div>}
          <input value={name} onChange={(e) => nameHandler(e)} onBlur={(e) => onBlurHandler(e)} className="modal-input" name='name' type="text" placeholder='Введите свое имя' />

          {(surnameDirty && surnameError) && <div className={style.error}>{surnameError}</div>}
          <input value={surname} onChange={(e) => surnameHandler(e)} onBlur={(e) => onBlurHandler(e)} className="modal-input" name='surname'  type="text" placeholder='Введите свою фамилию' />

          {/* <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse.credential);
                var decoded = jwt_decode(credentialResponse.credential);
                console.log(decoded)
              }}
              onError={() => {
                console.log('Login Failed');
              }}
          />; */}
          <button onClick={login} className='google-button'><img src='https://www.pngplay.com/wp-content/uploads/12/Google-PNG-Photos.png' height='25px' width='25px' alt='GoogleImage'></img> Продолжить с Гугла</button>
          <button onClick={() => {setUserData(name, surname, password, true); setActive(false)}} className="submit" disabled={!formValid} type='submit'>Регистрация</button>
          <button onClick={() => setActive(false)} className="submit" type='submit'>Отменить регистрацию</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;