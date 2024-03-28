import React, { useEffect, useState } from 'react'
import './UploadAdd.css'
import CustomButton from '../../../Components/UI/Button/CustomButton'
import AdvertisingComponents from '../../../Components/Funca/AdvertisingComponents'
import { Button } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { GetPlanInfo } from '../../../utils/APIcall'
function UploadPage() {

  const [PlanData, SetPlanData] = useState([])
  const token = useSelector((state) => state.token);

  const ApiCaller = async () => {
    try {
      const res = await GetPlanInfo(token)

      SetPlanData(res.data.plans)
      console.log("Data Page", PlanData)

    } catch (e) {
      console.log(e)
    }
    finally {
      console.log("API Call Finished .")
    }
  }

  useEffect(() => {
    ApiCaller()
  }, [])

  let imagesBe = [
    { name: "hero1", Type: 'Free Add', ImageLink: '/images/icons2/Rectangle 552.png' },
    { name: "hero1", Type: 'Paid Add', ImageLink: '/images/icons2/Rectangle 553.png' },
    { name: "hero1", Type: 'Gift Add', ImageLink: '/images/icons2/Rectangle 554.png' }
  ]

  let Plan = [
    { PlanName: 'Basic', price: '300', duration: '6 Months', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { PlanName: 'Personal', price: '500', duration: '12 Months', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { PlanName: 'Business', price: '1000', duration: '24 Months', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ]


  return (
    <div className='h-auto'>
      <div className='h-[70px]'>

      </div>

      <div className=' w-full flex justify-center mt-8'>
        <div className='w-[70vw] h-[auto]'>
          <div className='grid grid-cols-4 md:grid-flow-col-3 sm:grid-cols-2 gap-8 gap-y-3'>
            <a href='Home'>
              <CustomButton
              classStyle='text-blue-950 font-bold  text-xs'
              Linkurl='/Home'
            >
              My Page <img src='/images/icons2/Frame (1).png' className='inline ps-2' />
            </CustomButton>
            </a>
            <CustomButton
              classStyle='text-blue-950 font-bold text-xs'
            // Linkurl='/Share'
            >
              Share <img src='/images/icons2/Frame.png' className='inline ps-2' />
            </CustomButton>


            <CustomButton
              classStyle='text-blue-950 font-bold text-xs '
              Linkurl='/Add'
            >
              Add <img src='/images/icons2/Vector.png' className='inline ps-2' />
            </CustomButton>


            <a href='Home'>
            <CustomButton
              classStyle='text-blue-950 font-bold text-xs'
              Linkurl='/Pink'
            >
              cancel
            </CustomButton>
            </a>
          </div>




        </div>


      </div>


      <div className='mx-[80px] sm:mx-[10px] my-9'>
        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>Upload Add</h1>
          <div className='mt-5'>
            <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 justify-center'>
              {PlanData.length === 0 ? (
                <div className="text-center my-2 font-bold text-base">No data found</div>
              ) : (
                PlanData.map((Data, index) => (
                  <div key={index}>
                    <div className="text-center my-2 font-bold text-base">{Data.Type}</div>
                    <img src={Data.PlanPic} alt={`Plan ${index}`} />
                  </div>
                ))
              )}

            </div>
            <div className='text-center tracking-[3.00px] my-5 w-full'><button className='bg-blue-800 px-8 py-3 rounded-lg text-white font-bold leading-31 tracking-5'>Select Free Ads Option </button></div>
          </div>
        </div>

        {/* section 2 */}
        <div className='grid grid-cols-6 sm:grid-cols-2 my-10 gap-10 '>
          <div className='col-span-2 sm:col-span-9 '>
            <div className='flex flex-col items-start  border-b border-r p-[40px] mx-5'>
              <CustomButton classStyle={'my-3 bg-white h-auto'}>Upload My Page</CustomButton>
              <CustomButton classStyle={'my-3 bg-white h-auto'}>Add Ads Links</CustomButton>
              <CustomButton classStyle={'my-3 bg-white h-auto'}>Gift Ads</CustomButton>
              <CustomButton classStyle={'my-3 bg-white h-auto'}>Delete</CustomButton>
            </div>
          </div>

          <div className='col-span-4 sm:col-span-10 sm:ms-10 '>
            <div className='w-full h-full flex  items-center'>
              <div className='backGroundGradinatecss w-full xl:h-auto rounded-xl flex flex-col py-10 justify-center items-center max-w-[80%] max-h-[100%]'>
                <CustomButton classStyle={'my-4 bg-white font-bold'}>My Page</CustomButton>
                <CustomButton classStyle={'my-4 bg-white font-bold'}>Add Page</CustomButton>
                <CustomButton classStyle={'my-4 bg-white font-bold'}>Add the Adds</CustomButton>
              </div>
            </div>
          </div>
        </div>

        {/* 3nd Section */}
        <div className='grid grid-row-2'>
          <h2 className='text-center font-bold text-2xl leading-31 tracking-5 my-5'>Choose a plan that’s right for you</h2>

          <div className='grid grid-cols-3 sm:grid-cols-1 ,mdl:grid-cols-2 w-full  gap-7 '>
            {PlanData.length === 0 ? (
              <div className='text-center text-black font-bold'>No plans available</div>
            ) : (
              PlanData.map((data, index) => (
                <div key={index} className='h-[500px] rounded-3xl'>
                  <div className='backGroundGradinateForprimenrm p-5 w-full h-full rounded-3xl'>
                    <div className='flex justify-center items-center'>
                      <div className=' text-white text-center pb-3 border-b-2 border-r-pink-800 font-bold w-[50%]'>
                        {data.PlanName}
                      </div>
                    </div>

                    <div className='text-white text-center mt-5'>
                      <div className='font-bold text-3xl'>{data.PlanPrize} ₹</div>
                      <div className='text-sm font-normal my-2'>{data.Duration}</div>
                      <div className='text-lg mt-4'>{data.Description}</div>
                    </div>

                    <div className='text-white text-center mt-5'>
                      <div className='my-6'>
                        <img className='inline-block' src="images/dd/img_frame_green_a700.svg" alt="image_three" /> Lorem Ipsum is simply dummy
                      </div>
                      <div className='my-5'>
                        <img className='inline-block' src="images/dd/img_frame_deep_orange_a400.svg" alt="image_three" /> Lorem Ipsum is simply dummy
                      </div>
                      <div className='my-5'>
                        <img className='inline-block' src="images/dd/img_frame_green_a700.svg" alt="image_three" /> Lorem Ipsum is simply dummy
                      </div>
                    </div>
                    <div className='flex justify-center'><Button>Get this plan</Button></div>
                  </div>
                </div>
              ))
            )}





          </div>

        </div>
      </div>
      <AdvertisingComponents />
    </div>
  )
}

export default UploadPage