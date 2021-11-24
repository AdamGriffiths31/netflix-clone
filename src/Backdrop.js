import React from 'react'
import './Backdrop.scss'
const backdrop = ({ toggleBackdrop, show }) =>
  show ? <div onClick={toggleBackdrop} className='backdrop'></div> : null

export default backdrop
