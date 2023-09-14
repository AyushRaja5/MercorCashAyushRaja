import React from 'react'
import Sicon4 from '../Assets/sicon4.png'
import Sicon5 from '../Assets/sicon5.png'
import Sicon6 from '../Assets/sicon6.png'
import playstore from '../Assets/playstore.png'
import appstore from '../Assets/apple.png'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='btns'>
                <button className='btn'><img src={appstore} /> <span>APP STORE</span></button>
                <button className='btn'><img src={playstore} /> <span>Google PLay</span></button>
            </div>
            <div className='rightfooter'>
                <span className='para'>Broken Services by Cash App Investing LLC, member FINRA. See our BrokerCheck.
                    Investing involves risks; you may loose money. BItcoin trading offered by Cash App.
                </span>
                <span className='icons'>
                    <span className='sicon'>
                        <img src={Sicon4} />
                    </span>
                    <span className='sicon'>
                        <img src={Sicon5} />
                    </span>
                    <span className='sicon'>
                        <img src={Sicon6} />
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Footer