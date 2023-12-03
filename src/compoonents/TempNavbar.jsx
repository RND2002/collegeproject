import React from 'react'
import './Navbar.css'
import naac from '../assets/nac.webp'
import { IoIosArrowDown } from "react-icons/io";

const TempNavbar = () => {
  return (
    <div>
        <div className="navbar">
        <div className="kitlogocontainer">
            <div className="kitlogo"></div>
        </div>
        <div className="menubar">
            <div className="options">
                <span>ERP LOGIN</span>
                <span>ALUMNI</span>
                <span>HUMANITIES</span>
                <span>STUDENTS</span>
                <span>CAREERS</span>
                <span>NAAC</span>
                <span>TESTIMONIALS</span>
                <span>LIBRARY</span>
                <span>NIRF</span>
                <span>CONTACT US</span>
                <span>BSCC</span>
                <span>NAAC PEER TEAM VISIT</span>
            </div>
            <div className="menuline">
                <hr/>
            </div>
        </div>
        <div classNameName="naaclogocontainer">
            <div className="naaclogo"></div>
        </div>
    </div>
    <div className="mainmenubarout">
        <div className="mainmenubar">
           <div> <p>WHY KASHI IT</p> <span><IoIosArrowDown /></span></div>
                
            <div><p>ACADEMIC</p></div>
            <p>COURSES</p>
            <p>INSTITUTE</p>
            <p>ADMISSION</p>
            <p>EVENTS</p>
            <p>PLACEMENT</p>
            <p>RESEARCH</p>
            <p>PAY ONLINE</p>
        </div>
        <div className="phone">
            <div classNameName="phoneicon">
                <i className="fa-solid fa-phone"></i>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TempNavbar
