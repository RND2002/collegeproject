import React from "react";
import "./CourseOffered.css";
import { FaBookOpen } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
const CourseOffered = () => {
  return (
    <div>
      <div id="csf">COURSES OFFERED</div>
      <div id="courses">
        <div id="courses_left">
          <div className="crs_left">
            <div className="heading"><span><FaBookOpen /></span>B.Tech</div>
            <div className="para">
              <p>Passed 10+2 examination with Physics and Mathematics as compulsory
              subjects along with one…</p>
            </div>
          </div>
          <div className="crs_left">
            <div className="heading"><span><FaBookOpen /></span>B.Pharm</div>
            <div className="para">
              <p>Passed 10+2 examination with Physics and Chemistry and Biology as
              compulsory subjects along with one…</p>
            </div>
          </div>
        </div>
        <div id="courses_right">
          <div className="crs_right">
            <div className="heading"><span><FaBookOpen /></span>MCA/MBA</div>
            <div className="para">
              <p>Passed Bachelor’s Degree of minimum 3 years duration. Obtained at
              least 50% marks..</p>
            </div>
          </div>
          <div className="crs_right">
            <div className="heading"><span><FaBookOpen /></span>BBA/BCA</div>
            <div className="para">
              <p>Passed 10+2 examination with any stream along with one…</p>
            </div>
          </div>
          <div className="crs_right">
            <div className="heading"><span><FaBookOpen /></span>Polytechnic</div>
            <div className="para"><p>Passed 10 examination</p></div>
          </div>
        </div>
      </div>
      <div id="register_btn"><button>Register for Admission 2023-2024</button></div>
      <div id="whatsapp"><FaWhatsappSquare style={{ color: 'green', fontSize: '3.5em' }}/></div>
      <div id="call"><IoMdCall style={{ color: 'white', fontSize: '2.5em' }} /></div>
    </div>
  );
};

export default CourseOffered;
