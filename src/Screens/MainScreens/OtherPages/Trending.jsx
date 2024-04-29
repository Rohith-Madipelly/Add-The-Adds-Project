


import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import { SettingsAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';




function Trending() {
  const [TrendingData, setTrendingData] = useState("No Data Found")


  const APICaller = async () => {
    try {
      const res = await SettingsAPI()
      console.log(res.data.trending)
      setTrendingData(res.data.trending)

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
        <div className='my-5 font-bold text-xl text-center'>Trending Page</div>
        <div className=' mx-10 px-10 '>
          {TrendingData ? <div   dangerouslySetInnerHTML={{__html: TrendingData}}>
            {/* {TrendingData} */}
          </div> : ""}


        </div>


      </div>
    </div>
  )
}

export default Trending