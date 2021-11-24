import React from 'react'
import './Modal.scss'
import Backdrop from './Backdrop'

const Modal = ({ show, modalClosed, children, backgroundImage }) => {
    console.log(show)
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backgroundImage})`,
  }

  return (
    <div>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={backgroundStyle}
        className={show ? 'modal show' : 'modal hide'}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
