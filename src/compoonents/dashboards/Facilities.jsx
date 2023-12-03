import React from 'react'
import { FacilityData } from './FacilityData'

const Facilities = () => {
  return (
    <div>
         <div id='dpt'>Facilities</div>
        <div className='flex flex-wrap ml-32 mt-12 mb-12'>
         {FacilityData.map((item)=>(
          <div>
           <div className='border border-gray-500 rounded-lg max-h-56 w-64 m-2 '>
         
          <img className='border border-black rounded-lg ' src={item.image} alt=''/>
         
        
            </div>
            <div><h2 className='font-semibold text-xl'>{item.text1}</h2></div>
         </div>
         
         
        ) )}

        </div>
    </div>
  )
}

export default Facilities
