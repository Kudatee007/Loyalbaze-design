import React from 'react'
import './Loyal.css'
import loyalBlaze from './img/Frame 1000004057.svg'

const Loyal = () => {
  return (
    <div className='loyal1'>
        <div className='nav'>
            <img src={loyalBlaze} alt="" />
            <button className='btnRequest'>Request a call</button>
        </div>
    </div>
  )
}

export default Loyal