import React from 'react'
import Sicon4 from '../Assets/sicon4.png'
import Sicon5 from '../Assets/sicon5.png'
import Sicon6 from '../Assets/sicon6.png'
import playstore from '../Assets/playstore.png'
import appstore from '../Assets/apple.png'
import './homefooter.css'
import {BsArrowDown} from 'react-icons/bs'
const HomeFooter = () => {
    return (
        <div className='homefooter'>
            <div className='homebtns'>
                <button className='homebtn'><img src={appstore} /> <span>APP STORE</span></button>
                <button className='homebtn'><img src={playstore} /> <span>Google PLay</span></button>
            </div>
            <div className='homefooterarrow'><BsArrowDown/></div>
            <div className='homerightfooter'>
                <span className='homepara'>Broken Services by Cash App Investing LLC, member FINRA. See our BrokerCheck.
                    Investing involves risks; you may loose money. BItcoin trading offered by Cash App.
                </span>
                <span className='homeicons'>
                    <span className='homesicon'>
                        <img src={Sicon4} />
                    </span>
                    <span className='homesicon'>
                        <img src={Sicon5} />
                    </span>
                    <span className='homesicon'>
                        <img src={Sicon6} />
                    </span>
                </span>
            </div>
        </div>
    )
}

export default HomeFooter