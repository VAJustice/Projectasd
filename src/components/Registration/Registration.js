import React, {useState, useEffect} from 'react';
import login from '../../assets/login.png'
import './Registration.css';

import {BrowserRouter as Router, NavLink} from "react-router-dom";

function Registration({blackFlag}) {

  const [isUrl, setIsUrl] = useState(false);

  const [loginObject, setLoginObject] = useState({});
  const handleChange = (event) => {
    setLoginObject((prevState) => (
      {...prevState, [event.target.name]: event.target.value}

  ))}

  let is;

// a =loginObject.email.includes('@');

  useEffect(() => {
    for (let i in loginObject){
      if (loginObject[i].toString().length > 3 && loginObject[i] != undefined && loginObject.enterPass === loginObject.repeatPass){
        setIsUrl(true);
        console.log('DA2 ');
        is = true;
      } else {
        setIsUrl(false);
        is = false;
      }
    }
  });

  function  setInfo() {
    if (is){
      localStorage.setItem('user', JSON.stringify(loginObject));
      let e = JSON.parse(localStorage.getItem('user'))
      for (let i in e) {
        console.log('111 '+ i+' 222 ' +e[i]);
      }

      console.log('DA');
    } else setIsUrl(false);

  }

  return (
    <div className='registrationContainer'>
      <div className='registrationContent'>
        <div className="row">
          <div className="column">
            <span className='create'>
              <p>Create an account</p>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span>
              <p>First name</p>
            </span>
            <input name='firstName' onChange={handleChange} placeholder='First name' />
          </div>
          <div className="column margin">
            <span>
              <p>Last name</p>
            </span>
            <input name='lastName' onChange={handleChange} placeholder='Last name' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span>
              <p>Company name</p>
            </span>
            <input name='companyName' onChange={handleChange} placeholder='Company name' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span>
              <p>Email</p>
            </span>
            <input name='emailName' type='email' onChange={handleChange} placeholder='Email' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span>
              <p>Password</p>
            </span>
            <input name='enterPass' onChange={handleChange} placeholder='Enter password' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span>
              <p>Repeat password</p>
            </span>
            <input name='repeatPass' onChange={handleChange} placeholder='Repeat password' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <NavLink to={isUrl ? '/app/main' : '/registration'}>
              <button className='button' onClick={setInfo}>
                <span className='buttonText'>Create account</span>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="column alreadyAcc">
            <p>
              Already have an account?<NavLink to='/login'> Log in!</NavLink>
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

export default Registration;