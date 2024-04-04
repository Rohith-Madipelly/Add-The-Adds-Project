


import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import { AboutusAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';


import './OtherPages.css'

function About() {


  const [AboutUsData, setAboutUsData] = useState("No Data Found")
  const token = useSelector((state) => state.token)

  const APICaller = async () => {
    try {
      const res = await AboutusAPI(token)

      setAboutUsData(res.data.aboutus)

      console.log(">>>", AboutUsData)
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
        <div className='my-5 font-bold text-xl text-center'>About us</div>
        <div className=' mx-10 px-10 sm:mx-2 '>

          {AboutUsData ? <div>
            {AboutUsData}
          </div> : ""}

        </div>


      </div>
    </div>
  )
}

export default About