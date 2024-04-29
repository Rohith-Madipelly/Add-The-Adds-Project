


import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import { SettingsAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';




function Festivals() {
  const [FestivalsData, setFestivalsData] = useState("No Data Found")


  const APICaller = async () => {
    try {
      const res = await SettingsAPI()
      console.log(res.data.festivals)
      setFestivalsData(res.data.festivals)

    }
    catch (e) {
      console.log(e)
    } finally {

    }

  }


  useEffect(() => {
    OpenScroll()
    APICaller()
  }, [])

  return (
    <div className='new_Page_GroundImage'>
      <div className='h-[70px] HomeBackGroundImage'>
      </div>
      <div className='w-[100vw] h-[100vh] max-h-auto'>
        <div className='my-5 font-bold text-xl text-center'>Festivals Page</div>
        <div className=' mx-10 px-10 '>
          {FestivalsData ? <div   dangerouslySetInnerHTML={{__html: FestivalsData}}>
            {/* {FestivalsData} */}
          </div> : ""}


        </div>


      </div>
    </div>
  )
}

export default Festivals