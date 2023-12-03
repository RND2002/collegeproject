
import './App.css';
import Navbar from './compoonents/Navbar';

import KashiItinfo from './compoonents/dashboards/KashiItinfo';
import NrfSection from './compoonents/dashboards/NrfSection';
import CourseOffered from './compoonents/dashboards/CourseOffered';
import MainCarousel from './compoonents/dashboards/MainCarousel';
import Footer from './compoonents/Foooter'
import TempNavbar from './compoonents/TempNavbar';
import Department from './compoonents/dashboards/Department';
import Facilities from './compoonents/dashboards/Facilities';
import Recruiters from './compoonents/dashboards/Recruiters';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TempNavbar/>
      <MainCarousel/>
      <KashiItinfo/>
      <NrfSection/>
      <CourseOffered/>
      <Department/>
      <Facilities/>
      <Recruiters/>
      <Footer/>
    </div>
  );
}

export default App;
