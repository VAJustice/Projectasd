import './App.css';
import Header from './components/Header/Header';
import Products from './components/Product/Product';
import {Sales} from './components/Sales/Sales';
import Cabinet from "./components/Cabinet/Cabinet";
import Main from "./components/Main/Main";
import Error from "./components/error";
import Login from "./components/Login/Login";
import home from './assets/home.svg';
import doc from './assets/doc.svg';
import percent from './assets/percent.svg';
import user from './assets/user.svg';
import log from './assets/log.svg';
import Modal from './components/Modal/Modal'


import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useHistory, Redirect} from "react-router-dom";


function App({setBlackFlag}) {

  const [modal, setModal] = useState({
    modalMain:false,
    modalProduct:false,
    modalSales:false
  })

  // const [modal2,setModal2] = useState(false);
  let history = useHistory();
  function handleClick() {
    history.push('/login');
    localStorage.setItem('isUser', JSON.stringify(Boolean(0)));
    setBlackFlag(false)
  }

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
            <NavLink to="/login" onClick={handleClick} className='link' activeClassName='logOut'>
              <div className='link-img'><img src={log} alt="log"/></div>
              <div className='link-text'>
                Login page
              </div>
            </NavLink>
          </div>
        </div>

        <div className='content'>

            <Switch>
              <Route path="/main"><Main setModal={setModal} /></Route>
              <Route path="/products"><Products setModal={setModal} /></Route>
              <Route path="/sales"><Sales setModal={setModal} /></Route>
              <Route path="/cabinet" component={Cabinet} />
              <Route component={Error} />
            </Switch>

        </div>
      </div>


      <Modal
        title={'Creating a product'}
        isOpened={modal.modalMain}
        onModalClose={() => setModal({modalMain:false})}
      >
        <div className="row">
          <div className="column">
            <input placeholder='Store' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Price' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Product name' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Product Category' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Quantity of goods' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Weight / Volume of one item' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <NavLink to="/app/main">
              <button className='button'>
                <span className='buttonText'>Add Product</span>
              </button>
            </NavLink>
          </div>
        </div>
      </Modal>
      <Modal
        title={'Sell the product'}
        isOpened={modal.modalProduct}
        onModalClose={() => setModal({modalProduct:false})}
      >
        <div className="row">
          <div className="column">
            <input placeholder='Number of product' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Date of sale' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <NavLink to="/app/main">
              <button className='button'>
                <span className='buttonText'>Add Product</span>
              </button>
            </NavLink>
          </div>
        </div>
      </Modal>
      <Modal
        title={'Editing a product'}
        isOpened={modal.modalSales}
        onModalClose={() => setModal({modalSales:false})}
      >
        <div className="row">
          <div className="column">
            <input placeholder='Store' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Price' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Product name' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Product Category' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Quantity of goods' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input placeholder='Weight / Volume of one item' />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <NavLink to="/app/main">
              <button className='button'>
                <span className='buttonText'>Save changes</span>
              </button>
            </NavLink>
          </div>
        </div>
      </Modal>
    </Router>

  );
}

export default App;
