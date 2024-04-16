import React, { useEffect } from 'react'
import Searchbox from './Searchbox'
import Servicecards from './Servicecards'
import Premier_Add_Page from './Premier_Add_Page'
import AdvertisingComponents from '../../../Components/Funca/AdvertisingComponents'
import { OpenScroll } from '../../../utils/OpenScroller'



function Home() {
  useEffect(()=>{
    OpenScroll()
  },[])
  return (
    <div>
         
      <div className=' p-1'>
        <div className='h-[70px]'>

        </div>

        <div className='HomeBackGroundImage pb-6'>

          <Searchbox />
          <Servicecards />
          
          <Premier_Add_Page />
          {/* <div className='h-[70px] sm:h-[0px]'></div> */}


        </div>
        <AdvertisingComponents />
        {/* <div className='h-[50px] sm:h-[0px]'></div> */}

      </div>
    </div>
  )
}

export default Home