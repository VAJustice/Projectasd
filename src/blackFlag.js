import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from "react-router-dom";

import Error from "./components/error";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import App from "./App";
import Main from "./components/Main/Main";


function BlackFlag() {
  // const blackFlag = JSON.parse(localStorage.getItem('isUser'));
  const [blackFlag, setBlackFlag] = useState(localStorage.getItem('isUser') === 'true')
  console.log('blackFlagblackFlagblackFlag', blackFlag);

  return (
    <Router>
      {
        blackFlag ?
          <Switch>
            <Route exact path="/login" render={() => <Login blackFlag={blackFlag} setBlackFlag={setBlackFlag}/>}/>
            <Route path="/main" render={() => <App setBlackFlag={setBlackFlag} blackFlag={blackFlag}/>}/>
            <Route component={Error}/>
          </Switch>
          :
          <Switch>
            <Route exact path="/login" render={() => <Login blackFlag={blackFlag} setBlackFlag={setBlackFlag}/>}/>
            <Route path="/registration" render={() => <Registration blackFlag={blackFlag}/>}/>
            <Redirect to='/login'/>
            <Route component={Error}/>
          </Switch>
    }
    </Router>
  );
}


export default BlackFlag;