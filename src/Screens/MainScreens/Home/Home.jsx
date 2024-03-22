import React from 'react'
import Searchbox from './Searchbox'
import './Home.css'
import Servicecards from './Servicecards'
import Premier_Add_Page from './Premier_Add_Page'
import AdvertisingComponents from '../../../Components/Funca/AdvertisingComponents'

function Home() {
  return (
    <div className=' p-1'>
      <div className='HomeBackGroundImage'>
        <Searchbox />
        <Servicecards />
        <Premier_Add_Page />
        <div className='h-[70px] sm:h-[0px]'></div>


      </div>
      <AdvertisingComponents />
      <div className='h-[50px] sm:h-[0px]'></div>

    </div>
  )
}

export default Home