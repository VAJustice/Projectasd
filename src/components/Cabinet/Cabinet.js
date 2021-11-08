import create from "../../assets/createNew.svg";
import './Cabinet.css';
import React from "react";

function Cabinet() {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='namedMain'>
          <span className='textFirst'><p>Personal Cabinet</p></span>
          <span className='textTwo'>Information about your account</span>
        </div>
        <div className='mainCreate'>
          <button className='button'>
            <img src={create} /><span className='buttonText'>Create a product</span>
          </button>
        </div>
      </div><hr />

      <div className='conteinerCabinet'>
        <div className="row">
          <div className="column">
            <p>First name</p>
            <input></input>
          </div>
          <div className="column marginCab">
            <p>Last name</p>
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p>Company name</p>
            <input></input>
          </div>
          <div className="column marginCab">
            <p>Product Category</p>
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="column wid">
            <p>Address</p>
            <input></input>
          </div>
          <div className="column">

          </div>

        </div>
        <div className="row">
          <div className="column">
            <p>Enter old password</p>
            <input type='password' placeholder='Enter password'></input>
          </div>
          <div className="column marginCab">
            <p>Enter a new password</p>
            <input type='password' placeholder='Enter a new password'></input>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <button className='button'>
              <span className='buttonText'>Save changes</span>
            </button>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Cabinet;