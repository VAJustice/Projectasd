import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlackFlag from "./blackFlag";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from "react-router-dom";
import Main from "./components/Main/Main";
import Products from "./components/Product/Product";
import {Sales} from "./components/Sales/Sales";
import Cabinet from "./components/Cabinet/Cabinet";
import Error from "./components/error";



ReactDOM.render(
  <React.StrictMode>

  <BlackFlag />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
