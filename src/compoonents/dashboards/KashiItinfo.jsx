import React from "react";
import "./KashiItInfo.css";
const KashiItinfo = () => {
  return (
    <div id="main_div" className="flex flex-col lg:flex-row">
      <div id="childDiv_left" className="ml-12">
        <h1 id="main_text">Kashi Institute Of Technology</h1>
        <p>
          Kashi Institute of Technology (KIT) got its existence in 2008 with the
          vibrant vision of Jain Education Society to give an outstanding
          ambience of technical education in the entire Uttar Pradesh and
          especially in Purvanchal, it is approved by All India Council of
          Technical Education (AICTE) and is affiliated to Dr. A.P.J. Abdul
          Kalam Technical University (AKTU) Lucknow (formerly U.P.T.U Lucknow).…
        </p>
        <div id="read_btn">
          <button>
            <span>Read more</span>
          </button>
        </div>
      </div>

      <div id="childDiv_right">
        <div className="child_divs">
          <div className="num">16.6</div>
          <div className="txt">Acre Campus</div>
        </div>
        <div className="child_divs">
          <div className="num">6,500</div>
          <div className="txt">Students</div>
        </div>
        <div className="child_divs">
          <div className="num">300+</div>
          <div className="txt">Recruiters</div>
        </div>
        <div className="child_divs">
          <div className="num">2,000+</div>
          <div className="txt">Job Offers</div>
        </div>
        <div className="child_divs">
          <div className="num">16,000+</div>
          <div className="txt">Alumni</div>
        </div>
        <div className="child_divs">
          <div className="num">15+</div>
          <div className="txt">Years Journey of Excellence</div>
        </div>
      </div>
    </div>
  );
};

export default KashiItinfo;
