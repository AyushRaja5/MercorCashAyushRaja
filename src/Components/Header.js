import React, {useState} from 'react'
import './header.css'
import eye from '../Assets/eyeButton.svg'
import dollaricon from '../Assets/cashAppLogo.svg'
const Header = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };
  return (
    <div className='header'>
      <div className='dollar '>
        <img src={dollaricon}  onClick={toggleHamburgerMenu}/>
      </div>
      <div className={`menu ${showHamburgerMenu ? 'hide' : ''}`}>
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
      <div className={`eye ${showHamburgerMenu ? 'hide' : ''}`}>
        <img src={eye} alt="Eye Icon" onClick={toggleHamburgerMenu} />
      </div>
      <div className={`hamburger-items ${showHamburgerMenu ? 'show' : ''}`}>
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
    </div>
  )
}

export default Header