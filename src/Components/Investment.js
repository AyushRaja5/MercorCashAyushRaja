import React from 'react'
import './investment.css'
import floor from '../Assets/floor.png';
import leftfloor from '../Assets/graph.png'
import rightfloor from '../Assets/investinggraph2.png'
import stocksmobile from '../Assets/stocks.png'
import bitcoinmobile from '../Assets/bitcoin.png'
import Footer from './Footer';
const Investment = () => {
    return (
        <div className='maininvesting'>
            <div className='investingtitle'>Investing</div>
            <div className='mobiles'>
                <div className='stocksinfo'>
                    <div className='stockstitle'>Stocks</div>
                    <p className='stockspara'>Whether you're an expert or just getting started.
                        Cash App is the fastest and most accicble way to
                        to invest in stocks. Start now with as little as 1$.
                    </p>
                </div>
                <div className='stocks'>
                    <img src={stocksmobile} alt="Stocks Mobile" />
                </div>

                <div className='bitcoins'>
                    <img src={bitcoinmobile} alt="Bitcoins Mobile" />
                </div>
                <div className='bitcoinsinfo'>
                    <div className='bitcoinstitle'>Bitcoin</div>
                    <p className='bitcoinspara'>
                        Cash App is the fastest way to convert dollars to bitcoin.
                        From your home screen, 6 taps are all it takes to stack sats,
                        buy an entire bitcoin, or just see what it's all about.
                    </p>
                </div>
            </div>
            <div className='investment'>
                <div className='floorclass'>
                    <img className='leftfloor' src={leftfloor} alt="Left Floor" />
                    <img className='floor' src={floor} alt="Floor" />
                    <img className='rightfloor' src={rightfloor} alt="Right Floor" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Investment