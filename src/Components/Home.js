import React, {useState} from 'react';
import './home.css';
import Header from './Header';
import phoneimg from '../Assets/homePhone.svg';
import HomeFooter from './HomeFooter';
import cube from '../Assets/homeCube.svg'
import cubes from '../Assets/homeCubes.svg'
import pillars from '../Assets/homePillar.svg'
import stairs from '../Assets/homeStairs.svg'
import Menu from './Menu';
const Home = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Function to toggle the visibility of the Menu component
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <div className='home'>
       <Header toggleMenu={toggleMenu}/>
       {isMenuVisible && <Menu />}
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
