import './Main.css';
import create from '../../assets/createNew.svg';
import React, {useState} from 'react';
import Modal from '../Modal/Modal'

function Main(props) {

    // const [modal, setModal] = useState({
    //   modal1:false,
    //   modal2:false
    // })

  return (
    <React.Fragment>

    <div className='header'>
      <div className='namedMain'>
        <span className='textFirst'><p>Sales statistics</p></span>
        <span className='textTwo'>Welcome to CRM dashboard</span>
      </div>
      <div className='mainCreate'>
          <button className='button' onClick={() => props.setModal({ modalMain:true})}>
            <img src={create} /><span className='buttonText'>Create a product</span>
          </button>
      </div>
    </div><hr />

      <div className='container'>
          <div className=' item-a'></div>
          <div className=' item-b'></div>
          <div className=' item-c'></div>
      </div>
    </React.Fragment>
  );
}

export default Main;