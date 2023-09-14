import React, {useState} from 'react';
import './home.css';
import Header from './Header';
import phoneimg from '../Assets/homePhone.svg';
import HomeFooter from './HomeFooter';
import cube from '../Assets/homeCube.svg'
import cubes from '../Assets/homeCubes.svg'
import pillars from '../Assets/homePillar.svg'
import stairs from '../Assets/homeStairs.svg'

const Home = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };
  return (
    <div className='home'>
       <Header toggleHamburgerMenu={toggleHamburgerMenu}  style={{zIndex:9999}}/>
      <div className='homecontent'>
        <div className='homeuppar'>
          <img src={cube}  className='cubeimg'/>
          <img src={stairs}  className='stairsimg'/>
        </div>
        <div className='homebichka' >
          <span className='cash'>CASH</span>
          <span className='phone-image'>
            <img src={phoneimg} alt="Phone" className="phoneimg"/>
          </span>
          <span className='app'>APP</span>
        </div>
        <div className='homeniche' >
          <img src={cubes}  className='cubesimg'/>
          <img src={pillars}  className='pillarsimg'/>
        </div>
        <HomeFooter className='homefooter'/>
      </div>
    </div>
  );
}

export default Home;
