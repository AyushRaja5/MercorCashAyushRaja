import React, { useState } from 'react'
import './header.css'
import eye from '../Assets/eyeButton.svg'
import dollaricon from '../Assets/cashAppLogo.svg'
const Header = ({ toggleMenu }) => {
  return (
    <div className='header'>
      <div className='dollar '>
        <img src={dollaricon} onClick={toggleMenu}/>
      </div>
      <div className='menu'>
        <span>Sign In</span>
        <span>Legal</span>
        <span>Licenses</span>
        <span>Security</span>
        <span>Careers</span>
        <span>Press</span>
        <span>Support</span>
        <span>Status</span>
        <span>Codeblog</span>
      </div> 
      <div className='eye'>
      <img src={eye} alt="Eye Icon" onClick={toggleMenu}/>
      </div>
    </div>
  )
}

export default Header