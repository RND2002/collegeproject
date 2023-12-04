import React from 'react'
import './Dept.css'
import { DepartmentData } from './DepartmentData';

const Department = () => {
  return (
    <div>
      <div id='dpt'>Our Placed Students</div>
        <div id='dpt'>Department</div>
        <div className='flex flex-wrap m-10 mt-12 mb-12'>
         {DepartmentData.map((item)=>(
          
           <div className='border border-gray-500 rounded-lg max-h-full w-[24rem] ml-24 mt-5'>
          <div className='relative'>
          <img className='border border-black rounded-lg blur-[2px] ' src={item.image} alt=''/>
          <div className='flex flex-col'>
          <div className=''>
          <h1 class="absolute font-bold text-3xl  text-white top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
            {item.text1}</h1>
          </div>
           <div className=''>
           <h2 class="absolute font-semibold text-white  bottom-4 left-1/2 -translate-x-1/2">
            {item.text2}</h2>
           </div>
          </div>
        

         </div>
         </div>
        ) )}

        </div>
    </div>
  )
}

export default Department
