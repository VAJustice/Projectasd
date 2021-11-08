import React, {useEffect, useState} from 'react';
import login from '../../assets/login.png'
import './Login.css';

import {BrowserRouter as Router, NavLink, Redirect, useHistory} from "react-router-dom";

function Login({setBlackFlag, blackFlag}) {

  const [isUrl, setIsUrl] = useState(false);
  const [isLoginObject, setIsLoginObject] = useState({});
  const handleChange = (event) => {
    setIsLoginObject((prevState) => (
      {...prevState, [event.target.name]: event.target.value}

    ))}
  let is,
      isUseEffect = false,
      storage = JSON.parse(localStorage.getItem('user'));

  function  setInfo() {
    isUseEffect = true;
    if (is){
      console.log('DA');
      localStorage.setItem('isUser', JSON.stringify(Boolean(1)));
      setBlackFlag(true);
    } else setIsUrl(false);
  }

  useEffect(() => {
    // for (let i in storage) {
    //   console.log('111 '+ i+' 222 ' +storage[i]);
    // }
    // console.log('isLoginObject.loginEmail '+isLoginObject.loginEmail);console.log('storage.enterPass '+storage.emailName);
      if (isLoginObject.loginEmail === storage.emailName && isLoginObject.loginPass === storage.enterPass ){
        setIsUrl(true);
        console.log('DA2 ');
        is = true;

        console.log("Black Flag = "+localStorage.getItem('isUser'));
      } else {
        setIsUrl(false);
        is = false;
        console.log("Black Flag = "+localStorage.getItem('isUser'));
      }
  });

  if(blackFlag) {
    return <Redirect to='/main' />
  }

  if(!blackFlag) {
    return (
      <div className='loginContainer'>
        <div className='loginContent'>
          <div className="row">
            <div className="column">
            <span className='sign'>
              <p>Sign in</p>
            </span>
            </div>
          </div>
          <div className="row">
            <div className="column">
            <span>
              <p>Email</p>
            </span>
              <input name='loginEmail' onChange={handleChange} placeholder='Email'/>
            </div>
          </div>
          <div className="row">
            <div className="column">
            <span>
              <p>Password</p>
            </span>
              <input name='loginPass' onChange={handleChange} placeholder='Enter password'/>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <NavLink to={isUrl ? '/main' : '/login'}>
                <button className='button' onClick={setInfo}>
                  <span className='buttonText'>Login in</span>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="column forgotPass">
              <p>
                <NavLink to='/registration'>Forgot password?</NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className='loginImage'>
          <img src={login}></img>
        </div>
      </div>
    );
  }
}

export default Login;