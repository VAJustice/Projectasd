import create from "../../assets/createNew.svg";
import React from "react";

export const Sales = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='namedMain'>
          <span className='textFirst'><p>My sales</p></span>
          <span className='textTwo'>Sales table</span>
        </div>
        <div className='mainCreate'>
          <button className='button'>
            <img src={create} /><span className='buttonText'>Create a product</span>
          </button>
        </div>
      </div>

      <div>

      </div>

    </React.Fragment>
  );
}
