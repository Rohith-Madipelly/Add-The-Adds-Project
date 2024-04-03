import React, { useEffect, useState } from 'react'
import '../CreatePage/CreatePage.css'
import '../Home/Home.css'
import { UserPageAPI } from '../../../utils/APIcall'
import { showToastMessage_success } from '../../../shared/Toaster'
import { useSelector } from 'react-redux'


function Profile() {
  const userName = useSelector((state) => state.userName);
  const [ProfileData,setProfileData]=useState()
  const [isLoading, setIsLoading] = useState(false);
  const Apicaller = async (userName) => {

    try {
      const responsed = await UserPageAPI(userName)
      if (responsed) {
        // if (res.status === 200) {
        setIsLoading(false)
        showToastMessage_success("responsed.data.message")

        // setTimeout(() => {
        //   navigate('/Contests');
        // }, 3000);
      }
      else {
        console.log("No Responsed")
      }
    } catch (error) {
      setIsLoading(false)

      if (error.response) {
        if (error.response.status === 401) {

        } else if (error.response.status === 404) {

        } else if (error.response.status === 500) {
        } else {
          toast.error('An error occurred during .', { position: toast.POSITION.TOP_CENTER })
        }
      } else if (error.request) {
        toast.error('No response received from the server.', { position: toast.POSITION.TOP_CENTER })
      } else {
        toast.error('Error setting up the request.', { position: toast.POSITION.TOP_CENTER })
      }
    }
  }

  useEffect(()=>{
    Apicaller(userName)
  },[])

  return (
    <div className='new_Page_GroundImage'>
      <div className='h-[70px]'></div>

      <div className='w-full px-8 sm:px-2 py-5'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 sm:col-span-9'>
            <div className='font-bold text-xl mb-5 text-center sm:text-start'>User Profile </div>
          </div>
        </div>

        



      </div>
    </div>
  )
}

export default Profile