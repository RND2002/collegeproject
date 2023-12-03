import React from "react";
import "./Advantages.css";
import adv1 from "../../assets/adv1.png";
import adv2 from "../../assets/adv2.png";
import adv3 from "../../assets/adv3.png";
import adv4 from "../../assets/adv4.png";
import adv5 from "../../assets/adv5.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";


const Advantages = () => {
  return (
    <div>
      <div id="adv">Top KIT Advantages</div>
      <div id="parent_div">
        <div className="advs">
          <img src={adv1} alt="" />
        </div>
        <div className="advs">
          <img src={adv2} alt="" />
        </div>
        <div className="advs">
          <img src={adv3} alt="" />
        </div>
        <div className="advs">
          <img src={adv4} alt="" />
        </div>
        <div className="advs">
          <img src={adv5} alt="" />
        </div>
      </div>
      <div id="parent2_div">
        <div className="advs">
          <img src={logo1} alt="" />
        </div>
        <div className="advs">
          <img src={logo2} alt="" />
        </div>
        <div className="advs">
          <img src={logo3} alt="" />
        </div>
        <div className="advs">
          <img src={logo4} alt="" />
        </div>
        <div className="advs">
          <img src={logo5} alt="" />
        </div>
        </div>
    </div>
  );
};

export default Advantages;
