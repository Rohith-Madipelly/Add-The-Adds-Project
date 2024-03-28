


import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import { ServicesAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';




function Services() {
  const [ServicesData, setServicesData] = useState("No Data Found")
  const token = useSelector((state) => state.token)

  const APICaller = async () => {
    try {
   
      const res = await ServicesAPI(token)
      console.log(res.data.blog)
      // setServicesData(res.data)

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
    <div>
      <div className='h-[70px]'>
      </div>
      <div className='w-[100vw] h-[100vh] max-h-auto'>
        <div className='my-5 font-bold text-xl text-center'>Services</div>
        <div className=' mx-10 px-10 '>
          {ServicesData ? <div>
            {ServicesData}
          </div> : ""}

        </div>


      </div>
    </div>
  )
}

export default Services