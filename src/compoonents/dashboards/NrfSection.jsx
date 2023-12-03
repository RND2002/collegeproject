import React from 'react'
import './NrfSection.css'
import kashiit from '../../assets/kashi_main.png'
import nrf from '../../assets/nrf.png'
import { FaBookOpen } from "react-icons/fa";
{/* <FaBookOpen /> */}
const NrfSection = () => {
  return (
    <div id='main'>
        <div id="div_left"><img className='image' src={nrf} alt="" /></div>
        <div id="div_right"><img className='image' src={kashiit} alt="" /></div>
    </div>

  )
}

export default NrfSection
