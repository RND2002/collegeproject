import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import certificate from '../../assets/certificate.webp'
import ll from '../../assets/adv2.png'

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img className='cursor pointer -z-10 ' role='presentation' src={item.image} alt='' />
  ));

  return (
  <div className='flex flex-row'>
     <div className='w-2/3'>
     <AliceCarousel
    
    items={items}
    disableButtonControls
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000} // Adjust the value here to control the sliding speed
    infinite
    style={{ width: '66.666%' }}
  />
     </div>
  <div className='w-1/3' >
    <div className='flex flex-col justify-center items-center'>
    <img className='h-64 w-56' src={certificate} alt=''/>
    <div >
        
        <div className='mt-6'><p className='leading-6 font-normal font-serif'>Regarding Convocation Registration<br/>
      Regarding Registration and commencement of class<br/>
 Guidelines for filling online scholarship form<br/>
 Regarding Scholarship</p></div>
        
    </div>
    </div>
  </div>
  </div>
  );
};

export default MainCarousel;
