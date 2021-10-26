import create from "../../assets/createNew.svg";
import './Product.css';
import React from "react";

function Products() {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='namedMain'>
          <span className='textFirst'><p>My product</p></span>
          <span className='textTwo'>Product table</span>
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

export default Products;