


import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import { ContactUsAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';




function ContactUs() {
  const [ContactUsData, setContactUsData] = useState(false)
  const token = useSelector((state) => state.token)

  const APICaller = async () => {
    try {
      const res = await ContactUsAPI(token)
      console.log(res.data)
      setContactUsData(res.data)
      console.log("", ContactUsData)
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
      <div className='h-[70px]'>
      </div>
      <div className='w-[100vw] h-[100vh] max-h-auto'>
        <div className='my-5 font-bold text-xl text-center'>Contact Us </div>
        <div className=' mx-10 sm:mx-2 px-10 '>
         {ContactUsData?<ul className='mx-10 sm:mx-2'>
            <li><strong>Address:</strong> {ContactUsData.adress}</li>
            <li><strong>Email:</strong> {ContactUsData.email}</li>
            <li><strong>Phone:</strong> {ContactUsData.phone}</li>
            <li><strong>Website:</strong> <a href={ContactUsData.website} target="_blank" rel="noopener noreferrer">{ContactUsData.website}</a></li>
          </ul> :""}

        </div>


      </div>
    </div>
  )
}

export default ContactUs