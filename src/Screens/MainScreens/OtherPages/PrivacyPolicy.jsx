


import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import { PrivacyPolicyAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';




function PrivacyPolicy() {
  const [privacyPolicyData, setprivacyPolicyData] = useState("No Data Found")
  const token = useSelector((state) => state.token)

  const APICaller = async () => {
    try {
      const res = await PrivacyPolicyAPI(token)
      console.log(res.data)
      setprivacyPolicyData(res.data.privacyPolicy)

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
        <div className='my-5 font-bold text-xl text-center'>Privacy Policy</div>
        <div className=' mx-10 px-10 '>
          {privacyPolicyData ? <div   dangerouslySetInnerHTML={{__html: privacyPolicyData}}>
            {/* {privacyPolicyData} */}
          </div> : ""}

        </div>


      </div>
    </div>
  )
}

export default PrivacyPolicy