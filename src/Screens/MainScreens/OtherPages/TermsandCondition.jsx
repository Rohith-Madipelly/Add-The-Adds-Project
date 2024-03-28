


import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import { TermsandConditionAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';




function TermsandCondition() {
  const [terms_conditionsData, setterms_conditionsData] = useState("No Data Found")
  const token = useSelector((state) => state.token)

  const APICaller = async () => {
    try {
      const res = await TermsandConditionAPI(token)
      console.log(res.data)
      setterms_conditionsData(res.data.terms_conditions)

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
        <div className='my-5 font-bold text-xl text-center'>Terms and Condition</div>
        <div className=' mx-10 px-10 '>
          {terms_conditionsData ? <div>
            {terms_conditionsData}
          </div> : ""}

        </div>


      </div>
    </div>
  )
}

export default TermsandCondition