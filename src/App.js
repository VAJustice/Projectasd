import './App.css';
import Header from './components/Header/Header';
import Products from './components/Product/Product';
import {Sales} from './components/Sales/Sales';
import Cabinet from "./components/Cabinet/Cabinet";
import Main from "./components/Main/Main";
import Error from "./components/error";
import Login from "./components/login";
import home from './assets/home.svg';
import doc from './assets/doc.svg';
import percent from './assets/percent.svg';
import user from './assets/user.svg';
import log from './assets/log.svg';

import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className='center'>
        <div className='navbar'>
          <div className='logoNav'>
            <div className='logoContainer'>
              <div className='logoJustice'>
                <span>JUSTICE</span>
              </div>
              <div className='logoCRM'>
                <span>CRM</span>
              </div>
            </div>
          </div>

          <div className='panel'>
          {/*<Header />*/}

              <NavLink to="/main" className='link' activeClassName="active-link">
                <div className='link-img'><img src={home} alt="home"/></div>
                <div className='link-text'>
                  Main page
                </div>
              </NavLink>
              <NavLink to="/products" className='link' activeClassName="active-link">
                <div className='link-img'><img src={doc} alt="doc"/></div>
                <div className='link-text'>
                  My Products
                </div>
              </NavLink>
              <NavLink to="/sales" className='link' activeClassName="active-link">
                <div className='link-img'><img src={percent} alt="percent"/></div>
                <div className='link-text'>
                  My Sales
                </div>
              </NavLink>
              <NavLink to="/cabinet" className='link' activeClassName="active-link">
                <div className='link-img'><img src={user} alt="user"/></div>
                <div className='link-text'>
                  Personal Cabinet
                </div>
              </NavLink>
          </div>
          <hr />
          <div>
            <NavLink to="/login" className='link' activeClassName='logOut'>
              <div className='link-img'><img src={log} alt="log"/></div>
              <div className='link-text'>
                Login page
              </div>
            </NavLink>
          </div>
        </div>

        <div className='content'>

            <Switch>
              <Route path="/main" component={Main} />
              <Route path="/products" component={Products} />
              <Route path="/sales" component={Sales} />
              <Route path="/cabinet" component={Cabinet} />
              <Route component={Error} />
            </Switch>

        </div>
      </div>

    </Router>

  );
}

export default App;
