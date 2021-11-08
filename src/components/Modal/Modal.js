import './Modal.css'
import Close from '../../assets/modalClose.svg';


const Modal = props => {

  return (
    <div className={`modal_wrapper ${props.isOpened ? 'modal_wrapper_open' : 'modal_wrapper_close'}`} style={{...props.style}}>
      <div className='modal_content'>
        <div className='modal_body'>
          <h2>{props.title}</h2>
          <hr />
          {props.children}
        </div>
        <button className='modal_close' onClick={props.onModalClose}><img src={Close} /></button>
      </div>
    </div>
  )
}

export default Modal